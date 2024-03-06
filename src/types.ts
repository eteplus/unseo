/**
 * Open Graph Protocol
 * @see https://ogp.me/#types
 *
 * ```html
 * <meta property="og:type" content="website" />
 * ```
 */
type OpenGraphType =
  | 'website'
  | 'article'
  | 'book'
  | 'profile'
  | 'music.song'
  | 'music.album'
  | 'music.playlist'
  | 'music.radio_station'
  | 'video.movie'
  | 'video.episode'
  | 'video.tv_show'
  | 'video.other';

/**
 * Open Graph Profile - og:type 'profile'
 */
export type OpenGraphProfileMetadata = {
  /**
   * username
   *
   * ```html
   * <meta property="profile:username" content="username" />
   * ```
   */
  username: string;
  /**
   * first name
   *
   * ```html
   * <meta property="profile:first_name" content="first_name" />
   * ```
   */
  firstName?: string;
  /**
   * last name
   *
   * ```html
   * <meta property="profile:last_name" content="last_name" />
   * ```
   */
  lastName?: string;
  /**
   * gender
   *
   * ```html
   * <meta property="profile:gender" content="male" />
   * ```
   */
  gender?: 'male' | 'female';
};

/**
 * Open Graph Book - og:type 'book'
 */
export type OpenGraphBookMetadata = {
  /**
   * author
   *
   * ```html
   * <meta property="book:author" content="author" />
   * ```
   */
  authors?: string[];
  /**
   * isbn
   *
   * ```html
   * <meta property="book:isbn" content="isbn" />
   * ```
   */
  isbn?: string;
  /**
   * release date
   *
   * ```html
   * <meta property="book:release_date" content="2022-01-01" />
   * ```
   */
  releaseDate?: string;
  /**
   * tag
   *
   * ```html
   * <meta property="book:tag" content="tag" />
   * ```
   */
  tags?: string[];
};

/**
 * Open Graph Article - og:type 'article'
 */
export type OpenGraphArticleMetadata = {
  /**
   * author
   *
   * ```html
   * <meta property="article:author" content="author" />
   * ```
   */
  authors?: string[];
  /**
   * section
   *
   * ```html
   * <meta property="article:section" content="section" />
   * ```
   */
  section?: string;
  /**
   * tag
   *
   * ```html
   * <meta property="article:tag" content="tag" />
   * ```
   */
  tags?: string[];
  /**
   * published time
   *
   * ```html
   * <meta property="article:published_time" content="2022-01-01T12:00:00Z" />
   * ```
   */
  publishedTime?: string;
  /**
   * modified time
   *
   * ```html
   * <meta property="article:modified_time" content="2022-01-01T12:00:00Z" />
   * ```
   */
  modifiedTime?: string;
  /**
   * expiration time
   *
   * ```html
   * <meta property="article:expiration_time" content="2022-01-01T12:00:00Z" />
   * ```
   */
  expirationTime?: string;
};

/**
 * Open Graph Music Song - og:type 'music.song'
 */
export type OpenGraphMusicSongMetadata = {
  /**
   * album
   *
   * ```html
   * <meta property="music:album" content="https://open.spotify.com/album/1NAmidJlEaVgA3MpcPFYGq" />
   * ```
   */
  album?: string;
  /**
   * album disc
   *
   * ```html
   * <meta property="music:album:disc" content="1" />
   * ```
   */
  albumDisc?: number;
  /**
   * album track
   *
   * ```html
   * <meta property="music:album:track" content="3" />
   * ```
   */
  albumTrack?: number;
  /**
   * The song's duration in seconds.
   *
   * ```html
   * <meta property="music:duration" content="221" />
   * ```
   */
  duration?: number;
  /**
   * musician
   *
   * ```html
   * <meta name="music:musician" content="https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02">
   * ```
   */
  musicians?: string[];
  /**
   * release date
   *
   * ```html
   * <meta property="music:release_date" content="2019-08-23" />
   * ```
   */
  releaseDate?: string;
};

/**
 * Open Graph Music Album - og:type 'music.album'
 */
