'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

/**
 * Скроллит:
 * - В начало страницы ТОЛЬКО после клика по внутренней ссылке/кнопке (push/replace).
 * - К якорю (#id), если он есть, и элемент найден.
 *
 * НЕ трогает:
 * - Возврат во вкладку/восстановление позиции.
 * - Навигацию назад/вперёд по истории (popstate).
 */
export default function ScrollManager() {
	const pathname = usePathname()
	const shouldScrollFromClickRef = useRef(false)
	const isPopstateRef = useRef(false)

	// Отслеживаем клики по внутренним ссылкам (делаем это один раз)
	useEffect(() => {
		const onDocumentClick = (e: MouseEvent) => {
			// Ловим клик по <a> или по элементу внутри <a>
			const path = e.composedPath?.() ?? []
			const anchor = path.find(el => el instanceof HTMLAnchorElement) as
				| HTMLAnchorElement
				| undefined

			if (!anchor) return

			// Опционально позволяем «отписаться» от автоскролла
			if (anchor.hasAttribute('data-no-scrollmanager')) return

			const href = anchor.getAttribute('href') || ''
			// Внутренние ссылки: начинаются с / или # или относительные без протокола
			const isSameOrigin =
				href.startsWith('/') ||
				href.startsWith('#') ||
				(!href.includes('://') && !href.startsWith('mailto:'))

			if (!isSameOrigin) return

			// Клик по внутренней ссылке → после смены pathname скроллим
			shouldScrollFromClickRef.current = true
			isPopstateRef.current = false
		}

		const onPopState = () => {
			// Назад/вперёд по истории — не вмешиваемся
			isPopstateRef.current = true
			shouldScrollFromClickRef.current = false
		}

		document.addEventListener('click', onDocumentClick, true) // capture, чтобы сработало раньше
		window.addEventListener('popstate', onPopState)

		return () => {
			document.removeEventListener('click', onDocumentClick, true)
			window.removeEventListener('popstate', onPopState)
		}
	}, [])

	// Реакция на фактическую смену маршрута
	useEffect(() => {
		// Если это back/forward — выходим (браузер сам восстановит позицию)
		if (isPopstateRef.current) return

		// Даем разметке прогрузиться
		const id = window.requestAnimationFrame(() => {
			const hash = window.location.hash?.slice(1)

			if (hash) {
				const el = document.getElementById(hash)
				if (el) {
					el.scrollIntoView({
						behavior: 'smooth',
						block: 'start',
						inline: 'nearest',
					})
					// сбрасываем флаги — задача выполнена
					shouldScrollFromClickRef.current = false
					return
				}
			}

			if (shouldScrollFromClickRef.current) {
				// Скроллим вверх ТОЛЬКО если переход инициирован кликом
				window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
				shouldScrollFromClickRef.current = false
			}
			// если не клик и нет # — ничего не делаем (сохраняем позицию)
		})

		return () => window.cancelAnimationFrame(id)
	}, [pathname])

	return null
}
