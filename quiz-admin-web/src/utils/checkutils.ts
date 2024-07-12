export default class CheckUtils {
  static isNotEmpty(value: undefined | null | string) {
    return value !== undefined && value !== null && value.length > 0
  }

  static isEmpty(value: undefined | null | string) {
    return value === undefined || value === null || value.length === 0
  }

  static isNotNull(value: undefined | null | any) {
    return value !== undefined && value !== null
  }

  static isArrayNotEmpty(value: undefined | null | any) {
    return (
      value !== undefined &&
      value !== null &&
      Array.isArray(value) &&
      value.length > 0
    )
  }

  static isNumeric(str: any) {
    if (typeof str !== 'string') return false
    return !Number.isNaN(str) && !Number.isNaN(Number.parseFloat(str))
  }

  static isTwitterUrl(url: string): boolean {
    const twitterUrlPattern =
      /^https?:\/\/(?:www\.)?twitter\.com\/\w+\/status\/\d+/
    return twitterUrlPattern.test(url)
  }

  static isTwitchChannel(url: string) {
    const twitchRegex =
      /^(?:https?:\/\/)?(?:www\.)?twitch\.tv\/([a-zA-Z0-9_]{4,25})$/
    return twitchRegex.test(url)
  }

  static isInstagramPostUrl(url: string): boolean {
    const instagramPostUrlPattern =
      /^https?:\/\/(?:www\.)?instagram\.com\/p\/[A-Za-z0-9-_]+/
    return instagramPostUrlPattern.test(url)
  }

  static isInstagramProfileUrl(url: string): boolean {
    const instagramProfileUrlPattern =
      /^https?:\/\/(?:www\.)?instagram\.com\/[A-Za-z0-9-_]+\/?$/
    return instagramProfileUrlPattern.test(url)
  }

  static isTelegramUrl(url: string): boolean {
    const telegramUrlPattern =
      /^https?:\/\/(?:www\.)?t(?:elegram)?\.me\/[+A-Za-z0-9_]+\/?$/
    return telegramUrlPattern.test(url)
  }

  static isTelegramPublicUrl(url: string): boolean {
    const telegramUrlPattern =
      /^https?:\/\/(?:www\.)?t(?:elegram)?\.me\/[A-Za-z0-9_]+\/?$/
    return telegramUrlPattern.test(url)
  }

  static isValidUrl(url: string): boolean {
    const urlRegex = /^https?:\/\/(?:www\.)?[^\s/$.?#].[^\s]*$/i
    return urlRegex.test(url)
  }

  static isYouTubeChannelUrl(url: string): boolean {
    const youtubeChannelUrlPattern =
      /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/@([A-Za-z0-9_-]+)/
    const youtubeShortenedUrlPattern =
      /^(?:https?:\/\/)?(?:www\.)?youtu\.be\/@([A-Za-z0-9_-]+)/
    return (
      youtubeChannelUrlPattern.test(url) || youtubeShortenedUrlPattern.test(url)
    )
  }

  static isYouTubeVideoUrl(url: string): boolean {
    const youtubeVideoUrlPattern =
      /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=([A-Za-z0-9_-]+))(?:\S+)?$/
    const youtubeShortenedUrlPattern =
      /^(?:https?:\/\/)?(?:www\.)?youtu\.be\/([A-Za-z0-9_-]+)$/
    return (
      youtubeVideoUrlPattern.test(url) || youtubeShortenedUrlPattern.test(url)
    )
  }
}
