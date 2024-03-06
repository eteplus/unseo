import OpenGraphVideoMovieTags from './components/open-graph-video-movie-tags.astro';

export { default as ExtendedLinkTag } from './components/extended-link-tag.astro';
export { default as ExtendedMetaTag } from './components/extended-meta-tag.astro';
export { default as OpenGraphArticleTags } from './components/open-graph-article-tags.astro';
export { default as OpenGraphBookTags } from './components/open-graph-book-tags.astro';
export { default as OpenGraphMusicAlbumTags } from './components/open-graph-music-album-tags.astro';
export { default as OpenGraphMusicPlaylistTags } from './components/open-graph-music-playlist-tags.astro';
export { default as OpenGraphMusicRadioStationTags } from './components/open-graph-music-radio-station-tags.astro';
export { default as OpenGraphMusicSongTags } from './components/open-graph-music-song-tags.astro';
export { default as OpenGraphProfileTags } from './components/open-graph-profile-tags.astro';
export { default as OpenGraphTags } from './components/open-graph-tags.astro';
export { default as OpenGraphVideoEpisodeTags } from './components/open-graph-video-episode-tags.astro';
export { default as SEOTags } from './components/seo-tags.astro';
export { default as TwitterTags } from './components/twitter-tags.astro';

const OpenGraphVideoTVShowTags = OpenGraphVideoMovieTags;
const OpenGraphVideoOtherTags = OpenGraphVideoMovieTags;

export {
  OpenGraphVideoMovieTags,
  OpenGraphVideoTVShowTags,
  OpenGraphVideoOtherTags,
};