export type OpenGraphMusicAlbumMetadata = {
  /**
   * song
   *
   * ```html
   * <meta name="music:song" content="https://open.spotify.com/track/43rA71bccXFGD4C8GOpIlN">
   * <meta name="music:song:disc" content="1">
   * <meta name="music:song:track" content="1">
   * <meta name="music:song" content="https://open.spotify.com/track/1BxfuPKGuaTgP7aM0Bbdwr">
   * <meta name="music:song:disc" content="1">
   * <meta name="music:song:track" content="2">
   * ...
   * ```
   */
  songs?: Array<{
    url: string;
    disc?: number;
    track?: number;
  }>;
  /**
   * musician
   *
   * ```html
   * <meta name="music:musician" content="https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02">
   * ```
   */
  musicians?: string[];
  /**
   * release date
   *
   * ```html
   * <meta property="music:release_date" content="2019-08-23" />
   * ```
   */
  releaseDate?: string;
};

/**
 * Open Graph Music Playlist - og:type 'music.playlist'
 */
export type OpenGraphMusicPlaylistMetadata = {
  /**
   * song
   *
   * ```html
   * <meta name="music:song" content="https://open.spotify.com/track/43rA71bccXFGD4C8GOpIlN">
   * <meta name="music:song:disc" content="1">
   * <meta name="music:song:track" content="1">
   * <meta name="music:song" content="https://open.spotify.com/track/1BxfuPKGuaTgP7aM0Bbdwr">
   * <meta name="music:song:disc" content="1">
   * <meta name="music:song:track" content="2">
   * ...
   * ```
   */
  songs?: Array<{
    url: string;
    disc?: number;
    track?: number;
  }>;
  /**
   * creator
   *
   * ```html
   * <meta property="music:creator" content="https://open.spotify.com/user/spotify" />
   * ```
   */
  creator?: string;
};

/**
 * Open Graph Music Radio Station - og:type 'music.radio_station'
 */
export type OpenGraphMusicRadioStationMetadata = {
  /**
   * creator
   *
   * ```html
   * <meta property="music:creator" content="https://open.spotify.com/user/spotify" />
   * ```
   */
  creator?: string;
};

/**
 * Open Graph Video Movie - og:type 'video.movie'
 */
export type OpenGraphVideoMovieMetadata = {
  /**
   * actor
   *
   * ```html
   * <meta property="video:actor" content="actor 1" />
   * <meta property="video:actor:role" content="actor role" />
   * <meta property="video:actor" content="actor 2" />
   * <meta property="video:actor:role" content="actor role" />
   * ```
   */
  actors?: Array<{
    name: string;
    role?: string;
  }>;
  /**
   * director
   *
   * ```html
   * <meta property="video:director" content="director" />
   * ```
   */
  directors?: string[];
  /**
   * writer
   *
   * ```html
   * <meta property="video:writer" content="writer" />
   * ```
   */
  writers?: string[];
  /**
   * duration
   *
   * ```html
   * <meta property="video:duration" content="123" />
   * ```
   */
  duration?: number;
  /**
   * release date
   *
   * ```html
   * <meta property="video:release_date" content="2022-01-01" />
   * ```
   */
  releaseDate?: string;
  /**
   * tag
   *
   * ```html
   * <meta property="video:tag" content="tag1" />
   * <meta property="video:tag" content="tag2" />
   * ...
   * ```
   */
  tags?: string[];
};

/**
 * Open Graph Video Episode - og:type 'video.episode'
 */
export type OpenGraphVideoEpisodeMetadata = {
  /**
   * series
   *
   * ```html
   * <meta property="video:series" content="series" />
   * ```
   */
  series?: string;
  /**
   * actor
   *
   * ```html
   * <meta property="video:actor" content="actor 1" />
   * <meta property="video:actor:role" content="actor role" />
   * <meta property="video:actor" content="actor 2" />
   * <meta property="video:actor:role" content="actor role" />
   * ```
   */
  actors?: Array<{
    name: string;
    role?: string;
  }>;
  /**
   * director
   *
   * ```html
   * <meta property="video:director" content="director" />
   * ```
   */
  directors?: string[];
  /**
   * writer
   *
   * ```html
   * <meta property="video:writer" content="writer" />
   * ```
   */
  writers?: string[];
  /**
   * duration
   *
   * ```html
   * <meta property="video:duration" content="123" />
   * ```
   */
  duration?: number;
  /**
   * release date
   *
   * ```html
   * <meta property="video:release_date" content="2022-01-01" />
   * ```
   */
  releaseDate?: string;
  /**
   * tag
   *
   * ```html
   * <meta property="video:tag" content="tag1" />
   * <meta property="video:tag" content="tag2" />
   * ...
   * ```
   */
  tags?: string[];
};

