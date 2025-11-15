// src/hooks/useApiConfig.ts
'use client'
import { getDomainConfig } from '@/lib/domain-config'

export const useApiConfig = () => {
	const domainConfig = getDomainConfig()

	return {
		apiUrl: domainConfig.apiUrl,
		domainLang: domainConfig.lang,
		isBackend: domainConfig.apiUrl.length > 0,
	}
}