/**
 * Open Graph Video TV Show - og:type 'video.tv_show'
 */
export type OpenGraphVideoTVShowMetadata = OpenGraphVideoMovieMetadata;

/**
 * Open Graph Video Other - og:type 'video.other'
 */
export type OpenGraphVideoOtherMetadata = OpenGraphVideoMovieMetadata;

/**
 * Open Graph Image - og:image
 * @see https://ogp.me/#structured
 */
export type OpenGraphImageMetadata = {
  /**
   * preview image url
   *
   * ```html
   * <meta property="og:image" content="https://example.com/image.jpg" />
   * ```
   */
  url: URL | string;
  /**
   * alt text for preview image
   *
   * ```html
   * <meta property="og:image:alt" content="A shiny red apple with a bite taken out" />
   * ```
   */
  alt: string;
  /**
   * preview image secure url
   *
   * ```html
   * <meta property="og:image:secure_url" content="https://secure.example.com/image.jpg" />
   * ```
   */
  secureUrl?: URL | string;
  /**
   * image type, default is 'image/png'
   *
   * ```html
   * <meta property="og:image:type" content="image/jpeg" />
   * ```
   */
  type?: string;
  /**
   * preview image width - 1200 standard
   *
   * ```html
   * <meta property="og:image:width" content="1200" />
   * ```
   */
  width?: number;
  /**
   * preview image height - 627 standard
   *
   * ```html
   * <meta property="og:image:height" content="627" />
   * ```
   */
  height?: number;
};

/**
 * Open Graph Video Media - og:video
 */
export type OpenGraphVideoMetadata = {
  /**
   * video URL
   *
   * ```html
   * <meta property="og:video" content="https://example.com/movie.swf" />
   * ```
   */
  url: URL | string;
  /**
   * video secure URL
   *
   * ```html
   * <meta property="og:video:secure_url" content="https://secure.example.com/movie.swf" />
   * ```
   */
  secureUrl?: URL | string;
  /**
   * video type, default is 'video/mp4'
   *
   * ```html
   * <meta property="og:video:type" content="video/mp4" />
   * ```
   */
  type?: string;
  /**
   * video width
   *
   * ```html
   * <meta property="og:video:width" content="400" />
   * ```
   */
  width?: number | string;
  /**
   * video height
   *
   * ```html
   * <meta property="og:video:height" content="300" />
   * ```
   */
  height?: number | string;
};

/**
 * Open Graph Audio - og:audio
 */
export type OpenGraphAudioMetadata = {
  /**
   * audio URL
   *
   * ```html
   * <meta property="og:audio" content="https://example.com/sound.mp3" />
   * ```
   */
  url: URL | string;
  /**
   * audio secure URL
   *
   * ```html
   * <meta property="og:audio:secure_url" content="https://secure.example.com/sound.mp3" />
   * ```
   */
  secureUrl?: URL | string;
  /**
   * audio type
   *
   * ```html
   * <meta property="og:audio:type" content="audio/mpeg" />
   * ```
   */
  type?: string;
};

/**
 * Open Graph Locale - og:locale
 */
export type OpenGraphLocaleMetadata = {
  /**
   * locale
   *
   * ```html
   * <meta property="og:locale" content="en_US" />
   * ```
   */
  default: string;
  /**
   * alternate locale
   *
   * ```html
   * <meta property="og:locale:alternate" content="fr_FR" />
   * <meta property="og:locale:alternate" content="de_DE" />
   * ```
   */
  alternates?: string[];
};

export type OpenGraphMusicMetadataMap = {
  'music.song': OpenGraphMusicSongMetadata;
  'music.album': OpenGraphMusicAlbumMetadata;
  'music.playlist': OpenGraphMusicPlaylistMetadata;
  'music.radio_station': OpenGraphMusicRadioStationMetadata;
};

export type OpenGraphVideoMetadataMap = {
  'video.movie': OpenGraphVideoMovieMetadata;
  'video.episode': OpenGraphVideoEpisodeMetadata;
  'video.tv_show': OpenGraphVideoTVShowMetadata;
  'video.other': OpenGraphVideoOtherMetadata;
};

export type OpenGraphBaseMetadata<T = string> = {
  /**
   * title
   *
   * ```html
   * <meta property="og:title" content="Title" />
   * ```
   */
  title: string;
  /**
   * description
   *
   * ```html
   * <meta property="og:description" content="Description" />
   * ```
   */
  description?: string;
  /**
   * type
   *
   * ```html
   * <meta property="og:type" content="website" />
   * ```
   */
  type: T;
  /**
   * site name
   *
   * ```html
   * <meta property="og:site_name" content="Site Name" />
   * ```
   */
  siteName?: string;
  /**
   * url
   *
   * ```html
   * <meta property="og:url" content="https://example.com/page.html" />
   * ```
   */
  url?: URL | string;
  /**
   * determiner
   */
  determiner?: 'a' | 'an' | 'the' | '' | 'auto';
  /**
   * image
   */
  images?: OpenGraphImageMetadata[];
  /**
   * video
   */
  videos?: OpenGraphVideoMetadata[];
  /**
   * audio
   */
  audios?: OpenGraphAudioMetadata[];
  /**
   * locale
   */
  locale?: OpenGraphLocaleMetadata;
};

/**
 * Open Graph Metadata
 * @see https://ogp.me
 */
export type OpenGraphMetadata<T extends OpenGraphType | string = OpenGraphType, Extends = Record<string, any>> = T extends OpenGraphType
  ? OpenGraphBaseMetadata<T> & {
    /**
     * profile
     */
    profile?: T extends 'profile' ? OpenGraphProfileMetadata : undefined;
    /**
     * book
     */
    book?: T extends 'book' ? OpenGraphBookMetadata : undefined;
    /**
     * article
     */
    article?: T extends 'article' ? OpenGraphArticleMetadata : undefined;
    /**
     * music
     */
    music?: T extends keyof OpenGraphMusicMetadataMap ? OpenGraphMusicMetadataMap[T] : undefined;
    /**
     * video
     */
    video?: T extends keyof OpenGraphVideoMetadataMap ? OpenGraphVideoMetadataMap[T] : undefined;
  }
  : OpenGraphBaseMetadata<T> & Extends;

/**
 * Twitter Metadata
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
 */
export type TwitterMetadata = {
  /**
   * twitter title
   *
   * ```html
   * <meta name="twitter:title" content="Title" />
   * ```
   */
  title: string;
  /**
   * twitter card
   *
   * ```html
   * <meta name="twitter:card" content="summary_large_image" />
   * ```
   */
  card: 'summary' | 'summary_large_image' | 'app' | 'player';
  /**
   * twitter site
   * twitter handle (@username) of site owner
   *
   * ```html
   * <meta name="twitter:site" content="@site" />
   * ```
   */
  site?: string;
  /**
   * twitter creator
   * twitter handle (@username) of content owner (usually same as site owner)
   *
   * ```html
   * <meta name="twitter:creator" content="@creator" />
   * ```
   */
  creator?: string;
  /**
   * twitter description
   *
   * ```html
   * <meta name="twitter:description" content="Description" />
   * ```
   */
  description?: string;
  /**
   * twitter image
   *
   * ```html
   * <meta name="twitter:image" content="https://example.com/image.jpg" />
   * <meta name="twitter:image:alt" content="twitter image alt" />
   * ```
   */
  image?: {
    url: URL | string;
    alt?: string;
  };
};

/**
 * robots
 *
 * ```html
 * <meta name="robots" content="index,follow,nosnippet,max-snippet:-1,max-image-preview:none,noarchive,noimageindex,max-video-preview:-1,notranslate">
 * ```
 * @see https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
 */
export type RobotsMetadata = {
  /**
   * Do not show this page, media, or resource in search results.
   * @default false
   */
  noindex?: boolean;
  /**
   * Do not follow the links on this page.
   * @default false
   */
  nofollow?: boolean;
  /**
   * Do not show a cached link in search results.
   */
  noarchive?: boolean;
  /**
   * Do not show a text snippet or video preview in the search results for this page.
   */
  nosnippet?: boolean;
  /**
   * Use a maximum of [number] characters as a textual snippet for this search result.
   */
  maxSnippet?: number;
  /**
   * Set the maximum size of an image preview for this page in a search results.
   */
  maxImagePreview?: 'none' | 'standard' | 'large';
  /**
   * Use a maximum of [number] seconds as a video snippet for videos on this page in search results.
   */
  maxVideoPreview?: number;
  /**
   * Do not show this page in search results after the specified date/time.
   */
  unavailableAfter?: string;
  /**
   * Do not index images on this page.
   */
  noimageindex?: boolean;
  /**
   * Don't offer translation of this page in search results.
   */
  notranslate?: boolean;
};

/**
 * alternate language
 *
 * ```html
 * <link rel="alternate" hreflang="en" href="https://example.com/en/page.html" />
 * ```
 */
export type LanguageAlternate = {
  href: URL | string;
  hreflang: string;
};

/**
 * mobile alternate
 *
 * ```html
 * <link rel="alternate" media="only screen and (max-width: 640px)" href="https://m.example.com/page.html" />
 * ```
 */
export type MobileAlternate = {
  href: URL | string;
  media: string;
};

/**
 * Facebook Metadata
 * @see https://developers.facebook.com/docs/sharing/webmasters/
 *
 * ```html
 * <meta property="fb:app_id" content="123456789" />
 * ```
 */
export type FacebookMetadata = {
  appId: string;
};

export type HTML5MetaTag = {
  name: string;
  content: string;
};

export type RDFaMetaTag = {
  property: string;
  content: string;
};

export type HTTPEquivMetaTag = {
  httpEquiv: 'content-security-policy' | 'content-type' | 'default-style' | 'x-ua-compatible' | 'refresh';
  content: string;
};

export type MetaTag = HTML5MetaTag | RDFaMetaTag | HTTPEquivMetaTag;

export type LinkTag = {
  rel: string;
  href: string;
  hreflang?: string;
  media?: string;
  sizes?: string;
  type?: string;
  as?: string;
  crossorigin?: string;
  imagesrcset?: string;
  imagesizes?: string;
  referrerPolicy?: string;
  integrity?: string;
  color?: string;
};

export type SEOProps = {
  /**
   * Sets the title of the page
   */
  title?: string;
  /**
   * Sets the default title used when no title is set on a page
   */
  defaultTitle?: string;
  /**
   * Allows setting the default title template to be added to the title
   */
  titleTemplate?: string;
  /**
   * Sets the meta description of the page
   */
  description?: string;
  /**
   * Sets the page canonical URL
   */
  canonical?: URL | string;
  /**
   * Sets the meta keywords of the page
   */
  keywords?: string[];
  /**
   * Sets the language of the alternate URLs
   */
  languageAlternates?: LanguageAlternate[];
  /**
   * Sets the mobile page alternate
   */
  mobileAlternate?: MobileAlternate;
  /**
   * Sets the meta robots of the page
   * @default { noindex: false, nofollow: false }
   */
  robots?: RobotsMetadata | false;
  /**
   * Sets the open graph metadata of the page
   */
  openGraph?: OpenGraphMetadata;
  /**
   * Sets the Twitter metadata of the page
   */
  twitter?: TwitterMetadata;
  /**
   * Sets the Facebook metadata of the page
   */
  facebook?: FacebookMetadata;
  /**
   * Allows adding any other meta tags to the page
   */
  meta?: MetaTag[];
  /**
   * Allows adding any other link tags to the page
   */
  link?: LinkTag[];
};
