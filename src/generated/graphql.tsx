import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The MBID scalar represents MusicBrainz identifiers, which are
   * 36-character UUIDs.
   */
  MBID: any;
  /** Language code, optionally with country and encoding. */
  Locale: any;
  /** Year, month (optional), and day (optional) in YYYY-MM-DD format. */
  Date: any;
  /**
   * An [Interested Parties Information](https://musicbrainz.org/doc/IPI)
   * (IPI) code is an identifying number assigned by the CISAC database for musical
   * rights management.
   */
  IPI: any;
  /**
   * The [International Standard Name Identifier](https://musicbrainz.org/doc/ISNI)
   * (ISNI) is an ISO standard for uniquely identifying the public identities of
   * contributors to media content.
   */
  ISNI: any;
  /**
   * The [International Standard Recording Code](https://musicbrainz.org/doc/ISRC)
   * (ISRC) is an identification system for audio and music video recordings. It is
   * standarized by the [IFPI](http://www.ifpi.org/) in ISO 3901:2001 and used by
   * IFPI members to assign a unique identifier to every distinct sound recording
   * they release. An ISRC identifies a particular [sound recording](https://musicbrainz.org/doc/Recording),
   * not the song itself. Therefore, different recordings, edits, remixes and
   * remasters of the same song will each be assigned their own ISRC. However, note
   * that same recording should carry the same ISRC in all countries/territories.
   * Songs are identified by analogous [International Standard Musical Work Codes](https://musicbrainz.org/doc/ISWC)
   * (ISWCs).
   */
  ISRC: any;
  /** A length of time, in milliseconds. */
  Duration: any;
  /**
   * An [Amazon Standard Identification Number](https://musicbrainz.org/doc/ASIN)
   * (ASIN) is a 10-character alphanumeric unique identifier assigned by Amazon.com
   * and its partners for product identification within the Amazon organization.
   */
  ASIN: any;
  /**
   * [Disc ID](https://musicbrainz.org/doc/Disc_ID) is the code
   * number which MusicBrainz uses to link a physical CD to a [release](https://musicbrainz.org/doc/Release)
   * listing.
   *
   * A release may have any number of disc IDs, and a disc ID may be linked to
   * multiple releases. This is because disc ID calculation involves a hash of the
   * frame offsets of the CD tracks.
   *
   * Different pressing of a CD often have slightly different frame offsets, and
   * hence different disc IDs.
   *
   * Conversely, two different CDs may happen to have exactly the same set of frame
   * offsets and hence the same disc ID.
   */
  DiscID: any;
  /** A time of day, in 24-hour hh:mm notation. */
  Time: any;
  /** A web address. */
  URLString: any;
  /** Decimal degrees, used for latitude and longitude. */
  Degrees: any;
  /**
   * The [International Standard Musical Work Code](https://musicbrainz.org/doc/ISWC)
   * (ISWC) is an ISO standard similar to ISBNs for identifying musical works /
   * compositions.
   */
  ISWC: any;
};

/**
 * The query root, from which multiple types of MusicBrainz
 * requests can be made.
 */
export type Query = {
  __typename?: 'Query';
  /** Perform a lookup of a MusicBrainz entity by its MBID. */
  lookup?: Maybe<LookupQuery>;
  /** Browse all MusicBrainz entities directly linked to another entity. */
  browse?: Maybe<BrowseQuery>;
  /** Search for MusicBrainz entities using Lucene query syntax. */
  search?: Maybe<SearchQuery>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /**
   * A query for data on [Last.fm](https://www.last.fm/) that is not connected
   * to any particular MusicBrainz entity. This field is provided by the
   * Last.fm extension.
   */
  lastFM?: Maybe<LastFmQuery>;
  spotify: SpotifyQuery;
};


/**
 * The query root, from which multiple types of MusicBrainz
 * requests can be made.
 */
export type QueryNodeArgs = {
  id: Scalars['ID'];
};

/** A lookup of an individual MusicBrainz entity by its MBID. */
export type LookupQuery = {
  __typename?: 'LookupQuery';
  /** Look up a specific area by its MBID. */
  area?: Maybe<Area>;
  /** Look up a specific artist by its MBID. */
  artist?: Maybe<Artist>;
  /** Look up a specific collection by its MBID. */
  collection?: Maybe<Collection>;
  /** Look up a specific physical disc by its disc ID. */
  disc?: Maybe<Disc>;
  /** Look up a specific event by its MBID. */
  event?: Maybe<Event>;
  /** Look up a specific instrument by its MBID. */
  instrument?: Maybe<Instrument>;
  /** Look up a specific label by its MBID. */
  label?: Maybe<Label>;
  /** Look up a specific place by its MBID. */
  place?: Maybe<Place>;
  /** Look up a specific recording by its MBID. */
  recording?: Maybe<Recording>;
  /** Look up a specific release by its MBID. */
  release?: Maybe<Release>;
  /** Look up a specific release group by its MBID. */
  releaseGroup?: Maybe<ReleaseGroup>;
  /** Look up a specific series by its MBID. */
  series?: Maybe<Series>;
  /** Look up a specific URL by its MBID. */
  url?: Maybe<Url>;
  /** Look up a specific work by its MBID. */
  work?: Maybe<Work>;
};


/** A lookup of an individual MusicBrainz entity by its MBID. */
export type LookupQueryAreaArgs = {
  mbid: Scalars['MBID'];
};


/** A lookup of an individual MusicBrainz entity by its MBID. */
export type LookupQueryArtistArgs = {
  mbid: Scalars['MBID'];
};


/** A lookup of an individual MusicBrainz entity by its MBID. */
export type LookupQueryCollectionArgs = {
  mbid: Scalars['MBID'];
};


/** A lookup of an individual MusicBrainz entity by its MBID. */
export type LookupQueryDiscArgs = {
  discID: Scalars['DiscID'];
};


/** A lookup of an individual MusicBrainz entity by its MBID. */
export type LookupQueryEventArgs = {
  mbid: Scalars['MBID'];
};


/** A lookup of an individual MusicBrainz entity by its MBID. */
export type LookupQueryInstrumentArgs = {
  mbid: Scalars['MBID'];
};


/** A lookup of an individual MusicBrainz entity by its MBID. */
export type LookupQueryLabelArgs = {
  mbid: Scalars['MBID'];
};


/** A lookup of an individual MusicBrainz entity by its MBID. */
export type LookupQueryPlaceArgs = {
  mbid: Scalars['MBID'];
};


/** A lookup of an individual MusicBrainz entity by its MBID. */
export type LookupQueryRecordingArgs = {
  mbid: Scalars['MBID'];
};


/** A lookup of an individual MusicBrainz entity by its MBID. */
export type LookupQueryReleaseArgs = {
  mbid: Scalars['MBID'];
};


/** A lookup of an individual MusicBrainz entity by its MBID. */
export type LookupQueryReleaseGroupArgs = {
  mbid: Scalars['MBID'];
};


/** A lookup of an individual MusicBrainz entity by its MBID. */
export type LookupQuerySeriesArgs = {
  mbid: Scalars['MBID'];
};


/** A lookup of an individual MusicBrainz entity by its MBID. */
export type LookupQueryUrlArgs = {
  mbid?: Maybe<Scalars['MBID']>;
  resource?: Maybe<Scalars['URLString']>;
};


/** A lookup of an individual MusicBrainz entity by its MBID. */
export type LookupQueryWorkArgs = {
  mbid: Scalars['MBID'];
};


/**
 * [Areas](https://musicbrainz.org/doc/Area) are geographic regions
 * or settlements (countries, cities, or the like).
 */
export type Area = Node & Entity & {
  __typename?: 'Area';
  /** The ID of an object */
  id: Scalars['ID'];
  /** The MBID of the entity. */
  mbid: Scalars['MBID'];
  /** The official name of the entity. */
  name?: Maybe<Scalars['String']>;
  /**
   * The string to use for the purpose of ordering by name (for
   * example, by moving articles like ‘the’ to the end or a person’s last name to
   * the front).
   */
  sortName?: Maybe<Scalars['String']>;
  /** A comment used to help distinguish identically named entitites. */
  disambiguation?: Maybe<Scalars['String']>;
  /**
   * [Aliases](https://musicbrainz.org/doc/Aliases) are used to store
   * alternate names or misspellings.
   */
  aliases?: Maybe<Array<Maybe<Alias>>>;
  /**
   * [ISO 3166 codes](https://en.wikipedia.org/wiki/ISO_3166) are
   * the codes assigned by ISO to countries and subdivisions.
   */
  isoCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The type of area (country, city, etc. – see the [possible
   * values](https://musicbrainz.org/doc/Area)).
   */
  type?: Maybe<Scalars['String']>;
  /**
   * The MBID associated with the value of the `type`
   * field.
   */
  typeID?: Maybe<Scalars['MBID']>;
  /** A list of artists linked to this entity. */
  artists?: Maybe<ArtistConnection>;
  /** A list of events linked to this entity. */
  events?: Maybe<EventConnection>;
  /** A list of labels linked to this entity. */
  labels?: Maybe<LabelConnection>;
  /** A list of places linked to this entity. */
  places?: Maybe<PlaceConnection>;
  /** A list of releases linked to this entity. */
  releases?: Maybe<ReleaseConnection>;
  /** Relationships between this entity and other entitites. */
  relationships?: Maybe<Relationships>;
  /** A list of collections containing this entity. */
  collections?: Maybe<CollectionConnection>;
  /** A list of tags linked to this entity. */
  tags?: Maybe<TagConnection>;
  /**
   * Chart data available for this area on [Last.fm](https://www.last.fm/), if
   * the area represents a country with an [ISO 3166 code](https://en.wikipedia.org/wiki/ISO_3166).
   * This field is provided by the Last.fm extension.
   */
  lastFM?: Maybe<LastFmCountry>;
};


/**
 * [Areas](https://musicbrainz.org/doc/Area) are geographic regions
 * or settlements (countries, cities, or the like).
 */
export type AreaIsoCodesArgs = {
  standard?: Maybe<Scalars['String']>;
};


/**
 * [Areas](https://musicbrainz.org/doc/Area) are geographic regions
 * or settlements (countries, cities, or the like).
 */
export type AreaArtistsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Areas](https://musicbrainz.org/doc/Area) are geographic regions
 * or settlements (countries, cities, or the like).
 */
export type AreaEventsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Areas](https://musicbrainz.org/doc/Area) are geographic regions
 * or settlements (countries, cities, or the like).
 */
export type AreaLabelsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Areas](https://musicbrainz.org/doc/Area) are geographic regions
 * or settlements (countries, cities, or the like).
 */
export type AreaPlacesArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Areas](https://musicbrainz.org/doc/Area) are geographic regions
 * or settlements (countries, cities, or the like).
 */
export type AreaReleasesArgs = {
  type?: Maybe<Array<Maybe<ReleaseGroupType>>>;
  status?: Maybe<Array<Maybe<ReleaseStatus>>>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Areas](https://musicbrainz.org/doc/Area) are geographic regions
 * or settlements (countries, cities, or the like).
 */
export type AreaCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Areas](https://musicbrainz.org/doc/Area) are geographic regions
 * or settlements (countries, cities, or the like).
 */
export type AreaTagsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

/** An entity in the MusicBrainz schema. */
export type Entity = {
  /** The MBID of the entity. */
  mbid: Scalars['MBID'];
};

/**
 * [Aliases](https://musicbrainz.org/doc/Aliases) are variant names
 * that are mostly used as search help: if a search matches an entity’s alias, the
 * entity will be given as a result – even if the actual name wouldn’t be.
 */
export type Alias = {
  __typename?: 'Alias';
  /** The aliased name of the entity. */
  name?: Maybe<Scalars['String']>;
  /**
   * The string to use for the purpose of ordering by name (for
   * example, by moving articles like ‘the’ to the end or a person’s last name to
   * the front).
   */
  sortName?: Maybe<Scalars['String']>;
  /**
   * The locale (language and/or country) in which the alias is
   * used.
   */
  locale?: Maybe<Scalars['Locale']>;
  /**
   * Whether this is the main alias for the entity in the
   * specified locale (this could mean the most recent or the most common).
   */
  primary?: Maybe<Scalars['Boolean']>;
  /**
   * The type or purpose of the alias – whether it is a variant,
   * search hint, etc.
   */
  type?: Maybe<Scalars['String']>;
  /**
   * The MBID associated with the value of the `type`
   * field.
   */
  typeID?: Maybe<Scalars['MBID']>;
};


/** A connection to a list of items. */
export type ArtistConnection = {
  __typename?: 'ArtistConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ArtistEdge>>>;
  /**
   * A list of nodes in the connection (without going through the
   * `edges` field).
   */
  nodes?: Maybe<Array<Maybe<Artist>>>;
  /**
   * A count of the total number of items in this connection,
   * ignoring pagination.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type ArtistEdge = {
  __typename?: 'ArtistEdge';
  /** The item at the end of the edge */
  node?: Maybe<Artist>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /**
   * The relevancy score (0–100) assigned by the search engine, if
   * these results were found through a search.
   */
  score?: Maybe<Scalars['Int']>;
};

/**
 * An [artist](https://musicbrainz.org/doc/Artist) is generally a
 * musician, group of musicians, or other music professional (like a producer or
 * engineer). Occasionally, it can also be a non-musical person (like a
 * photographer, an illustrator, or a poet whose writings are set to music), or
 * even a fictional character.
 */
export type Artist = Node & Entity & {
  __typename?: 'Artist';
  /** The ID of an object */
  id: Scalars['ID'];
  /** The MBID of the entity. */
  mbid: Scalars['MBID'];
  /** The official name of the entity. */
  name?: Maybe<Scalars['String']>;
  /**
   * The string to use for the purpose of ordering by name (for
   * example, by moving articles like ‘the’ to the end or a person’s last name to
   * the front).
   */
  sortName?: Maybe<Scalars['String']>;
  /** A comment used to help distinguish identically named entitites. */
  disambiguation?: Maybe<Scalars['String']>;
  /**
   * [Aliases](https://musicbrainz.org/doc/Aliases) are used to store
   * alternate names or misspellings.
   */
  aliases?: Maybe<Array<Maybe<Alias>>>;
  /**
   * The country with which an artist is primarily identified. It
   * is often, but not always, its birth/formation country.
   */
  country?: Maybe<Scalars['String']>;
  /**
   * The area with which an artist is primarily identified. It
   * is often, but not always, its birth/formation country.
   */
  area?: Maybe<Area>;
  /**
   * The area in which an artist began their career (or where
   * they were born, if the artist is a person).
   */
  beginArea?: Maybe<Area>;
  /**
   * The area in which an artist ended their career (or where
   * they died, if the artist is a person).
   */
  endArea?: Maybe<Area>;
  /**
   * The begin and end dates of the entity’s existence. Its exact
   * meaning depends on the type of entity.
   */
  lifeSpan?: Maybe<LifeSpan>;
  /**
   * Whether a person or character identifies as male, female, or
   * neither. Groups do not have genders.
   */
  gender?: Maybe<Scalars['String']>;
  /**
   * The MBID associated with the value of the `gender`
   * field.
   */
  genderID?: Maybe<Scalars['MBID']>;
  /** Whether an artist is a person, a group, or something else. */
  type?: Maybe<Scalars['String']>;
  /**
   * The MBID associated with the value of the `type`
   * field.
   */
  typeID?: Maybe<Scalars['MBID']>;
  /**
   * List of [Interested Parties Information](https://musicbrainz.org/doc/IPI)
   * (IPI) codes for the artist.
   */
  ipis?: Maybe<Array<Maybe<Scalars['IPI']>>>;
  /**
   * List of [International Standard Name Identifier](https://musicbrainz.org/doc/ISNI)
   * (ISNI) codes for the artist.
   */
  isnis?: Maybe<Array<Maybe<Scalars['ISNI']>>>;
  /** A list of recordings linked to this entity. */
  recordings?: Maybe<RecordingConnection>;
  /** A list of releases linked to this entity. */
  releases?: Maybe<ReleaseConnection>;
  /** A list of release groups linked to this entity. */
  releaseGroups?: Maybe<ReleaseGroupConnection>;
  /** A list of works linked to this entity. */
  works?: Maybe<WorkConnection>;
  /** Relationships between this entity and other entitites. */
  relationships?: Maybe<Relationships>;
  /** A list of collections containing this entity. */
  collections?: Maybe<CollectionConnection>;
  /** The rating users have given to this entity. */
  rating?: Maybe<Rating>;
  /** A list of tags linked to this entity. */
  tags?: Maybe<TagConnection>;
  /**
   * Images of the artist from [fanart.tv](https://fanart.tv/).
   * This field is provided by the fanart.tv extension.
   */
  fanArt?: Maybe<FanArtArtist>;
  /**
   * Artist images found at MediaWiki URLs in the artist’s URL relationships.
   * Defaults to URL relationships with the type “image”.
   * This field is provided by the MediaWiki extension.
   */
  mediaWikiImages: Array<Maybe<MediaWikiImage>>;
  /**
   * Data about the artist from [TheAudioDB](http://www.theaudiodb.com/), a good
   * source of biographical information and images.
   * This field is provided by TheAudioDB extension.
   */
  theAudioDB?: Maybe<TheAudioDbArtist>;
  /** Information about the artist on Discogs. */
  discogs?: Maybe<DiscogsArtist>;
  /**
   * Data about the artist from [Last.fm](https://www.last.fm/), a good source
   * for measuring popularity via listener and play counts. This field is
   * provided by the Last.fm extension.
   */
  lastFM?: Maybe<LastFmArtist>;
  /** The artist’s entry on Spotify. */
  spotify?: Maybe<SpotifyArtist>;
};


/**
 * An [artist](https://musicbrainz.org/doc/Artist) is generally a
 * musician, group of musicians, or other music professional (like a producer or
 * engineer). Occasionally, it can also be a non-musical person (like a
 * photographer, an illustrator, or a poet whose writings are set to music), or
 * even a fictional character.
 */
export type ArtistRecordingsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * An [artist](https://musicbrainz.org/doc/Artist) is generally a
 * musician, group of musicians, or other music professional (like a producer or
 * engineer). Occasionally, it can also be a non-musical person (like a
 * photographer, an illustrator, or a poet whose writings are set to music), or
 * even a fictional character.
 */
export type ArtistReleasesArgs = {
  type?: Maybe<Array<Maybe<ReleaseGroupType>>>;
  status?: Maybe<Array<Maybe<ReleaseStatus>>>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * An [artist](https://musicbrainz.org/doc/Artist) is generally a
 * musician, group of musicians, or other music professional (like a producer or
 * engineer). Occasionally, it can also be a non-musical person (like a
 * photographer, an illustrator, or a poet whose writings are set to music), or
 * even a fictional character.
 */
export type ArtistReleaseGroupsArgs = {
  type?: Maybe<Array<Maybe<ReleaseGroupType>>>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * An [artist](https://musicbrainz.org/doc/Artist) is generally a
 * musician, group of musicians, or other music professional (like a producer or
 * engineer). Occasionally, it can also be a non-musical person (like a
 * photographer, an illustrator, or a poet whose writings are set to music), or
 * even a fictional character.
 */
export type ArtistWorksArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * An [artist](https://musicbrainz.org/doc/Artist) is generally a
 * musician, group of musicians, or other music professional (like a producer or
 * engineer). Occasionally, it can also be a non-musical person (like a
 * photographer, an illustrator, or a poet whose writings are set to music), or
 * even a fictional character.
 */
export type ArtistCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * An [artist](https://musicbrainz.org/doc/Artist) is generally a
 * musician, group of musicians, or other music professional (like a producer or
 * engineer). Occasionally, it can also be a non-musical person (like a
 * photographer, an illustrator, or a poet whose writings are set to music), or
 * even a fictional character.
 */
export type ArtistTagsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * An [artist](https://musicbrainz.org/doc/Artist) is generally a
 * musician, group of musicians, or other music professional (like a producer or
 * engineer). Occasionally, it can also be a non-musical person (like a
 * photographer, an illustrator, or a poet whose writings are set to music), or
 * even a fictional character.
 */
export type ArtistMediaWikiImagesArgs = {
  type?: Maybe<Scalars['String']>;
};

/**
 * Fields indicating the begin and end date of an entity’s
 * lifetime, including whether it has ended (even if the date is unknown).
 */
export type LifeSpan = {
  __typename?: 'LifeSpan';
  /** The start date of the entity’s life span. */
  begin?: Maybe<Scalars['Date']>;
  /** The end date of the entity’s life span. */
  end?: Maybe<Scalars['Date']>;
  /** Whether or not the entity’s life span has ended. */
  ended?: Maybe<Scalars['Boolean']>;
};




/** A connection to a list of items. */
export type RecordingConnection = {
  __typename?: 'RecordingConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RecordingEdge>>>;
  /**
   * A list of nodes in the connection (without going through the
   * `edges` field).
   */
  nodes?: Maybe<Array<Maybe<Recording>>>;
  /**
   * A count of the total number of items in this connection,
   * ignoring pagination.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type RecordingEdge = {
  __typename?: 'RecordingEdge';
  /** The item at the end of the edge */
  node?: Maybe<Recording>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /**
   * The relevancy score (0–100) assigned by the search engine, if
   * these results were found through a search.
   */
  score?: Maybe<Scalars['Int']>;
};

/**
 * A [recording](https://musicbrainz.org/doc/Recording) is an
 * entity in MusicBrainz which can be linked to tracks on releases. Each track must
 * always be associated with a single recording, but a recording can be linked to
 * any number of tracks.
 *
 * A recording represents distinct audio that has been used to produce at least one
 * released track through copying or mastering. A recording itself is never
 * produced solely through copying or mastering.
 *
 * Generally, the audio represented by a recording corresponds to the audio at a
 * stage in the production process before any final mastering but after any editing
 * or mixing.
 */
export type Recording = Node & Entity & {
  __typename?: 'Recording';
  /** The ID of an object */
  id: Scalars['ID'];
  /** The MBID of the entity. */
  mbid: Scalars['MBID'];
  /** The official title of the entity. */
  title?: Maybe<Scalars['String']>;
  /** A comment used to help distinguish identically named entitites. */
  disambiguation?: Maybe<Scalars['String']>;
  /**
   * [Aliases](https://musicbrainz.org/doc/Aliases) are used to store
   * alternate names or misspellings.
   */
  aliases?: Maybe<Array<Maybe<Alias>>>;
  /**
   * The main credited artist(s).
   * @deprecated The `artistCredit` field has been renamed to
   * `artistCredits`, since it is a list of credits and is referred to in the
   * plural form throughout the MusicBrainz documentation. This field is deprecated
   * and will be removed in a major release in the future. Use the equivalent
   * `artistCredits` field.
   */
  artistCredit?: Maybe<Array<Maybe<ArtistCredit>>>;
  /** The main credited artist(s). */
  artistCredits?: Maybe<Array<Maybe<ArtistCredit>>>;
  /**
   * A list of [International Standard Recording Codes](https://musicbrainz.org/doc/ISRC)
   * (ISRCs) for this recording.
   */
  isrcs?: Maybe<Array<Maybe<Scalars['ISRC']>>>;
  /**
   * An approximation to the length of the recording, calculated
   * from the lengths of the tracks using it.
   */
  length?: Maybe<Scalars['Duration']>;
  /** Whether this is a video recording. */
  video?: Maybe<Scalars['Boolean']>;
  /** A list of artists linked to this entity. */
  artists?: Maybe<ArtistConnection>;
  /** A list of releases linked to this entity. */
  releases?: Maybe<ReleaseConnection>;
  /** Relationships between this entity and other entitites. */
  relationships?: Maybe<Relationships>;
  /** A list of collections containing this entity. */
  collections?: Maybe<CollectionConnection>;
  /** The rating users have given to this entity. */
  rating?: Maybe<Rating>;
  /** A list of tags linked to this entity. */
  tags?: Maybe<TagConnection>;
  /**
   * Data about the recording from [TheAudioDB](http://www.theaudiodb.com/).
   * This field is provided by TheAudioDB extension.
   */
  theAudioDB?: Maybe<TheAudioDbTrack>;
  /**
   * Data about the recording from [Last.fm](https://www.last.fm/), a good
   * source for measuring popularity via listener and play counts. This field
   * is provided by the Last.fm extension.
   */
  lastFM?: Maybe<LastFmTrack>;
  /** The recording’s entry on Spotify. */
  spotify?: Maybe<SpotifyTrack>;
};


/**
 * A [recording](https://musicbrainz.org/doc/Recording) is an
 * entity in MusicBrainz which can be linked to tracks on releases. Each track must
 * always be associated with a single recording, but a recording can be linked to
 * any number of tracks.
 *
 * A recording represents distinct audio that has been used to produce at least one
 * released track through copying or mastering. A recording itself is never
 * produced solely through copying or mastering.
 *
 * Generally, the audio represented by a recording corresponds to the audio at a
 * stage in the production process before any final mastering but after any editing
 * or mixing.
 */
export type RecordingArtistsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [recording](https://musicbrainz.org/doc/Recording) is an
 * entity in MusicBrainz which can be linked to tracks on releases. Each track must
 * always be associated with a single recording, but a recording can be linked to
 * any number of tracks.
 *
 * A recording represents distinct audio that has been used to produce at least one
 * released track through copying or mastering. A recording itself is never
 * produced solely through copying or mastering.
 *
 * Generally, the audio represented by a recording corresponds to the audio at a
 * stage in the production process before any final mastering but after any editing
 * or mixing.
 */
export type RecordingReleasesArgs = {
  type?: Maybe<Array<Maybe<ReleaseGroupType>>>;
  status?: Maybe<Array<Maybe<ReleaseStatus>>>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [recording](https://musicbrainz.org/doc/Recording) is an
 * entity in MusicBrainz which can be linked to tracks on releases. Each track must
 * always be associated with a single recording, but a recording can be linked to
 * any number of tracks.
 *
 * A recording represents distinct audio that has been used to produce at least one
 * released track through copying or mastering. A recording itself is never
 * produced solely through copying or mastering.
 *
 * Generally, the audio represented by a recording corresponds to the audio at a
 * stage in the production process before any final mastering but after any editing
 * or mixing.
 */
export type RecordingCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [recording](https://musicbrainz.org/doc/Recording) is an
 * entity in MusicBrainz which can be linked to tracks on releases. Each track must
 * always be associated with a single recording, but a recording can be linked to
 * any number of tracks.
 *
 * A recording represents distinct audio that has been used to produce at least one
 * released track through copying or mastering. A recording itself is never
 * produced solely through copying or mastering.
 *
 * Generally, the audio represented by a recording corresponds to the audio at a
 * stage in the production process before any final mastering but after any editing
 * or mixing.
 */
export type RecordingTagsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [recording](https://musicbrainz.org/doc/Recording) is an
 * entity in MusicBrainz which can be linked to tracks on releases. Each track must
 * always be associated with a single recording, but a recording can be linked to
 * any number of tracks.
 *
 * A recording represents distinct audio that has been used to produce at least one
 * released track through copying or mastering. A recording itself is never
 * produced solely through copying or mastering.
 *
 * Generally, the audio represented by a recording corresponds to the audio at a
 * stage in the production process before any final mastering but after any editing
 * or mixing.
 */
export type RecordingSpotifyArgs = {
  strategy?: Maybe<Array<SpotifyMatchStrategy>>;
};

/**
 * [Artist credits](https://musicbrainz.org/doc/Artist_Credits)
 * indicate who is the main credited artist (or artists) for releases, release
 * groups, tracks, and recordings, and how they are credited. They consist of
 * artists, with (optionally) their names as credited in the specific release,
 * track, etc., and join phrases between them.
 */
export type ArtistCredit = {
  __typename?: 'ArtistCredit';
  /**
   * The entity representing the artist referenced in the
   * credits.
   */
  artist?: Maybe<Artist>;
  /**
   * The name of the artist as credited in the specific release,
   * track, etc.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Join phrases might include words and/or punctuation to
   * separate artist names as they appear on the release, track, etc.
   */
  joinPhrase?: Maybe<Scalars['String']>;
};



/**
 * A type used to describe release groups, e.g. album, single, EP,
 * etc.
 */
export enum ReleaseGroupType {
  /**
   * An album, perhaps better defined as a “Long Play” (LP)
   * release, generally consists of previously unreleased material (unless this type
   * is combined with secondary types which change that, such as “Compilation”). This
   * includes album re-issues, with or without bonus tracks.
   */
  Album = 'ALBUM',
  /**
   * A single typically has one main song and possibly a handful
   * of additional tracks or remixes of the main track. A single is usually named
   * after its main song.
   */
  Single = 'SINGLE',
  /**
   * An EP is a so-called “Extended Play” release and often
   * contains the letters EP in the title. Generally an EP will be shorter than a
   * full length release (an LP or “Long Play”) and the tracks are usually exclusive
   * to the EP, in other words the tracks don’t come from a previously issued
   * release. EP is fairly difficult to define; usually it should only be assumed
   * that a release is an EP if the artist defines it as such.
   */
  Ep = 'EP',
  /** Any release that does not fit any of the other categories. */
  Other = 'OTHER',
  /**
   * An episodic release that was originally broadcast via radio,
   * television, or the Internet, including podcasts.
   */
  Broadcast = 'BROADCAST',
  /**
   * A compilation is a collection of previously released tracks
   * by one or more artists.
   */
  Compilation = 'COMPILATION',
  /**
   * A soundtrack is the musical score to a movie, TV series,
   * stage show, computer game, etc.
   */
  Soundtrack = 'SOUNDTRACK',
  /** A non-music spoken word release. */
  Spokenword = 'SPOKENWORD',
  /**
   * An interview release contains an interview, generally with
   * an artist.
   */
  Interview = 'INTERVIEW',
  /** An audiobook is a book read by a narrator without music. */
  Audiobook = 'AUDIOBOOK',
  /** A release that was recorded live. */
  Live = 'LIVE',
  /**
   * A release that was (re)mixed from previously released
   * material.
   */
  Remix = 'REMIX',
  /**
   * A DJ-mix is a sequence of several recordings played one
   * after the other, each one modified so that they blend together into a continuous
   * flow of music. A DJ mix release requires that the recordings be modified in some
   * manner, and the DJ who does this modification is usually (although not always)
   * credited in a fairly prominent way.
   */
  Djmix = 'DJMIX',
  /**
   * Promotional in nature (but not necessarily free), mixtapes
   * and street albums are often released by artists to promote new artists, or
   * upcoming studio albums by prominent artists. They are also sometimes used to
   * keep fans’ attention between studio releases and are most common in rap & hip
   * hop genres. They are often not sanctioned by the artist’s label, may lack proper
   * sample or song clearances and vary widely in production and recording quality.
   * While mixtapes are generally DJ-mixed, they are distinct from commercial DJ
   * mixes (which are usually deemed compilations) and are defined by having a
   * significant proportion of new material, including original production or
   * original vocals over top of other artists’ instrumentals. They are distinct from
   * demos in that they are designed for release directly to the public and fans, not
   * to labels.
   */
  Mixtape = 'MIXTAPE',
  /**
   * A release that was recorded for limited circulation or
   * reference use rather than for general public release.
   */
  Demo = 'DEMO',
  /** A non-album track (special case). */
  Nat = 'NAT'
}

/**
 * A type used to describe the status of releases, e.g. official,
 * bootleg, etc.
 */
export enum ReleaseStatus {
  /**
   * Any release officially sanctioned by the artist and/or their
   * record company. (Most releases will fit into this category.)
   */
  Official = 'OFFICIAL',
  /**
   * A giveaway release or a release intended to promote an
   * upcoming official release, e.g. prerelease albums or releases included with a
   * magazine.
   */
  Promotion = 'PROMOTION',
  /**
   * An unofficial/underground release that was not sanctioned by
   * the artist and/or the record company.
   */
  Bootleg = 'BOOTLEG',
  /**
   * A pseudo-release is a duplicate release for
   * translation/transliteration purposes.
   */
  Pseudorelease = 'PSEUDORELEASE'
}

/** A connection to a list of items. */
export type ReleaseConnection = {
  __typename?: 'ReleaseConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReleaseEdge>>>;
  /**
   * A list of nodes in the connection (without going through the
   * `edges` field).
   */
  nodes?: Maybe<Array<Maybe<Release>>>;
  /**
   * A count of the total number of items in this connection,
   * ignoring pagination.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type ReleaseEdge = {
  __typename?: 'ReleaseEdge';
  /** The item at the end of the edge */
  node?: Maybe<Release>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /**
   * The relevancy score (0–100) assigned by the search engine, if
   * these results were found through a search.
   */
  score?: Maybe<Scalars['Int']>;
};

/**
 * A [release](https://musicbrainz.org/doc/Release) represents the
 * unique release (i.e. issuing) of a product on a specific date with specific
 * release information such as the country, label, barcode, packaging, etc. If you
 * walk into a store and purchase an album or single, they’re each represented in
 * MusicBrainz as one release.
 */
export type Release = Node & Entity & {
  __typename?: 'Release';
  /** The ID of an object */
  id: Scalars['ID'];
  /** The MBID of the entity. */
  mbid: Scalars['MBID'];
  /** The official title of the entity. */
  title?: Maybe<Scalars['String']>;
  /** A comment used to help distinguish identically named entitites. */
  disambiguation?: Maybe<Scalars['String']>;
  /**
   * [Aliases](https://musicbrainz.org/doc/Aliases) are used to store
   * alternate names or misspellings.
   */
  aliases?: Maybe<Array<Maybe<Alias>>>;
  /**
   * The main credited artist(s).
   * @deprecated The `artistCredit` field has been renamed to
   * `artistCredits`, since it is a list of credits and is referred to in the
   * plural form throughout the MusicBrainz documentation. This field is deprecated
   * and will be removed in a major release in the future. Use the equivalent
   * `artistCredits` field.
   */
  artistCredit?: Maybe<Array<Maybe<ArtistCredit>>>;
  /** The main credited artist(s). */
  artistCredits?: Maybe<Array<Maybe<ArtistCredit>>>;
  /** The release events for this release. */
  releaseEvents?: Maybe<Array<Maybe<ReleaseEvent>>>;
  /**
   * The [release date](https://musicbrainz.org/doc/Release/Date)
   * is the date in which a release was made available through some sort of
   * distribution mechanism.
   */
  date?: Maybe<Scalars['Date']>;
  /** The country in which the release was issued. */
  country?: Maybe<Scalars['String']>;
  /**
   * The [Amazon Standard Identification Number](https://musicbrainz.org/doc/ASIN)
   * of the release.
   */
  asin?: Maybe<Scalars['ASIN']>;
  /**
   * The [barcode](https://en.wikipedia.org/wiki/Barcode), if the
   * release has one. The most common types found on releases are 12-digit
   * [UPCs](https://en.wikipedia.org/wiki/Universal_Product_Code) and 13-digit
   * [EANs](https://en.wikipedia.org/wiki/International_Article_Number).
   */
  barcode?: Maybe<Scalars['String']>;
  /** The status describes how “official” a release is. */
  status?: Maybe<ReleaseStatus>;
  /**
   * The MBID associated with the value of the `status`
   * field.
   */
  statusID?: Maybe<Scalars['MBID']>;
  /**
   * The physical packaging that accompanies the release. See
   * the [list of packaging](https://musicbrainz.org/doc/Release/Packaging) for more
   * information.
   */
  packaging?: Maybe<Scalars['String']>;
  /**
   * The MBID associated with the value of the `packaging`
   * field.
   */
  packagingID?: Maybe<Scalars['MBID']>;
  /**
   * Data quality indicates how good the data for a release is.
   * It is not a mark of how good or bad the music itself is – for that, use
   * [ratings](https://musicbrainz.org/doc/Rating_System).
   */
  quality?: Maybe<Scalars['String']>;
  /** The media on which the release was distributed. */
  media?: Maybe<Array<Maybe<Medium>>>;
  /** A list of artists linked to this entity. */
  artists?: Maybe<ArtistConnection>;
  /** A list of labels linked to this entity. */
  labels?: Maybe<LabelConnection>;
  /** A list of recordings linked to this entity. */
  recordings?: Maybe<RecordingConnection>;
  /** A list of release groups linked to this entity. */
  releaseGroups?: Maybe<ReleaseGroupConnection>;
  /** Relationships between this entity and other entitites. */
  relationships?: Maybe<Relationships>;
  /** A list of collections containing this entity. */
  collections?: Maybe<CollectionConnection>;
  /** A list of tags linked to this entity. */
  tags?: Maybe<TagConnection>;
  /**
   * An object containing a list and summary of the cover art images that are
   * present for this release from the [Cover Art Archive](https://musicbrainz.org/doc/Cover_Art_Archive).
   * This field is provided by the Cover Art Archive extension.
   */
  coverArtArchive?: Maybe<CoverArtArchiveRelease>;
  /** Information about the release on Discogs. */
  discogs?: Maybe<DiscogsRelease>;
  /**
   * Data about the release from [Last.fm](https://www.last.fm/), a good source
   * for measuring popularity via listener and play counts. This field is
   * provided by the Last.fm extension.
   */
  lastFM?: Maybe<LastFmAlbum>;
  /** The release’s entry on Spotify. */
  spotify?: Maybe<SpotifyAlbum>;
};


/**
 * A [release](https://musicbrainz.org/doc/Release) represents the
 * unique release (i.e. issuing) of a product on a specific date with specific
 * release information such as the country, label, barcode, packaging, etc. If you
 * walk into a store and purchase an album or single, they’re each represented in
 * MusicBrainz as one release.
 */
export type ReleaseArtistsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [release](https://musicbrainz.org/doc/Release) represents the
 * unique release (i.e. issuing) of a product on a specific date with specific
 * release information such as the country, label, barcode, packaging, etc. If you
 * walk into a store and purchase an album or single, they’re each represented in
 * MusicBrainz as one release.
 */
export type ReleaseLabelsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [release](https://musicbrainz.org/doc/Release) represents the
 * unique release (i.e. issuing) of a product on a specific date with specific
 * release information such as the country, label, barcode, packaging, etc. If you
 * walk into a store and purchase an album or single, they’re each represented in
 * MusicBrainz as one release.
 */
export type ReleaseRecordingsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [release](https://musicbrainz.org/doc/Release) represents the
 * unique release (i.e. issuing) of a product on a specific date with specific
 * release information such as the country, label, barcode, packaging, etc. If you
 * walk into a store and purchase an album or single, they’re each represented in
 * MusicBrainz as one release.
 */
export type ReleaseReleaseGroupsArgs = {
  type?: Maybe<Array<Maybe<ReleaseGroupType>>>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [release](https://musicbrainz.org/doc/Release) represents the
 * unique release (i.e. issuing) of a product on a specific date with specific
 * release information such as the country, label, barcode, packaging, etc. If you
 * walk into a store and purchase an album or single, they’re each represented in
 * MusicBrainz as one release.
 */
export type ReleaseCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [release](https://musicbrainz.org/doc/Release) represents the
 * unique release (i.e. issuing) of a product on a specific date with specific
 * release information such as the country, label, barcode, packaging, etc. If you
 * walk into a store and purchase an album or single, they’re each represented in
 * MusicBrainz as one release.
 */
export type ReleaseTagsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [release](https://musicbrainz.org/doc/Release) represents the
 * unique release (i.e. issuing) of a product on a specific date with specific
 * release information such as the country, label, barcode, packaging, etc. If you
 * walk into a store and purchase an album or single, they’re each represented in
 * MusicBrainz as one release.
 */
export type ReleaseSpotifyArgs = {
  strategy?: Maybe<Array<SpotifyMatchStrategy>>;
};

/**
 * The date on which a release was issued in a country/region with
 * a particular label, catalog number, barcode, and format.
 */
export type ReleaseEvent = {
  __typename?: 'ReleaseEvent';
  area?: Maybe<Area>;
  date?: Maybe<Scalars['Date']>;
};


/**
 * A medium is the actual physical medium the audio content is
 * stored upon. This means that each CD in a multi-disc release will be entered as
 * separate mediums within the release, and that both sides of a vinyl record or
 * cassette will exist on one medium. Mediums have a format (e.g. CD, DVD, vinyl,
 * cassette) and can optionally also have a title.
 */
export type Medium = {
  __typename?: 'Medium';
  /** The title of this particular medium. */
  title?: Maybe<Scalars['String']>;
  /**
   * The [format](https://musicbrainz.org/doc/Release/Format) of
   * the medium (e.g. CD, DVD, vinyl, cassette).
   */
  format?: Maybe<Scalars['String']>;
  /**
   * The MBID associated with the value of the `format`
   * field.
   */
  formatID?: Maybe<Scalars['MBID']>;
  /**
   * The order of this medium in the release (for example, in a
   * multi-disc release).
   */
  position?: Maybe<Scalars['Int']>;
  /** The number of audio tracks on this medium. */
  trackCount?: Maybe<Scalars['Int']>;
  /** A list of physical discs and their disc IDs for this medium. */
  discs?: Maybe<Array<Maybe<Disc>>>;
  /** The list of tracks on the given media. */
  tracks?: Maybe<Array<Maybe<Track>>>;
};

/**
 * Information about the physical CD and releases associated with a
 * particular [disc ID](https://musicbrainz.org/doc/Disc_ID).
 */
export type Disc = Node & {
  __typename?: 'Disc';
  /** The ID of an object */
  id: Scalars['ID'];
  /** The [disc ID](https://musicbrainz.org/doc/Disc_ID) of this disc. */
  discID: Scalars['DiscID'];
  /** The number of offsets (tracks) on the disc. */
  offsetCount: Scalars['Int'];
  /** The sector offset of each track on the disc. */
  offsets?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** The sector offset of the lead-out (the end of the disc). */
  sectors: Scalars['Int'];
  /** The list of releases linked to this disc ID. */
  releases?: Maybe<ReleaseConnection>;
};


/**
 * Information about the physical CD and releases associated with a
 * particular [disc ID](https://musicbrainz.org/doc/Disc_ID).
 */
export type DiscReleasesArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A track is the way a recording is represented on a particular
 *   release (or, more exactly, on a particular medium). Every track has a title
 *   (see the guidelines for titles) and is credited to one or more artists.
 */
export type Track = Entity & {
  __typename?: 'Track';
  /** The MBID of the entity. */
  mbid: Scalars['MBID'];
  /** The official title of the entity. */
  title?: Maybe<Scalars['String']>;
  /**
   * The track’s position on the overall release (including all
   * tracks from all discs).
   */
  position?: Maybe<Scalars['Int']>;
  /**
   * The track number, which may include information about the
   * disc or side it appears on, e.g. “A1” or “B3”.
   */
  number?: Maybe<Scalars['String']>;
  /** The length of the track. */
  length?: Maybe<Scalars['Duration']>;
  /** The recording that appears on the track. */
  recording?: Maybe<Recording>;
};

/** A connection to a list of items. */
export type LabelConnection = {
  __typename?: 'LabelConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LabelEdge>>>;
  /**
   * A list of nodes in the connection (without going through the
   * `edges` field).
   */
  nodes?: Maybe<Array<Maybe<Label>>>;
  /**
   * A count of the total number of items in this connection,
   * ignoring pagination.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type LabelEdge = {
  __typename?: 'LabelEdge';
  /** The item at the end of the edge */
  node?: Maybe<Label>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /**
   * The relevancy score (0–100) assigned by the search engine, if
   * these results were found through a search.
   */
  score?: Maybe<Scalars['Int']>;
};

/**
 * [Labels](https://musicbrainz.org/doc/Label) represent mostly
 * (but not only) imprints. To a lesser extent, a label entity may be created to
 * represent a record company.
 */
export type Label = Node & Entity & {
  __typename?: 'Label';
  /** The ID of an object */
  id: Scalars['ID'];
  /** The MBID of the entity. */
  mbid: Scalars['MBID'];
  /** The official name of the entity. */
  name?: Maybe<Scalars['String']>;
  /**
   * The string to use for the purpose of ordering by name (for
   * example, by moving articles like ‘the’ to the end or a person’s last name to
   * the front).
   */
  sortName?: Maybe<Scalars['String']>;
  /** A comment used to help distinguish identically named entitites. */
  disambiguation?: Maybe<Scalars['String']>;
  /**
   * [Aliases](https://musicbrainz.org/doc/Aliases) are used to store
   * alternate names or misspellings.
   */
  aliases?: Maybe<Array<Maybe<Alias>>>;
  /** The country of origin for the label. */
  country?: Maybe<Scalars['String']>;
  /** The area in which the label is based. */
  area?: Maybe<Area>;
  /**
   * The begin and end dates of the entity’s existence. Its exact
   * meaning depends on the type of entity.
   */
  lifeSpan?: Maybe<LifeSpan>;
  /**
   * The [“LC” code](https://musicbrainz.org/doc/Label/Label_Code)
   * of the label.
   */
  labelCode?: Maybe<Scalars['Int']>;
  /**
   * List of [Interested Parties Information](https://musicbrainz.org/doc/IPI)
   * codes for the label.
   */
  ipis?: Maybe<Array<Maybe<Scalars['IPI']>>>;
  /**
   * A type describing the main activity of the label, e.g.
   * imprint, production, distributor, rights society, etc.
   */
  type?: Maybe<Scalars['String']>;
  /**
   * The MBID associated with the value of the `type`
   * field.
   */
  typeID?: Maybe<Scalars['MBID']>;
  /** A list of releases linked to this entity. */
  releases?: Maybe<ReleaseConnection>;
  /** Relationships between this entity and other entitites. */
  relationships?: Maybe<Relationships>;
  /** A list of collections containing this entity. */
  collections?: Maybe<CollectionConnection>;
  /** The rating users have given to this entity. */
  rating?: Maybe<Rating>;
  /** A list of tags linked to this entity. */
  tags?: Maybe<TagConnection>;
  /**
   * Images of the label from [fanart.tv](https://fanart.tv/).
   * This field is provided by the fanart.tv extension.
   */
  fanArt?: Maybe<FanArtLabel>;
  /**
   * Label images found at MediaWiki URLs in the label’s URL relationships.
   * Defaults to URL relationships with the type “logo”.
   * This field is provided by the MediaWiki extension.
   */
  mediaWikiImages: Array<Maybe<MediaWikiImage>>;
  /** Information about the label on Discogs. */
  discogs?: Maybe<DiscogsLabel>;
};


/**
 * [Labels](https://musicbrainz.org/doc/Label) represent mostly
 * (but not only) imprints. To a lesser extent, a label entity may be created to
 * represent a record company.
 */
export type LabelReleasesArgs = {
  type?: Maybe<Array<Maybe<ReleaseGroupType>>>;
  status?: Maybe<Array<Maybe<ReleaseStatus>>>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Labels](https://musicbrainz.org/doc/Label) represent mostly
 * (but not only) imprints. To a lesser extent, a label entity may be created to
 * represent a record company.
 */
export type LabelCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Labels](https://musicbrainz.org/doc/Label) represent mostly
 * (but not only) imprints. To a lesser extent, a label entity may be created to
 * represent a record company.
 */
export type LabelTagsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Labels](https://musicbrainz.org/doc/Label) represent mostly
 * (but not only) imprints. To a lesser extent, a label entity may be created to
 * represent a record company.
 */
export type LabelMediaWikiImagesArgs = {
  type?: Maybe<Scalars['String']>;
};

/** Lists of entity relationships for each entity type. */
export type Relationships = {
  __typename?: 'Relationships';
  /** A list of relationships between these two entity types. */
  areas?: Maybe<RelationshipConnection>;
  /** A list of relationships between these two entity types. */
  artists?: Maybe<RelationshipConnection>;
  /** A list of relationships between these two entity types. */
  events?: Maybe<RelationshipConnection>;
  /** A list of relationships between these two entity types. */
  instruments?: Maybe<RelationshipConnection>;
  /** A list of relationships between these two entity types. */
  labels?: Maybe<RelationshipConnection>;
  /** A list of relationships between these two entity types. */
  places?: Maybe<RelationshipConnection>;
  /** A list of relationships between these two entity types. */
  recordings?: Maybe<RelationshipConnection>;
  /** A list of relationships between these two entity types. */
  releases?: Maybe<RelationshipConnection>;
  /** A list of relationships between these two entity types. */
  releaseGroups?: Maybe<RelationshipConnection>;
  /** A list of relationships between these two entity types. */
  series?: Maybe<RelationshipConnection>;
  /** A list of relationships between these two entity types. */
  urls?: Maybe<RelationshipConnection>;
  /** A list of relationships between these two entity types. */
  works?: Maybe<RelationshipConnection>;
};


/** Lists of entity relationships for each entity type. */
export type RelationshipsAreasArgs = {
  direction?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeID?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** Lists of entity relationships for each entity type. */
export type RelationshipsArtistsArgs = {
  direction?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeID?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** Lists of entity relationships for each entity type. */
export type RelationshipsEventsArgs = {
  direction?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeID?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** Lists of entity relationships for each entity type. */
export type RelationshipsInstrumentsArgs = {
  direction?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeID?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** Lists of entity relationships for each entity type. */
export type RelationshipsLabelsArgs = {
  direction?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeID?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** Lists of entity relationships for each entity type. */
export type RelationshipsPlacesArgs = {
  direction?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeID?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** Lists of entity relationships for each entity type. */
export type RelationshipsRecordingsArgs = {
  direction?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeID?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** Lists of entity relationships for each entity type. */
export type RelationshipsReleasesArgs = {
  direction?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeID?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** Lists of entity relationships for each entity type. */
export type RelationshipsReleaseGroupsArgs = {
  direction?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeID?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** Lists of entity relationships for each entity type. */
export type RelationshipsSeriesArgs = {
  direction?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeID?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** Lists of entity relationships for each entity type. */
export type RelationshipsUrlsArgs = {
  direction?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeID?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** Lists of entity relationships for each entity type. */
export type RelationshipsWorksArgs = {
  direction?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeID?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type RelationshipConnection = {
  __typename?: 'RelationshipConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RelationshipEdge>>>;
  /**
   * A list of nodes in the connection (without going through the
   * `edges` field).
   */
  nodes?: Maybe<Array<Maybe<Relationship>>>;
  /**
   * A count of the total number of items in this connection,
   * ignoring pagination.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type RelationshipEdge = {
  __typename?: 'RelationshipEdge';
  /** The item at the end of the edge */
  node?: Maybe<Relationship>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /**
   * The relevancy score (0–100) assigned by the search engine, if
   * these results were found through a search.
   */
  score?: Maybe<Scalars['Int']>;
};

/**
 * [Relationships](https://musicbrainz.org/doc/Relationships) are a
 * way to represent all the different ways in which entities are connected to each
 * other and to URLs outside MusicBrainz.
 */
export type Relationship = {
  __typename?: 'Relationship';
  /** The target entity. */
  target: Entity;
  /** The direction of the relationship. */
  direction: Scalars['String'];
  /** The type of entity on the receiving end of the relationship. */
  targetType: Scalars['String'];
  /**
   * How the source entity was actually credited, if different
   * from its main (performance) name.
   */
  sourceCredit?: Maybe<Scalars['String']>;
  /**
   * How the target entity was actually credited, if different
   * from its main (performance) name.
   */
  targetCredit?: Maybe<Scalars['String']>;
  /** The date on which the relationship became applicable. */
  begin?: Maybe<Scalars['Date']>;
  /** The date on which the relationship became no longer applicable. */
  end?: Maybe<Scalars['Date']>;
  /** Whether the relationship still applies. */
  ended?: Maybe<Scalars['Boolean']>;
  /**
   * Attributes which modify the relationship. There is a [list
   * of all attributes](https://musicbrainz.org/relationship-attributes), but the
   * attributes which are available, and how they should be used, depends on the
   * relationship type.
   */
  attributes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The type of relationship. */
  type?: Maybe<Scalars['String']>;
  /**
   * The MBID associated with the value of the `type`
   * field.
   */
  typeID?: Maybe<Scalars['MBID']>;
};

/** A connection to a list of items. */
export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CollectionEdge>>>;
  /**
   * A list of nodes in the connection (without going through the
   * `edges` field).
   */
  nodes?: Maybe<Array<Maybe<Collection>>>;
  /**
   * A count of the total number of items in this connection,
   * ignoring pagination.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** The item at the end of the edge */
  node?: Maybe<Collection>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /**
   * The relevancy score (0–100) assigned by the search engine, if
   * these results were found through a search.
   */
  score?: Maybe<Scalars['Int']>;
};

/**
 * [Collections](https://musicbrainz.org/doc/Collections) are
 * lists of entities that users can create.
 */
export type Collection = Node & Entity & {
  __typename?: 'Collection';
  /** The ID of an object */
  id: Scalars['ID'];
  /** The MBID of the entity. */
  mbid: Scalars['MBID'];
  /** The official name of the entity. */
  name?: Maybe<Scalars['String']>;
  /** The username of the editor who created the collection. */
  editor: Scalars['String'];
  /** The type of entity listed in the collection. */
  entityType: Scalars['String'];
  /** The type of collection. */
  type?: Maybe<Scalars['String']>;
  /**
   * The MBID associated with the value of the `type`
   * field.
   */
  typeID?: Maybe<Scalars['MBID']>;
  /** The list of areas found in this collection. */
  areas?: Maybe<AreaConnection>;
  /** The list of artists found in this collection. */
  artists?: Maybe<ArtistConnection>;
  /** The list of events found in this collection. */
  events?: Maybe<EventConnection>;
  /** The list of instruments found in this collection. */
  instruments?: Maybe<InstrumentConnection>;
  /** The list of labels found in this collection. */
  labels?: Maybe<LabelConnection>;
  /** The list of places found in this collection. */
  places?: Maybe<PlaceConnection>;
  /** The list of recordings found in this collection. */
  recordings?: Maybe<RecordingConnection>;
  /** The list of releases found in this collection. */
  releases?: Maybe<ReleaseConnection>;
  /** The list of release groups found in this collection. */
  releaseGroups?: Maybe<ReleaseGroupConnection>;
  /** The list of series found in this collection. */
  series?: Maybe<SeriesConnection>;
  /** The list of works found in this collection. */
  works?: Maybe<WorkConnection>;
};


/**
 * [Collections](https://musicbrainz.org/doc/Collections) are
 * lists of entities that users can create.
 */
export type CollectionAreasArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Collections](https://musicbrainz.org/doc/Collections) are
 * lists of entities that users can create.
 */
export type CollectionArtistsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Collections](https://musicbrainz.org/doc/Collections) are
 * lists of entities that users can create.
 */
export type CollectionEventsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Collections](https://musicbrainz.org/doc/Collections) are
 * lists of entities that users can create.
 */
export type CollectionInstrumentsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Collections](https://musicbrainz.org/doc/Collections) are
 * lists of entities that users can create.
 */
export type CollectionLabelsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Collections](https://musicbrainz.org/doc/Collections) are
 * lists of entities that users can create.
 */
export type CollectionPlacesArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Collections](https://musicbrainz.org/doc/Collections) are
 * lists of entities that users can create.
 */
export type CollectionRecordingsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Collections](https://musicbrainz.org/doc/Collections) are
 * lists of entities that users can create.
 */
export type CollectionReleasesArgs = {
  type?: Maybe<Array<Maybe<ReleaseGroupType>>>;
  status?: Maybe<Array<Maybe<ReleaseStatus>>>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Collections](https://musicbrainz.org/doc/Collections) are
 * lists of entities that users can create.
 */
export type CollectionReleaseGroupsArgs = {
  type?: Maybe<Array<Maybe<ReleaseGroupType>>>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Collections](https://musicbrainz.org/doc/Collections) are
 * lists of entities that users can create.
 */
export type CollectionSeriesArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Collections](https://musicbrainz.org/doc/Collections) are
 * lists of entities that users can create.
 */
export type CollectionWorksArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type AreaConnection = {
  __typename?: 'AreaConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AreaEdge>>>;
  /**
   * A list of nodes in the connection (without going through the
   * `edges` field).
   */
  nodes?: Maybe<Array<Maybe<Area>>>;
  /**
   * A count of the total number of items in this connection,
   * ignoring pagination.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type AreaEdge = {
  __typename?: 'AreaEdge';
  /** The item at the end of the edge */
  node?: Maybe<Area>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /**
   * The relevancy score (0–100) assigned by the search engine, if
   * these results were found through a search.
   */
  score?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type EventConnection = {
  __typename?: 'EventConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EventEdge>>>;
  /**
   * A list of nodes in the connection (without going through the
   * `edges` field).
   */
  nodes?: Maybe<Array<Maybe<Event>>>;
  /**
   * A count of the total number of items in this connection,
   * ignoring pagination.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type EventEdge = {
  __typename?: 'EventEdge';
  /** The item at the end of the edge */
  node?: Maybe<Event>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /**
   * The relevancy score (0–100) assigned by the search engine, if
   * these results were found through a search.
   */
  score?: Maybe<Scalars['Int']>;
};

/**
 * An [event](https://musicbrainz.org/doc/Event) refers to an
 * organised event which people can attend, and is relevant to MusicBrainz.
 * Generally this means live performances, like concerts and festivals.
 */
export type Event = Node & Entity & {
  __typename?: 'Event';
  /** The ID of an object */
  id: Scalars['ID'];
  /** The MBID of the entity. */
  mbid: Scalars['MBID'];
  /** The official name of the entity. */
  name?: Maybe<Scalars['String']>;
  /** A comment used to help distinguish identically named entitites. */
  disambiguation?: Maybe<Scalars['String']>;
  /**
   * [Aliases](https://musicbrainz.org/doc/Aliases) are used to store
   * alternate names or misspellings.
   */
  aliases?: Maybe<Array<Maybe<Alias>>>;
  /**
   * The begin and end dates of the entity’s existence. Its exact
   * meaning depends on the type of entity.
   */
  lifeSpan?: Maybe<LifeSpan>;
  /** The start time of the event. */
  time?: Maybe<Scalars['Time']>;
  /** Whether or not the event took place. */
  cancelled?: Maybe<Scalars['Boolean']>;
  /**
   * A list of songs performed, optionally including links to
   * artists and works. See the [setlist documentation](https://musicbrainz.org/doc/Event/Setlist)
   * for syntax and examples.
   */
  setlist?: Maybe<Scalars['String']>;
  /** What kind of event the event is, e.g. concert, festival, etc. */
  type?: Maybe<Scalars['String']>;
  /**
   * The MBID associated with the value of the `type`
   * field.
   */
  typeID?: Maybe<Scalars['MBID']>;
  /** Relationships between this entity and other entitites. */
  relationships?: Maybe<Relationships>;
  /** A list of collections containing this entity. */
  collections?: Maybe<CollectionConnection>;
  /** The rating users have given to this entity. */
  rating?: Maybe<Rating>;
  /** A list of tags linked to this entity. */
  tags?: Maybe<TagConnection>;
};


/**
 * An [event](https://musicbrainz.org/doc/Event) refers to an
 * organised event which people can attend, and is relevant to MusicBrainz.
 * Generally this means live performances, like concerts and festivals.
 */
export type EventCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * An [event](https://musicbrainz.org/doc/Event) refers to an
 * organised event which people can attend, and is relevant to MusicBrainz.
 * Generally this means live performances, like concerts and festivals.
 */
export type EventTagsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Ratings](https://musicbrainz.org/doc/Rating_System) allow users
 * to rate MusicBrainz entities. User may assign a value between 1 and 5; these
 * values are then aggregated by the server to compute an average community rating
 * for the entity.
 */
export type Rating = {
  __typename?: 'Rating';
  /** The number of votes that have contributed to the rating. */
  voteCount: Scalars['Int'];
  /** The average rating value based on the aggregated votes. */
  value?: Maybe<Scalars['Float']>;
};

/** A connection to a list of items. */
export type TagConnection = {
  __typename?: 'TagConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TagEdge>>>;
  /**
   * A list of nodes in the connection (without going through the
   * `edges` field).
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * A count of the total number of items in this connection,
   * ignoring pagination.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type TagEdge = {
  __typename?: 'TagEdge';
  /** The item at the end of the edge */
  node?: Maybe<Tag>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /**
   * The relevancy score (0–100) assigned by the search engine, if
   * these results were found through a search.
   */
  score?: Maybe<Scalars['Int']>;
};

/**
 * [Tags](https://musicbrainz.org/tags) are a way to mark entities
 * with extra information – for example, the genres that apply to an artist,
 * release, or recording.
 */
export type Tag = {
  __typename?: 'Tag';
  /** The tag label. */
  name: Scalars['String'];
  /** How many times this tag has been applied to the entity. */
  count?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type InstrumentConnection = {
  __typename?: 'InstrumentConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InstrumentEdge>>>;
  /**
   * A list of nodes in the connection (without going through the
   * `edges` field).
   */
  nodes?: Maybe<Array<Maybe<Instrument>>>;
  /**
   * A count of the total number of items in this connection,
   * ignoring pagination.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type InstrumentEdge = {
  __typename?: 'InstrumentEdge';
  /** The item at the end of the edge */
  node?: Maybe<Instrument>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /**
   * The relevancy score (0–100) assigned by the search engine, if
   * these results were found through a search.
   */
  score?: Maybe<Scalars['Int']>;
};

/**
 * [Instruments](https://musicbrainz.org/doc/Instrument) are
 * devices created or adapted to make musical sounds. Instruments are primarily
 * used in relationships between two other entities.
 */
export type Instrument = Node & Entity & {
  __typename?: 'Instrument';
  /** The ID of an object */
  id: Scalars['ID'];
  /** The MBID of the entity. */
  mbid: Scalars['MBID'];
  /** The official name of the entity. */
  name?: Maybe<Scalars['String']>;
  /** A comment used to help distinguish identically named entitites. */
  disambiguation?: Maybe<Scalars['String']>;
  /**
   * [Aliases](https://musicbrainz.org/doc/Aliases) are used to store
   * alternate names or misspellings.
   */
  aliases?: Maybe<Array<Maybe<Alias>>>;
  /**
   * A brief description of the main characteristics of the
   * instrument.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The type categorises the instrument by the way the sound is
   * created, similar to the [Hornbostel-Sachs](https://en.wikipedia.org/wiki/Hornbostel%E2%80%93Sachs)
   * classification.
   */
  type?: Maybe<Scalars['String']>;
  /**
   * The MBID associated with the value of the `type`
   * field.
   */
  typeID?: Maybe<Scalars['MBID']>;
  /** Relationships between this entity and other entitites. */
  relationships?: Maybe<Relationships>;
  /** A list of collections containing this entity. */
  collections?: Maybe<CollectionConnection>;
  /** A list of tags linked to this entity. */
  tags?: Maybe<TagConnection>;
  /**
   * Instrument images found at MediaWiki URLs in the instrument’s URL
   * relationships. Defaults to URL relationships with the type “image”.
   * This field is provided by the MediaWiki extension.
   */
  mediaWikiImages: Array<Maybe<MediaWikiImage>>;
};


/**
 * [Instruments](https://musicbrainz.org/doc/Instrument) are
 * devices created or adapted to make musical sounds. Instruments are primarily
 * used in relationships between two other entities.
 */
export type InstrumentCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Instruments](https://musicbrainz.org/doc/Instrument) are
 * devices created or adapted to make musical sounds. Instruments are primarily
 * used in relationships between two other entities.
 */
export type InstrumentTagsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * [Instruments](https://musicbrainz.org/doc/Instrument) are
 * devices created or adapted to make musical sounds. Instruments are primarily
 * used in relationships between two other entities.
 */
export type InstrumentMediaWikiImagesArgs = {
  type?: Maybe<Scalars['String']>;
};

/**
 * An object describing various properties of an image stored on a MediaWiki
 * server. The information comes the [MediaWiki imageinfo API](https://www.mediawiki.org/wiki/API:Imageinfo).
 */
export type MediaWikiImage = {
  __typename?: 'MediaWikiImage';
  /** The URL of the actual image file. */
  url: Scalars['URLString'];
  /** The URL of the wiki page describing the image. */
  descriptionURL?: Maybe<Scalars['URLString']>;
  /** The user who uploaded the file. */
  user?: Maybe<Scalars['String']>;
  /** The size of the file in bytes. */
  size?: Maybe<Scalars['Int']>;
  /** The pixel width of the image. */
  width?: Maybe<Scalars['Int']>;
  /** The pixel height of the image. */
  height?: Maybe<Scalars['Int']>;
  /** The canonical title of the file. */
  canonicalTitle?: Maybe<Scalars['String']>;
  /** The image title, brief description, or file name. */
  objectName?: Maybe<Scalars['String']>;
  /** A description of the image, potentially containing HTML. */
  descriptionHTML?: Maybe<Scalars['String']>;
  /**
   * The original date of creation of the image. May be a description rather than
   * a parseable timestamp, and may contain HTML.
   */
  originalDateTimeHTML?: Maybe<Scalars['String']>;
  /** A list of the categories of the image. */
  categories: Array<Maybe<Scalars['String']>>;
  /** The name of the image author, potentially containing HTML. */
  artistHTML?: Maybe<Scalars['String']>;
  /** The source of the image, potentially containing HTML. */
  creditHTML?: Maybe<Scalars['String']>;
  /** A short human-readable license name. */
  licenseShortName?: Maybe<Scalars['String']>;
  /** A web address where the license is described. */
  licenseURL?: Maybe<Scalars['URLString']>;
  /** The full list of values in the `extmetadata` field. */
  metadata: Array<Maybe<MediaWikiImageMetadata>>;
};


/** An entry in the `extmetadata` field of a MediaWiki image file. */
export type MediaWikiImageMetadata = {
  __typename?: 'MediaWikiImageMetadata';
  /** The name of the metadata field. */
  name: Scalars['String'];
  /** The value of the metadata field. All values will be converted to strings. */
  value?: Maybe<Scalars['String']>;
  /** The source of the value. */
  source?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type PlaceConnection = {
  __typename?: 'PlaceConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PlaceEdge>>>;
  /**
   * A list of nodes in the connection (without going through the
   * `edges` field).
   */
  nodes?: Maybe<Array<Maybe<Place>>>;
  /**
   * A count of the total number of items in this connection,
   * ignoring pagination.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type PlaceEdge = {
  __typename?: 'PlaceEdge';
  /** The item at the end of the edge */
  node?: Maybe<Place>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /**
   * The relevancy score (0–100) assigned by the search engine, if
   * these results were found through a search.
   */
  score?: Maybe<Scalars['Int']>;
};

/**
 * A [place](https://musicbrainz.org/doc/Place) is a venue, studio,
 * or other place where music is performed, recorded, engineered, etc.
 */
export type Place = Node & Entity & {
  __typename?: 'Place';
  /** The ID of an object */
  id: Scalars['ID'];
  /** The MBID of the entity. */
  mbid: Scalars['MBID'];
  /** The official name of the entity. */
  name?: Maybe<Scalars['String']>;
  /** A comment used to help distinguish identically named entitites. */
  disambiguation?: Maybe<Scalars['String']>;
  /**
   * [Aliases](https://musicbrainz.org/doc/Aliases) are used to store
   * alternate names or misspellings.
   */
  aliases?: Maybe<Array<Maybe<Alias>>>;
  /**
   * The address describes the location of the place using the
   * standard addressing format for the country it is located in.
   */
  address?: Maybe<Scalars['String']>;
  /**
   * The area entity representing the area, such as the city, in
   * which the place is located.
   */
  area?: Maybe<Area>;
  /** The geographic coordinates of the place. */
  coordinates?: Maybe<Coordinates>;
  /**
   * The begin and end dates of the entity’s existence. Its exact
   * meaning depends on the type of entity.
   */
  lifeSpan?: Maybe<LifeSpan>;
  /**
   * The type categorises the place based on its primary
   * function.
   */
  type?: Maybe<Scalars['String']>;
  /**
   * The MBID associated with the value of the `type`
   * field.
   */
  typeID?: Maybe<Scalars['MBID']>;
  /** A list of events linked to this entity. */
  events?: Maybe<EventConnection>;
  /** Relationships between this entity and other entitites. */
  relationships?: Maybe<Relationships>;
  /** A list of collections containing this entity. */
  collections?: Maybe<CollectionConnection>;
  /** A list of tags linked to this entity. */
  tags?: Maybe<TagConnection>;
  /**
   * Place images found at MediaWiki URLs in the place’s URL relationships.
   * Defaults to URL relationships with the type “image”.
   * This field is provided by the MediaWiki extension.
   */
  mediaWikiImages: Array<Maybe<MediaWikiImage>>;
};


/**
 * A [place](https://musicbrainz.org/doc/Place) is a venue, studio,
 * or other place where music is performed, recorded, engineered, etc.
 */
export type PlaceEventsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [place](https://musicbrainz.org/doc/Place) is a venue, studio,
 * or other place where music is performed, recorded, engineered, etc.
 */
export type PlaceCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [place](https://musicbrainz.org/doc/Place) is a venue, studio,
 * or other place where music is performed, recorded, engineered, etc.
 */
export type PlaceTagsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [place](https://musicbrainz.org/doc/Place) is a venue, studio,
 * or other place where music is performed, recorded, engineered, etc.
 */
export type PlaceMediaWikiImagesArgs = {
  type?: Maybe<Scalars['String']>;
};

/** Geographic coordinates described with latitude and longitude. */
export type Coordinates = {
  __typename?: 'Coordinates';
  /** The north–south position of a point on the Earth’s surface. */
  latitude?: Maybe<Scalars['Degrees']>;
  /** The east–west position of a point on the Earth’s surface. */
  longitude?: Maybe<Scalars['Degrees']>;
};


/** A connection to a list of items. */
export type ReleaseGroupConnection = {
  __typename?: 'ReleaseGroupConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReleaseGroupEdge>>>;
  /**
   * A list of nodes in the connection (without going through the
   * `edges` field).
   */
  nodes?: Maybe<Array<Maybe<ReleaseGroup>>>;
  /**
   * A count of the total number of items in this connection,
   * ignoring pagination.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type ReleaseGroupEdge = {
  __typename?: 'ReleaseGroupEdge';
  /** The item at the end of the edge */
  node?: Maybe<ReleaseGroup>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /**
   * The relevancy score (0–100) assigned by the search engine, if
   * these results were found through a search.
   */
  score?: Maybe<Scalars['Int']>;
};

/**
 * A [release group](https://musicbrainz.org/doc/Release_Group) is
 * used to group several different releases into a single logical entity. Every
 * release belongs to one, and only one release group.
 *
 * Both release groups and releases are “albums” in a general sense, but with an
 * important difference: a release is something you can buy as media such as a CD
 * or a vinyl record, while a release group embraces the overall concept of an
 * album – it doesn’t matter how many CDs or editions/versions it had.
 */
export type ReleaseGroup = Node & Entity & {
  __typename?: 'ReleaseGroup';
  /** The ID of an object */
  id: Scalars['ID'];
  /** The MBID of the entity. */
  mbid: Scalars['MBID'];
  /** The official title of the entity. */
  title?: Maybe<Scalars['String']>;
  /** A comment used to help distinguish identically named entitites. */
  disambiguation?: Maybe<Scalars['String']>;
  /**
   * [Aliases](https://musicbrainz.org/doc/Aliases) are used to store
   * alternate names or misspellings.
   */
  aliases?: Maybe<Array<Maybe<Alias>>>;
  /**
   * The main credited artist(s).
   * @deprecated The `artistCredit` field has been renamed to
   * `artistCredits`, since it is a list of credits and is referred to in the
   * plural form throughout the MusicBrainz documentation. This field is deprecated
   * and will be removed in a major release in the future. Use the equivalent
   * `artistCredits` field.
   */
  artistCredit?: Maybe<Array<Maybe<ArtistCredit>>>;
  /** The main credited artist(s). */
  artistCredits?: Maybe<Array<Maybe<ArtistCredit>>>;
  /** The date of the earliest release in the group. */
  firstReleaseDate?: Maybe<Scalars['Date']>;
  /**
   * The [type](https://musicbrainz.org/doc/Release_Group/Type)
   * of a release group describes what kind of releases the release group represents,
   * e.g. album, single, soundtrack, compilation, etc. A release group can have a
   * “main” type and an unspecified number of additional types.
   */
  primaryType?: Maybe<ReleaseGroupType>;
  /**
   * The MBID associated with the value of the `primaryType`
   * field.
   */
  primaryTypeID?: Maybe<Scalars['MBID']>;
  /**
   * Additional [types](https://musicbrainz.org/doc/Release_Group/Type)
   * that apply to this release group.
   */
  secondaryTypes?: Maybe<Array<Maybe<ReleaseGroupType>>>;
  /**
   * The MBIDs associated with the values of the `secondaryTypes`
   * field.
   */
  secondaryTypeIDs?: Maybe<Array<Maybe<Scalars['MBID']>>>;
  /** A list of artists linked to this entity. */
  artists?: Maybe<ArtistConnection>;
  /** A list of releases linked to this entity. */
  releases?: Maybe<ReleaseConnection>;
  /** Relationships between this entity and other entitites. */
  relationships?: Maybe<Relationships>;
  /** A list of collections containing this entity. */
  collections?: Maybe<CollectionConnection>;
  /** The rating users have given to this entity. */
  rating?: Maybe<Rating>;
  /** A list of tags linked to this entity. */
  tags?: Maybe<TagConnection>;
  /**
   * The cover art for a release in the release group, obtained from the
   * [Cover Art Archive](https://musicbrainz.org/doc/Cover_Art_Archive). A
   * release in the release group will be chosen as representative of the release
   * group.
   * This field is provided by the Cover Art Archive extension.
   */
  coverArtArchive?: Maybe<CoverArtArchiveRelease>;
  /**
   * Images of the release group from [fanart.tv](https://fanart.tv/).
   * This field is provided by the fanart.tv extension.
   */
  fanArt?: Maybe<FanArtAlbum>;
  /**
   * Data about the release group from [TheAudioDB](http://www.theaudiodb.com/),
   * a good source of descriptive information, reviews, and images.
   * This field is provided by TheAudioDB extension.
   */
  theAudioDB?: Maybe<TheAudioDbAlbum>;
  /** Information about the release group on Discogs. */
  discogs?: Maybe<DiscogsMaster>;
};


/**
 * A [release group](https://musicbrainz.org/doc/Release_Group) is
 * used to group several different releases into a single logical entity. Every
 * release belongs to one, and only one release group.
 *
 * Both release groups and releases are “albums” in a general sense, but with an
 * important difference: a release is something you can buy as media such as a CD
 * or a vinyl record, while a release group embraces the overall concept of an
 * album – it doesn’t matter how many CDs or editions/versions it had.
 */
export type ReleaseGroupArtistsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [release group](https://musicbrainz.org/doc/Release_Group) is
 * used to group several different releases into a single logical entity. Every
 * release belongs to one, and only one release group.
 *
 * Both release groups and releases are “albums” in a general sense, but with an
 * important difference: a release is something you can buy as media such as a CD
 * or a vinyl record, while a release group embraces the overall concept of an
 * album – it doesn’t matter how many CDs or editions/versions it had.
 */
export type ReleaseGroupReleasesArgs = {
  type?: Maybe<Array<Maybe<ReleaseGroupType>>>;
  status?: Maybe<Array<Maybe<ReleaseStatus>>>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [release group](https://musicbrainz.org/doc/Release_Group) is
 * used to group several different releases into a single logical entity. Every
 * release belongs to one, and only one release group.
 *
 * Both release groups and releases are “albums” in a general sense, but with an
 * important difference: a release is something you can buy as media such as a CD
 * or a vinyl record, while a release group embraces the overall concept of an
 * album – it doesn’t matter how many CDs or editions/versions it had.
 */
export type ReleaseGroupCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [release group](https://musicbrainz.org/doc/Release_Group) is
 * used to group several different releases into a single logical entity. Every
 * release belongs to one, and only one release group.
 *
 * Both release groups and releases are “albums” in a general sense, but with an
 * important difference: a release is something you can buy as media such as a CD
 * or a vinyl record, while a release group embraces the overall concept of an
 * album – it doesn’t matter how many CDs or editions/versions it had.
 */
export type ReleaseGroupTagsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};

/**
 * An object containing a list of the cover art images for a release obtained
 * from the [Cover Art Archive](https://musicbrainz.org/doc/Cover_Art_Archive),
 * as well as a summary of what artwork is available.
 */
export type CoverArtArchiveRelease = {
  __typename?: 'CoverArtArchiveRelease';
  /**
   * The URL of an image depicting the album cover or “main front” of the release,
   * i.e. the front of the packaging of the audio recording (or in the case of a
   * digital release, the image associated with it in a digital media store).
   *
   * In the MusicBrainz schema, this field is a Boolean value indicating the
   * presence of a front image, whereas here the value is the URL for the image
   * itself if one exists. You can check for null if you just want to determine
   * the presence of an image.
   */
  front?: Maybe<Scalars['URLString']>;
  /**
   * The URL of an image depicting the “main back” of the release, i.e. the back
   * of the packaging of the audio recording.
   *
   * In the MusicBrainz schema, this field is a Boolean value indicating the
   * presence of a back image, whereas here the value is the URL for the image
   * itself. You can check for null if you just want to determine the presence of
   * an image.
   */
  back?: Maybe<Scalars['URLString']>;
  /**
   * A list of images depicting the different sides and surfaces of a release’s
   * media and packaging.
   */
  images: Array<Maybe<CoverArtArchiveImage>>;
  /** Whether there is artwork present for this release. */
  artwork: Scalars['Boolean'];
  /** The number of artwork images present for this release. */
  count: Scalars['Int'];
  /** The particular release shown in the returned cover art. */
  release?: Maybe<Release>;
};


/**
 * An object containing a list of the cover art images for a release obtained
 * from the [Cover Art Archive](https://musicbrainz.org/doc/Cover_Art_Archive),
 * as well as a summary of what artwork is available.
 */
export type CoverArtArchiveReleaseFrontArgs = {
  size?: Maybe<CoverArtArchiveImageSize>;
};


/**
 * An object containing a list of the cover art images for a release obtained
 * from the [Cover Art Archive](https://musicbrainz.org/doc/Cover_Art_Archive),
 * as well as a summary of what artwork is available.
 */
export type CoverArtArchiveReleaseBackArgs = {
  size?: Maybe<CoverArtArchiveImageSize>;
};

/** The image sizes that may be requested at the [Cover Art Archive](https://musicbrainz.org/doc/Cover_Art_Archive). */
export enum CoverArtArchiveImageSize {
  /** A maximum dimension of 250px. */
  Small = 'SMALL',
  /** A maximum dimension of 500px. */
  Large = 'LARGE',
  /** The image’s original dimensions, with no maximum. */
  Full = 'FULL'
}

/** An individual piece of album artwork from the [Cover Art Archive](https://musicbrainz.org/doc/Cover_Art_Archive). */
export type CoverArtArchiveImage = {
  __typename?: 'CoverArtArchiveImage';
  /** The Internet Archive’s internal file ID for the image. */
  fileID: Scalars['String'];
  /** The URL at which the image can be found. */
  image: Scalars['URLString'];
  /** A set of thumbnails for the image. */
  thumbnails: CoverArtArchiveImageThumbnails;
  /** Whether this image depicts the “main front” of the release. */
  front: Scalars['Boolean'];
  /** Whether this image depicts the “main back” of the release. */
  back: Scalars['Boolean'];
  /**
   * A list of [image types](https://musicbrainz.org/doc/Cover_Art/Types)
   * describing what part(s) of the release the image includes.
   */
  types: Array<Maybe<Scalars['String']>>;
  /** The MusicBrainz edit ID. */
  edit?: Maybe<Scalars['Int']>;
  /** Whether the image was approved by the MusicBrainz edit system. */
  approved?: Maybe<Scalars['Boolean']>;
  /** A free-text comment left for the image. */
  comment?: Maybe<Scalars['String']>;
};

/** URLs for thumbnails of different sizes for a particular piece of cover art. */
export type CoverArtArchiveImageThumbnails = {
  __typename?: 'CoverArtArchiveImageThumbnails';
  /**
   * The URL of a small version of the cover art, where the maximum dimension is
   * 250px.
   */
  small?: Maybe<Scalars['URLString']>;
  /**
   * The URL of a large version of the cover art, where the maximum dimension is
   * 500px.
   */
  large?: Maybe<Scalars['URLString']>;
};

/**
 * An object containing lists of the different types of release group images from
 * [fanart.tv](https://fanart.tv/).
 */
export type FanArtAlbum = {
  __typename?: 'FanArtAlbum';
  /** A list of 1000x1000 JPG images of the cover artwork of the release group. */
  albumCovers?: Maybe<Array<Maybe<FanArtImage>>>;
  /**
   * A list of 1000x1000 PNG images of the physical disc media for the release
   * group, with transparent backgrounds.
   */
  discImages?: Maybe<Array<Maybe<FanArtDiscImage>>>;
};

/** A single image from [fanart.tv](https://fanart.tv/). */
export type FanArtImage = {
  __typename?: 'FanArtImage';
  /** The ID of the image on fanart.tv. */
  imageID?: Maybe<Scalars['ID']>;
  /** The URL of the image. */
  url?: Maybe<Scalars['URLString']>;
  /** The number of likes the image has received by fanart.tv users. */
  likeCount?: Maybe<Scalars['Int']>;
};


/** A single image from [fanart.tv](https://fanart.tv/). */
export type FanArtImageUrlArgs = {
  size?: Maybe<FanArtImageSize>;
};

/** The image sizes that may be requested at [fanart.tv](https://fanart.tv/). */
export enum FanArtImageSize {
  /** The image’s full original dimensions. */
  Full = 'FULL',
  /** A maximum dimension of 200px. */
  Preview = 'PREVIEW'
}

/** A disc image from [fanart.tv](https://fanart.tv/). */
export type FanArtDiscImage = {
  __typename?: 'FanArtDiscImage';
  /** The ID of the image on fanart.tv. */
  imageID?: Maybe<Scalars['ID']>;
  /** The URL of the image. */
  url?: Maybe<Scalars['URLString']>;
  /** The number of likes the image has received by fanart.tv users. */
  likeCount?: Maybe<Scalars['Int']>;
  /** The disc number. */
  discNumber?: Maybe<Scalars['Int']>;
  /** The width and height of the (square) disc image. */
  size?: Maybe<Scalars['Int']>;
};


/** A disc image from [fanart.tv](https://fanart.tv/). */
export type FanArtDiscImageUrlArgs = {
  size?: Maybe<FanArtImageSize>;
};

/**
 * An album on [TheAudioDB](http://www.theaudiodb.com/) corresponding with a
 * MusicBrainz Release Group.
 */
export type TheAudioDbAlbum = {
  __typename?: 'TheAudioDBAlbum';
  /** TheAudioDB ID of the album. */
  albumID?: Maybe<Scalars['ID']>;
  /** TheAudioDB ID of the artist who released the album. */
  artistID?: Maybe<Scalars['ID']>;
  /** A description of the album, often available in several languages. */
  description?: Maybe<Scalars['String']>;
  /** A review of the album. */
  review?: Maybe<Scalars['String']>;
  /** The worldwide sales figure. */
  salesCount?: Maybe<Scalars['Float']>;
  /** The album’s rating as determined by user votes, out of 10. */
  score?: Maybe<Scalars['Float']>;
  /** The number of users who voted to determine the album’s score. */
  scoreVotes?: Maybe<Scalars['Float']>;
  /** An image of the physical disc media for the album. */
  discImage?: Maybe<Scalars['URLString']>;
  /** An image of the spine of the album packaging. */
  spineImage?: Maybe<Scalars['URLString']>;
  /** An image of the front of the album packaging. */
  frontImage?: Maybe<Scalars['URLString']>;
  /** An image of the back of the album packaging. */
  backImage?: Maybe<Scalars['URLString']>;
  /** The primary musical genre of the album (e.g. “Alternative Rock”). */
  genre?: Maybe<Scalars['String']>;
  /** The primary musical mood of the album (e.g. “Sad”). */
  mood?: Maybe<Scalars['String']>;
  /** The primary musical style of the album (e.g. “Rock/Pop”). */
  style?: Maybe<Scalars['String']>;
  /** A rough description of the primary musical speed of the album (e.g. “Medium”). */
  speed?: Maybe<Scalars['String']>;
  /** The primary musical theme of the album (e.g. “In Love”). */
  theme?: Maybe<Scalars['String']>;
};


/**
 * An album on [TheAudioDB](http://www.theaudiodb.com/) corresponding with a
 * MusicBrainz Release Group.
 */
export type TheAudioDbAlbumDescriptionArgs = {
  lang?: Maybe<Scalars['String']>;
};


/**
 * An album on [TheAudioDB](http://www.theaudiodb.com/) corresponding with a
 * MusicBrainz Release Group.
 */
export type TheAudioDbAlbumDiscImageArgs = {
  size?: Maybe<TheAudioDbImageSize>;
};


/**
 * An album on [TheAudioDB](http://www.theaudiodb.com/) corresponding with a
 * MusicBrainz Release Group.
 */
export type TheAudioDbAlbumSpineImageArgs = {
  size?: Maybe<TheAudioDbImageSize>;
};


/**
 * An album on [TheAudioDB](http://www.theaudiodb.com/) corresponding with a
 * MusicBrainz Release Group.
 */
export type TheAudioDbAlbumFrontImageArgs = {
  size?: Maybe<TheAudioDbImageSize>;
};


/**
 * An album on [TheAudioDB](http://www.theaudiodb.com/) corresponding with a
 * MusicBrainz Release Group.
 */
export type TheAudioDbAlbumBackImageArgs = {
  size?: Maybe<TheAudioDbImageSize>;
};

/** The image sizes that may be requested at [TheAudioDB](http://www.theaudiodb.com/). */
export enum TheAudioDbImageSize {
  /** The image’s full original dimensions. */
  Full = 'FULL',
  /** A maximum dimension of 200px. */
  Preview = 'PREVIEW'
}

/**
 * Master releases group different versions of the same release (for example,
 * releases in different formats, issued in different countries, re-releases,
 * etc.). The equivalent of a MusicBrainz release group.
 */
export type DiscogsMaster = {
  __typename?: 'DiscogsMaster';
  /** The ID of the master on Discogs. */
  masterID: Scalars['ID'];
  /** The title of the master. */
  title: Scalars['String'];
  /** The URL of the master on Discogs. */
  url: Scalars['URLString'];
  /** The artists credited on the master. */
  artistCredits: Array<DiscogsArtistCredit>;
  /** The primary musical genres of the master (e.g. “Electronic”). */
  genres: Array<Scalars['String']>;
  /** The primary musical styles of the master (e.g. “Techno”, “Minimal”). */
  styles: Array<Scalars['String']>;
  /** The number of listings the master currently has on the marketplace. */
  forSaleCount?: Maybe<Scalars['Int']>;
  /** The lowest price for the master currently found on the marketplace. */
  lowestPrice?: Maybe<Scalars['Float']>;
  /** The year the master was released (most likely its “main” release). */
  year?: Maybe<Scalars['Int']>;
  /** The main release from the master. */
  mainRelease?: Maybe<DiscogsRelease>;
  /** Images of the master. */
  images: Array<DiscogsImage>;
  /** Music videos from the master. */
  videos: Array<DiscogsVideo>;
  /**
   * A description of the quality and completeness of this master’s data in the
   * Discogs database.
   */
  dataQuality?: Maybe<Scalars['String']>;
};


/**
 * Master releases group different versions of the same release (for example,
 * releases in different formats, issued in different countries, re-releases,
 * etc.). The equivalent of a MusicBrainz release group.
 */
export type DiscogsMasterLowestPriceArgs = {
  currency?: Maybe<Scalars['String']>;
};

/** A credited artist on a release, track, etc. */
export type DiscogsArtistCredit = {
  __typename?: 'DiscogsArtistCredit';
  /** The official or common name of the credited artist. */
  name?: Maybe<Scalars['String']>;
  /**
   * The artist name as credited on this particular work (the Artist Name
   * Variation, or ANV, in Discogs terms).
   */
  nameVariation?: Maybe<Scalars['String']>;
  /**
   * Join phrases might include words and/or punctuation to separate artist
   * names as they appear on the release, track, etc.
   */
  joinPhrase?: Maybe<Scalars['String']>;
  /** A list of roles the artist had on the work in question. */
  roles: Array<Scalars['String']>;
  /**
   * A list of tracks or track ranges (e.g. “A1 to A4”) on which the artist is
   * credited.
   */
  tracks: Array<Scalars['String']>;
  /** The artist’s entry on Discogs. */
  artist?: Maybe<DiscogsArtist>;
};

/** An artist on Discogs. */
export type DiscogsArtist = {
  __typename?: 'DiscogsArtist';
  /** The ID of the artist on Discogs. */
  artistID: Scalars['ID'];
  /** The name of the artist on Discogs. */
  name: Scalars['String'];
  /** Commonly found variations of the artist’s name. */
  nameVariations: Array<Scalars['String']>;
  /** The artist’s real name, if the artist is a person who uses a stage name. */
  realName?: Maybe<Scalars['String']>;
  /**
   * A list of Discogs artists that represent the same artist under a different
   * alias.
   */
  aliases: Array<DiscogsArtist>;
  /** The URL of the artist’s page on Discogs. */
  url: Scalars['URLString'];
  /** Links to the artist’s official pages on different web properties. */
  urls: Array<Scalars['URLString']>;
  /** A biography or description of the artist. */
  profile?: Maybe<Scalars['String']>;
  /** A list of images picturing the artist. */
  images: Array<DiscogsImage>;
  /** A list of members, if the artist is a group. */
  members: Array<DiscogsArtistMember>;
  /**
   * A description of the quality and completeness of this artist’s data in the
   * Discogs database.
   */
  dataQuality?: Maybe<Scalars['String']>;
};

/** A single image from Discogs. */
export type DiscogsImage = {
  __typename?: 'DiscogsImage';
  /** The URL of the image file. */
  url: Scalars['URLString'];
  /** The image type, primary or secondary. */
  type: DiscogsImageType;
  /** The image width in pixels. */
  width: Scalars['Int'];
  /** The image height in pixels. */
  height: Scalars['Int'];
  /** The URL for a 150x150 thumbnail of the image. */
  thumbnail?: Maybe<Scalars['URLString']>;
};

/** The type of image. */
export enum DiscogsImageType {
  /** The primary image representing the item. */
  Primary = 'PRIMARY',
  /** A secondary image representing the item. */
  Secondary = 'SECONDARY'
}

/** A single artist who is a member of a group on Discogs. */
export type DiscogsArtistMember = {
  __typename?: 'DiscogsArtistMember';
  /** Whether or not the member is still active in the group. */
  active?: Maybe<Scalars['Boolean']>;
  /** The name of the member. */
  name: Scalars['String'];
  /** The member’s artist information on Discogs. */
  artist?: Maybe<DiscogsArtist>;
};

/** A release on Discogs. */
export type DiscogsRelease = {
  __typename?: 'DiscogsRelease';
  /** The ID of the release on Discogs. */
  releaseID: Scalars['ID'];
  /** The title of the release. */
  title: Scalars['String'];
  /** The URL of the release on Discogs. */
  url: Scalars['URLString'];
  /** The artists credited on the release. */
  artistCredits: Array<DiscogsArtistCredit>;
  /**
   * An additional list of artists who contributed to the release, but are not
   * named in the release’s artists.
   */
  extraArtistCredits: Array<DiscogsArtistCredit>;
  /** The primary musical genres of the release (e.g. “Electronic”). */
  genres: Array<Scalars['String']>;
  /** The primary musical styles of the release (e.g. “Techno”, “Minimal”). */
  styles: Array<Scalars['String']>;
  /** The number of listings the release currently has on the marketplace. */
  forSaleCount?: Maybe<Scalars['Int']>;
  /** The lowest price for the release currently found on the marketplace. */
  lowestPrice?: Maybe<Scalars['Float']>;
  /** The year the release was issued. */
  year?: Maybe<Scalars['Int']>;
  /** Notes about the release. */
  notes?: Maybe<Scalars['String']>;
  /** The country in which the release was issued. */
  country?: Maybe<Scalars['String']>;
  /** The master release on Discogs. */
  master?: Maybe<DiscogsMaster>;
  /** The primary thumbnail image for the release. */
  thumbnail?: Maybe<Scalars['URLString']>;
  /** Images of the release. */
  images: Array<DiscogsImage>;
  /** Music videos from the release. */
  videos: Array<DiscogsVideo>;
  /**
   * Information about the Discogs community’s contributions to the release’s
   * data.
   */
  community?: Maybe<DiscogsCommunity>;
  /**
   * A description of the quality and completeness of this release’s data in
   * the Discogs database.
   */
  dataQuality?: Maybe<Scalars['String']>;
};


/** A release on Discogs. */
export type DiscogsReleaseLowestPriceArgs = {
  currency?: Maybe<Scalars['String']>;
};

/** A single video linked from Discogs. */
export type DiscogsVideo = {
  __typename?: 'DiscogsVideo';
  /** The URL of the video. */
  url: Scalars['URLString'];
  /** The title of the video. */
  title?: Maybe<Scalars['String']>;
  /** The video description. */
  description?: Maybe<Scalars['String']>;
  /** The duration of the video in milliseconds. */
  duration?: Maybe<Scalars['Duration']>;
  /** Whether the video is embeddable. */
  embed?: Maybe<Scalars['Boolean']>;
};

/** Community statistics regarding an item on Discogs. */
export type DiscogsCommunity = {
  __typename?: 'DiscogsCommunity';
  /** The acceptance status. */
  status?: Maybe<Scalars['String']>;
  /** Information about how Discogs users have rated the item. */
  rating?: Maybe<DiscogsRating>;
  /** The number of Discogs users who have the item in their collection. */
  haveCount?: Maybe<Scalars['Int']>;
  /** The number of Discogs users who want the item. */
  wantCount?: Maybe<Scalars['Int']>;
  /** The Discogs users who have contributed to the item’s data. */
  contributors: Array<DiscogsUser>;
  /** The Discogs user who submitted the item. */
  submitter?: Maybe<DiscogsUser>;
};

/** An aggregated rating on Discogs. */
export type DiscogsRating = {
  __typename?: 'DiscogsRating';
  /** The number of users who have contributed to the rating. */
  voteCount: Scalars['Int'];
  /** The average rating as determined by users. */
  value?: Maybe<Scalars['Float']>;
};

/** A user on Discogs. */
export type DiscogsUser = {
  __typename?: 'DiscogsUser';
  /** The user’s username on Discogs. */
  username: Scalars['String'];
};

/** A connection to a list of items. */
export type SeriesConnection = {
  __typename?: 'SeriesConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SeriesEdge>>>;
  /**
   * A list of nodes in the connection (without going through the
   * `edges` field).
   */
  nodes?: Maybe<Array<Maybe<Series>>>;
  /**
   * A count of the total number of items in this connection,
   * ignoring pagination.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type SeriesEdge = {
  __typename?: 'SeriesEdge';
  /** The item at the end of the edge */
  node?: Maybe<Series>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /**
   * The relevancy score (0–100) assigned by the search engine, if
   * these results were found through a search.
   */
  score?: Maybe<Scalars['Int']>;
};

/**
 * A [series](https://musicbrainz.org/doc/Series) is a sequence of
 * separate release groups, releases, recordings, works or events with a common
 * theme.
 */
export type Series = Node & Entity & {
  __typename?: 'Series';
  /** The ID of an object */
  id: Scalars['ID'];
  /** The MBID of the entity. */
  mbid: Scalars['MBID'];
  /** The official name of the entity. */
  name?: Maybe<Scalars['String']>;
  /** A comment used to help distinguish identically named entitites. */
  disambiguation?: Maybe<Scalars['String']>;
  /**
   * The type primarily describes what type of entity the series
   * contains.
   */
  type?: Maybe<Scalars['String']>;
  /**
   * The MBID associated with the value of the `type`
   * field.
   */
  typeID?: Maybe<Scalars['MBID']>;
  /** Relationships between this entity and other entitites. */
  relationships?: Maybe<Relationships>;
  /** A list of collections containing this entity. */
  collections?: Maybe<CollectionConnection>;
  /** A list of tags linked to this entity. */
  tags?: Maybe<TagConnection>;
};


/**
 * A [series](https://musicbrainz.org/doc/Series) is a sequence of
 * separate release groups, releases, recordings, works or events with a common
 * theme.
 */
export type SeriesCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [series](https://musicbrainz.org/doc/Series) is a sequence of
 * separate release groups, releases, recordings, works or events with a common
 * theme.
 */
export type SeriesTagsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type WorkConnection = {
  __typename?: 'WorkConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WorkEdge>>>;
  /**
   * A list of nodes in the connection (without going through the
   * `edges` field).
   */
  nodes?: Maybe<Array<Maybe<Work>>>;
  /**
   * A count of the total number of items in this connection,
   * ignoring pagination.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type WorkEdge = {
  __typename?: 'WorkEdge';
  /** The item at the end of the edge */
  node?: Maybe<Work>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /**
   * The relevancy score (0–100) assigned by the search engine, if
   * these results were found through a search.
   */
  score?: Maybe<Scalars['Int']>;
};

/**
 * A [work](https://musicbrainz.org/doc/Work) is a distinct
 * intellectual or artistic creation, which can be expressed in the form of one or
 * more audio recordings.
 */
export type Work = Node & Entity & {
  __typename?: 'Work';
  /** The ID of an object */
  id: Scalars['ID'];
  /** The MBID of the entity. */
  mbid: Scalars['MBID'];
  /** The official title of the entity. */
  title?: Maybe<Scalars['String']>;
  /** A comment used to help distinguish identically named entitites. */
  disambiguation?: Maybe<Scalars['String']>;
  /**
   * [Aliases](https://musicbrainz.org/doc/Aliases) are used to store
   * alternate names or misspellings.
   */
  aliases?: Maybe<Array<Maybe<Alias>>>;
  /**
   * A list of [ISWCs](https://musicbrainz.org/doc/ISWC) assigned
   * to the work by copyright collecting agencies.
   */
  iswcs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The language in which the work was originally written. */
  language?: Maybe<Scalars['String']>;
  /** The type of work. */
  type?: Maybe<Scalars['String']>;
  /**
   * The MBID associated with the value of the `type`
   * field.
   */
  typeID?: Maybe<Scalars['MBID']>;
  /** A list of artists linked to this entity. */
  artists?: Maybe<ArtistConnection>;
  /** Relationships between this entity and other entitites. */
  relationships?: Maybe<Relationships>;
  /** A list of collections containing this entity. */
  collections?: Maybe<CollectionConnection>;
  /** The rating users have given to this entity. */
  rating?: Maybe<Rating>;
  /** A list of tags linked to this entity. */
  tags?: Maybe<TagConnection>;
};


/**
 * A [work](https://musicbrainz.org/doc/Work) is a distinct
 * intellectual or artistic creation, which can be expressed in the form of one or
 * more audio recordings.
 */
export type WorkArtistsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [work](https://musicbrainz.org/doc/Work) is a distinct
 * intellectual or artistic creation, which can be expressed in the form of one or
 * more audio recordings.
 */
export type WorkCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A [work](https://musicbrainz.org/doc/Work) is a distinct
 * intellectual or artistic creation, which can be expressed in the form of one or
 * more audio recordings.
 */
export type WorkTagsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};

/**
 * An object containing lists of the different types of label images from
 * [fanart.tv](https://fanart.tv/).
 */
export type FanArtLabel = {
  __typename?: 'FanArtLabel';
  /**
   * A list of 400x270 PNG images containing the label’s logo. There will
   * usually be a black version, a color version, and a white version, all with
   * transparent backgrounds.
   */
  logos?: Maybe<Array<Maybe<FanArtLabelImage>>>;
};

/** A music label image from [fanart.tv](https://fanart.tv/). */
export type FanArtLabelImage = {
  __typename?: 'FanArtLabelImage';
  /** The ID of the image on fanart.tv. */
  imageID?: Maybe<Scalars['ID']>;
  /** The URL of the image. */
  url?: Maybe<Scalars['URLString']>;
  /** The number of likes the image has received by fanart.tv users. */
  likeCount?: Maybe<Scalars['Int']>;
  /** The type of color content in the image (usually “white” or “colour”). */
  color?: Maybe<Scalars['String']>;
};


/** A music label image from [fanart.tv](https://fanart.tv/). */
export type FanArtLabelImageUrlArgs = {
  size?: Maybe<FanArtImageSize>;
};

/** A label on Discogs. */
export type DiscogsLabel = {
  __typename?: 'DiscogsLabel';
  /** The ID of the label on Discogs. */
  labelID: Scalars['ID'];
  /** The name of the label. */
  name: Scalars['String'];
  /** The URL of the label on Discogs. */
  url: Scalars['URLString'];
  /** A description of the history of the label. */
  profile?: Maybe<Scalars['String']>;
  /** Information on how to contact a representative of the label. */
  contactInfo?: Maybe<Scalars['String']>;
  /** The parent label, if this label is a subsidiary. */
  parentLabel?: Maybe<DiscogsLabel>;
  /** A list of labels that are subsidiaries of this label. */
  subLabels: Array<DiscogsLabel>;
  /** A list of images associated with the label. */
  images: Array<DiscogsImage>;
  /**
   * A description of the quality and completeness of this label’s data in the
   * Discogs database.
   */
  dataQuality?: Maybe<Scalars['String']>;
};

/**
 * An album on [Last.fm](https://www.last.fm/) corresponding with a MusicBrainz
 * Release.
 */
export type LastFmAlbum = {
  __typename?: 'LastFMAlbum';
  /** The MBID of the corresponding MusicBrainz release. */
  mbid?: Maybe<Scalars['MBID']>;
  /** The title of the album according to [Last.fm](https://www.last.fm/). */
  title?: Maybe<Scalars['String']>;
  /** The URL for the album on [Last.fm](https://www.last.fm/). */
  url: Scalars['URLString'];
  /** An image of the cover artwork of the release. */
  image?: Maybe<Scalars['URLString']>;
  /** The number of listeners recorded for the album. */
  listenerCount?: Maybe<Scalars['Float']>;
  /** The number of plays recorded for the album. */
  playCount?: Maybe<Scalars['Float']>;
  /**
   * Historical information written about the album, often available in several
   * languages.
   */
  description?: Maybe<LastFmWikiContent>;
  /**
   * The artist who released the album. This returns the Last.fm artist info,
   * not the MusicBrainz artist.
   */
  artist?: Maybe<LastFmArtist>;
  /** A list of tags applied to the artist by users, ordered by popularity. */
  topTags?: Maybe<LastFmTagConnection>;
};


/**
 * An album on [Last.fm](https://www.last.fm/) corresponding with a MusicBrainz
 * Release.
 */
export type LastFmAlbumImageArgs = {
  size?: Maybe<LastFmImageSize>;
};


/**
 * An album on [Last.fm](https://www.last.fm/) corresponding with a MusicBrainz
 * Release.
 */
export type LastFmAlbumDescriptionArgs = {
  lang?: Maybe<Scalars['String']>;
};


/**
 * An album on [Last.fm](https://www.last.fm/) corresponding with a MusicBrainz
 * Release.
 */
export type LastFmAlbumTopTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

/** The image sizes that may be requested at [Last.fm](https://www.last.fm/). */
export enum LastFmImageSize {
  /** A maximum dimension of 34px. */
  Small = 'SMALL',
  /** A maximum dimension of 64px. */
  Medium = 'MEDIUM',
  /** A maximum dimension of 174px. */
  Large = 'LARGE',
  /** A maximum dimension of 300px. */
  Extralarge = 'EXTRALARGE',
  /** A maximum dimension of 300px. */
  Mega = 'MEGA'
}

/**
 * Biographical or background information written about an entity on
 * [Last.fm](https://www.last.fm/).
 */
export type LastFmWikiContent = {
  __typename?: 'LastFMWikiContent';
  /** A summary of the wiki content, which may contain HTML. */
  summaryHTML?: Maybe<Scalars['String']>;
  /** The full wiki content, which may contain HTML. */
  contentHTML?: Maybe<Scalars['String']>;
  /**
   * The date the content was published. The data is reformatted from the
   * Last.fm API’s original format into the Date scalar format.
   */
  publishDate?: Maybe<Scalars['Date']>;
  /**
   * The time the content was published. The data is reformatted from the
   * Last.fm API’s original format into the Time scalar format. The API offers
   * no indication as to which time zone the time is in.
   */
  publishTime?: Maybe<Scalars['Time']>;
  /** The URL at which the content was published. */
  url?: Maybe<Scalars['URLString']>;
};

/** An artist on [Last.fm](https://www.last.fm/). */
export type LastFmArtist = {
  __typename?: 'LastFMArtist';
  /** The MBID of the corresponding MusicBrainz artist. */
  mbid?: Maybe<Scalars['MBID']>;
  /** The name of the artist according to [Last.fm](https://www.last.fm/). */
  name?: Maybe<Scalars['String']>;
  /** The URL for the artist on [Last.fm](https://www.last.fm/). */
  url: Scalars['URLString'];
  /** An image of the artist. */
  image?: Maybe<Scalars['URLString']>;
  /** The number of listeners recorded for the artist. */
  listenerCount?: Maybe<Scalars['Float']>;
  /** The number of plays recorded for the artist. */
  playCount?: Maybe<Scalars['Float']>;
  /** A list of similar artists. */
  similarArtists?: Maybe<LastFmArtistConnection>;
  /** A list of the artist’s most popular albums. */
  topAlbums?: Maybe<LastFmAlbumConnection>;
  /** A list of tags applied to the artist by users, ordered by popularity. */
  topTags?: Maybe<LastFmTagConnection>;
  /** A list of the artist’s most popular tracks. */
  topTracks?: Maybe<LastFmTrackConnection>;
  /** A biography of the artist, often available in several languages. */
  biography?: Maybe<LastFmWikiContent>;
};


/** An artist on [Last.fm](https://www.last.fm/). */
export type LastFmArtistImageArgs = {
  size?: Maybe<LastFmImageSize>;
};


/** An artist on [Last.fm](https://www.last.fm/). */
export type LastFmArtistSimilarArtistsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** An artist on [Last.fm](https://www.last.fm/). */
export type LastFmArtistTopAlbumsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** An artist on [Last.fm](https://www.last.fm/). */
export type LastFmArtistTopTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** An artist on [Last.fm](https://www.last.fm/). */
export type LastFmArtistTopTracksArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** An artist on [Last.fm](https://www.last.fm/). */
export type LastFmArtistBiographyArgs = {
  lang?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type LastFmArtistConnection = {
  __typename?: 'LastFMArtistConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LastFmArtistEdge>>>;
  /** A list of nodes in the connection (without going through the `edges` field). */
  nodes?: Maybe<Array<Maybe<LastFmArtist>>>;
  /** A count of the total number of items in this connection, ignoring pagination. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type LastFmArtistEdge = {
  __typename?: 'LastFMArtistEdge';
  /** The item at the end of the edge. */
  node?: Maybe<LastFmArtist>;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /**
   * The artist similarity score (0–1) as determined by [Last.fm](https://www.last.fm/),
   * if this connection is with another artist.
   */
  matchScore?: Maybe<Scalars['Float']>;
};

/** A connection to a list of items. */
export type LastFmAlbumConnection = {
  __typename?: 'LastFMAlbumConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LastFmAlbumEdge>>>;
  /** A list of nodes in the connection (without going through the `edges` field). */
  nodes?: Maybe<Array<Maybe<LastFmAlbum>>>;
  /** A count of the total number of items in this connection, ignoring pagination. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type LastFmAlbumEdge = {
  __typename?: 'LastFMAlbumEdge';
  /** The item at the end of the edge. */
  node?: Maybe<LastFmAlbum>;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type LastFmTagConnection = {
  __typename?: 'LastFMTagConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LastFmTagEdge>>>;
  /** A list of nodes in the connection (without going through the `edges` field). */
  nodes?: Maybe<Array<Maybe<LastFmTag>>>;
  /** A count of the total number of items in this connection, ignoring pagination. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type LastFmTagEdge = {
  __typename?: 'LastFMTagEdge';
  /** The item at the end of the edge. */
  node?: Maybe<LastFmTag>;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The number of times the tag has been applied to the item in question. */
  tagCount?: Maybe<Scalars['Int']>;
};

/** A tag added by users to an entity on [Last.fm](https://www.last.fm/). */
export type LastFmTag = {
  __typename?: 'LastFMTag';
  /** The tag name. */
  name: Scalars['String'];
  /** The URL for the tag on [Last.fm](https://www.last.fm/). */
  url: Scalars['URLString'];
};

/** A connection to a list of items. */
export type LastFmTrackConnection = {
  __typename?: 'LastFMTrackConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LastFmTrackEdge>>>;
  /** A list of nodes in the connection (without going through the `edges` field). */
  nodes?: Maybe<Array<Maybe<LastFmTrack>>>;
  /** A count of the total number of items in this connection, ignoring pagination. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type LastFmTrackEdge = {
  __typename?: 'LastFMTrackEdge';
  /** The item at the end of the edge. */
  node?: Maybe<LastFmTrack>;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /**
   * The track similarity score (0–1) as determined by [Last.fm](https://www.last.fm/),
   * if this connection is with another track.
   */
  matchScore?: Maybe<Scalars['Float']>;
};

/**
 * A track on [Last.fm](https://www.last.fm/) corresponding with a MusicBrainz
 * Recording.
 */
export type LastFmTrack = {
  __typename?: 'LastFMTrack';
  /** The MBID of the corresponding MusicBrainz recording. */
  mbid?: Maybe<Scalars['MBID']>;
  /** The title of the track according to [Last.fm](https://www.last.fm/). */
  title?: Maybe<Scalars['String']>;
  /** The URL for the track on [Last.fm](https://www.last.fm/). */
  url: Scalars['URLString'];
  /** The length of the track. */
  duration?: Maybe<Scalars['Duration']>;
  /** The number of listeners recorded for the track. */
  listenerCount?: Maybe<Scalars['Float']>;
  /** The number of plays recorded for the track. */
  playCount?: Maybe<Scalars['Float']>;
  /**
   * Historical information written about the track, often available in several
   * languages.
   */
  description?: Maybe<LastFmWikiContent>;
  /**
   * The artist who released the track. This returns the Last.fm artist info,
   * not the MusicBrainz artist.
   */
  artist?: Maybe<LastFmArtist>;
  /**
   * The album on which the track appears. This returns the Last.fm album info,
   * not the MusicBrainz release.
   */
  album?: Maybe<LastFmAlbum>;
  /** A list of similar tracks. */
  similarTracks?: Maybe<LastFmTrackConnection>;
  /** A list of tags applied to the track by users, ordered by popularity. */
  topTags?: Maybe<LastFmTagConnection>;
};


/**
 * A track on [Last.fm](https://www.last.fm/) corresponding with a MusicBrainz
 * Recording.
 */
export type LastFmTrackDescriptionArgs = {
  lang?: Maybe<Scalars['String']>;
};


/**
 * A track on [Last.fm](https://www.last.fm/) corresponding with a MusicBrainz
 * Recording.
 */
export type LastFmTrackSimilarTracksArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/**
 * A track on [Last.fm](https://www.last.fm/) corresponding with a MusicBrainz
 * Recording.
 */
export type LastFmTrackTopTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

/** Strategies for matching MusicBrainz entities to Spotify entities. */
export enum SpotifyMatchStrategy {
  /**
   * The entity will be matched by finding an explicit URL relationship that
   * links to Spotify.
   */
  Url = 'URL',
  /**
   * The entity will be matched by searching for Spotify entities by some
   * external ID that is known to both MusicBrainz and Spotify, like an ISRC
   * or UPC barcode. Since this can result in multiple Spotify matches, the most
   * popular will be preferred (if possible), or the first.
   */
  Externalid = 'EXTERNALID'
}

/** An album from Spotify. */
export type SpotifyAlbum = {
  __typename?: 'SpotifyAlbum';
  /**
   * The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
   * for the album.
   */
  albumID: Scalars['ID'];
  /**
   * The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
   * for the album.
   */
  uri: Scalars['String'];
  /** A link to the Web API endpoint providing full details of the album. */
  href: Scalars['URLString'];
  /** The name of the album. In case of an album takedown, the value may be empty. */
  title?: Maybe<Scalars['String']>;
  /** The type of the album, e.g. “Album”, “Single”, “Compilation”. */
  albumType: ReleaseGroupType;
  /** The artists of the album. */
  artists: Array<SpotifyArtist>;
  /**
   * The markets in which the album is available: [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * country codes.
   *
   * Note that an album is considered available in a market when at least 1 of its tracks is available in that market.
   */
  availableMarkets: Array<Scalars['String']>;
  /** The copyright statements of the album. */
  copyrights: Array<SpotifyCopyright>;
  /** Known external IDs for the album. */
  externalIDs: Array<SpotifyExternalId>;
  /** Known external URLs for this album. */
  externalURLs: Array<SpotifyExternalUrl>;
  /**
   * A list of the genres used to classify the album. For example: “Prog Rock”,
   * “Post-Grunge”. (If not yet classified, the array is empty.)
   */
  genres: Array<Scalars['String']>;
  /** The cover art for the album in various sizes, widest first. */
  images: Array<SpotifyImage>;
  /** The label for the album. */
  label?: Maybe<Scalars['String']>;
  /**
   * The popularity of the album. The value will be between 0 and 100, with 100
   * being the most popular. The popularity is calculated from the popularity of
   * the album’s individual tracks.
   */
  popularity: Scalars['Int'];
  /**
   * The date the album was first released, for example “1981-12-15”. Depending
   * on the precision, the month or day might be missing.
   */
  releaseDate?: Maybe<Scalars['Date']>;
};

/** An artist from Spotify. */
export type SpotifyArtist = {
  __typename?: 'SpotifyArtist';
  /**
   * The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
   * for the artist.
   */
  artistID: Scalars['ID'];
  /**
   * The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
   * for the artist.
   */
  uri: Scalars['String'];
  /** A link to the Web API endpoint providing full details of the artist. */
  href: Scalars['URLString'];
  /** The name of the artist. */
  name: Scalars['String'];
  /** Known external URLs for this artist. */
  externalURLs: Array<SpotifyExternalUrl>;
  /**
   * A list of the genres the artist is associated with. For example:
   * “Prog Rock”, “Post-Grunge”. (If not yet classified, the array is empty.)
   */
  genres: Array<Scalars['String']>;
  /**
   * The popularity of the artist. The value will be between 0 and 100, with 100
   * being the most popular. The artist’s popularity is calculated from the
   * popularity of all the artist’s tracks.
   */
  popularity: Scalars['Int'];
  /** Images of the artist in various sizes, widest first. */
  images: Array<SpotifyImage>;
  /** Spotify catalog information about an artist’s top tracks by country. */
  topTracks: Array<SpotifyTrack>;
  /**
   * Spotify catalog information about artists similar to a given artist.
   * Similarity is based on analysis of the Spotify community’s listening
   * history.
   */
  relatedArtists: Array<SpotifyArtist>;
};


/** An artist from Spotify. */
export type SpotifyArtistTopTracksArgs = {
  market: Scalars['String'];
};

/** A URL for linking to an entity with some third party. */
export type SpotifyExternalUrl = {
  __typename?: 'SpotifyExternalURL';
  /** The type of the URL, for example “spotify”. */
  type: Scalars['String'];
  /** An external, public URL to the object. */
  url: Scalars['URLString'];
};

/** A single image from Spotify. */
export type SpotifyImage = {
  __typename?: 'SpotifyImage';
  /** The source URL of the image. */
  url: Scalars['URLString'];
  /** The image width in pixels, if known. */
  width?: Maybe<Scalars['Int']>;
  /** The image height in pixels, if known. */
  height?: Maybe<Scalars['Int']>;
};

/** A track from Spotify. */
export type SpotifyTrack = {
  __typename?: 'SpotifyTrack';
  /**
   * The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
   * for the track.
   */
  trackID: Scalars['ID'];
  /**
   * The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
   * for the track.
   */
  uri: Scalars['String'];
  /** A link to the Web API endpoint providing full details of the track. */
  href: Scalars['URLString'];
  /** The name of the track. */
  title: Scalars['String'];
  /** The audio features of the track. */
  audioFeatures?: Maybe<SpotifyAudioFeatures>;
  /** The album on which the track appears. */
  album?: Maybe<SpotifyAlbum>;
  /** The artists who performed the track. */
  artists: Array<SpotifyArtist>;
  /**
   * A list of the countries in which the track can be played, identified by
   * their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * code.
   */
  availableMarkets: Array<Scalars['String']>;
  /**
   * The disc number (usually `1` unless the album consists of more than one
   * disc).
   */
  discNumber: Scalars['Int'];
  /** The track length in milliseconds. */
  duration: Scalars['Duration'];
  /** Whether or not the track has explicit lyrics, if known. */
  explicit?: Maybe<Scalars['Boolean']>;
  /** Known external IDs for the track. */
  externalIDs: Array<SpotifyExternalId>;
  /** Known external URLs for the track. */
  externalURLs: Array<SpotifyExternalUrl>;
  /**
   * The popularity of the track. The value will be between 0 and 100, with 100
   * being the most popular.
   *
   * The popularity is calculated by algorithm and is based, in the most part, on
   * the total number of plays the track has had and how recent those plays are.
   * Generally speaking, songs that are being played a lot now will have a higher
   * popularity than songs that were played a lot in the past.
   *
   * Duplicate tracks (e.g. the same track from a single and an album) are rated
   * independently.
   *
   * Artist and album popularity is derived mathematically from track popularity.
   *
   * Note that the popularity value may lag actual popularity by a few days: the
   * value is not updated in real time.
   */
  popularity: Scalars['Int'];
  /** A link to a 30 second preview (MP3 format) of the track, if available. */
  previewURL?: Maybe<Scalars['URLString']>;
  /**
   * The number of the track. If an album has several discs, the track number is
   * the number on the specified disc.
   */
  trackNumber: Scalars['Int'];
  /** A MusicBrainz recording that corresponds to the track. */
  musicBrainz?: Maybe<Recording>;
};


/** A track from Spotify. */
export type SpotifyTrackMusicBrainzArgs = {
  strategy?: Maybe<Array<SpotifyMatchStrategy>>;
};

/** The audio features of a track from Spotify. */
export type SpotifyAudioFeatures = {
  __typename?: 'SpotifyAudioFeatures';
  /**
   * A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0
   * represents high confidence the track is acoustic.
   */
  acousticness: Scalars['Float'];
  /**
   * Danceability describes how suitable a track is for dancing based on a
   * combination of musical elements including tempo, rhythm stability, beat
   * strength, and overall regularity. A value of 0.0 is least danceable and 1.0
   * is most danceable.
   */
  danceability: Scalars['Float'];
  /** The duration of the track in milliseconds. */
  duration: Scalars['Duration'];
  /**
   * Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of
   * intensity and activity. Typically, energetic tracks feel fast, loud, and
   * noisy. For example, death metal has high energy, while a Bach prelude scores
   * low on the scale. Perceptual features contributing to this attribute include
   * dynamic range, perceived loudness, timbre, onset rate, and general entropy.
   */
  energy: Scalars['Float'];
  /**
   * Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are
   * treated as instrumental in this context. Rap or spoken word tracks are
   * clearly “vocal”. The closer the instrumentalness value is to 1.0, the
   * greater likelihood the track contains no vocal content. Values above 0.5 are
   * intended to represent instrumental tracks, but confidence is higher as the
   * value approaches 1.0.
   */
  instrumentalness: Scalars['Float'];
  /**
   * The key the track is in. Integers map to pitches using standard [Pitch Class
   * notation](https://en.wikipedia.org/wiki/Pitch_class), e.g. 0 = C, 1 = C♯/D♭,
   * 2 = D, and so on. See the `keyName` field if you’d prefer the note as a
   * string.
   */
  key: Scalars['Int'];
  /**
   * The `key` translated from an integer to a name like “C”. (Only one name
   * will be returned, so enharmonic notes like like C♯/D♭ will just return
   * “C♯”.)
   */
  keyName: Scalars['String'];
  /**
   * Detects the presence of an audience in the recording. Higher liveness values
   * represent an increased probability that the track was performed live. A
   * value above 0.8 provides strong likelihood that the track is live.
   */
  liveness: Scalars['Float'];
  /**
   * The overall loudness of a track in decibels (dB). Loudness values are
   * averaged across the entire track and are useful for comparing relative
   * loudness of tracks. Loudness is the quality of a sound that is the primary
   * psychological correlate of physical strength (amplitude). Values typical
   * range between -60 and 0 db.
   */
  loudness: Scalars['Float'];
  /**
   * Mode indicates the modality (major or minor) of a track, the type of scale
   * from which its melodic content is derived. Major is represented by 1 and
   * minor is 0.
   */
  mode: SpotifyTrackMode;
  /**
   * Speechiness detects the presence of spoken words in a track. The more
   * exclusively speech-like the recording (e.g. talk show, audio book, poetry),
   * the closer to 1.0 the attribute value. Values above 0.66 describe tracks
   * that are probably made entirely of spoken words. Values between 0.33 and
   * 0.66 describe tracks that may contain both music and speech, either in
   * sections or layered, including such cases as rap music. Values below 0.33
   * most likely represent music and other non-speech-like tracks.
   */
  speechiness: Scalars['Float'];
  /**
   * The overall estimated tempo of a track in beats per minute (BPM). In musical
   * terminology, tempo is the speed or pace of a given piece and derives
   * directly from the average beat duration.
   */
  tempo: Scalars['Float'];
  /**
   * An estimated overall time signature of a track. The time signature (meter)
   * is a notational convention to specify how many beats are in each bar (or
   * measure).
   */
  timeSignature: Scalars['Float'];
  /**
   * A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a
   * track. Tracks with high valence sound more positive (e.g. happy, cheerful,
   * euphoric), while tracks with low valence sound more negative (e.g. sad,
   * depressed, angry).
   */
  valence: Scalars['Float'];
};

/** The potential values for modality (major or minor) of a track. */
export enum SpotifyTrackMode {
  /** The major scale. */
  Major = 'MAJOR',
  /** The minor scale. */
  Minor = 'MINOR'
}

/** A value for identifying an entity with some third party. */
export type SpotifyExternalId = {
  __typename?: 'SpotifyExternalID';
  /** The identifier type, for example “isrc”, “ean”, “upc”. */
  type: Scalars['String'];
  /** The identifier value. */
  id: Scalars['String'];
};

/** A copyright statement for an album from Spotify. */
export type SpotifyCopyright = {
  __typename?: 'SpotifyCopyright';
  /** The copyright text. */
  text: Scalars['String'];
  /**
   * Whether the copyright is for the work itself or the sound recording
   * (performance).
   */
  type: SpotifyCopyrightType;
};

/** The type of copyright. */
export enum SpotifyCopyrightType {
  /** The copyright. */
  Copyright = 'COPYRIGHT',
  /** The sound recording (performance) copyright. */
  Performance = 'PERFORMANCE'
}

/**
 * A track on [TheAudioDB](http://www.theaudiodb.com/) corresponding with a
 * MusicBrainz Recording.
 */
export type TheAudioDbTrack = {
  __typename?: 'TheAudioDBTrack';
  /** TheAudioDB ID of the track. */
  trackID?: Maybe<Scalars['ID']>;
  /** TheAudioDB ID of the album on which the track appears. */
  albumID?: Maybe<Scalars['ID']>;
  /** TheAudioDB ID of the artist who released the track. */
  artistID?: Maybe<Scalars['ID']>;
  /** A description of the track. */
  description?: Maybe<Scalars['String']>;
  /** A thumbnail image for the track. */
  thumbnail?: Maybe<Scalars['URLString']>;
  /** The track’s rating as determined by user votes, out of 10. */
  score?: Maybe<Scalars['Float']>;
  /** The number of users who voted to determine the album’s score. */
  scoreVotes?: Maybe<Scalars['Float']>;
  /** The track number of the song on the album. */
  trackNumber?: Maybe<Scalars['Int']>;
  /** The official music video for the track. */
  musicVideo?: Maybe<TheAudioDbMusicVideo>;
  /** The primary musical genre of the track (e.g. “Alternative Rock”). */
  genre?: Maybe<Scalars['String']>;
  /** The primary musical mood of the track (e.g. “Sad”). */
  mood?: Maybe<Scalars['String']>;
  /** The primary musical style of the track (e.g. “Rock/Pop”). */
  style?: Maybe<Scalars['String']>;
  /** The primary musical theme of the track (e.g. “In Love”). */
  theme?: Maybe<Scalars['String']>;
};


/**
 * A track on [TheAudioDB](http://www.theaudiodb.com/) corresponding with a
 * MusicBrainz Recording.
 */
export type TheAudioDbTrackDescriptionArgs = {
  lang?: Maybe<Scalars['String']>;
};


/**
 * A track on [TheAudioDB](http://www.theaudiodb.com/) corresponding with a
 * MusicBrainz Recording.
 */
export type TheAudioDbTrackThumbnailArgs = {
  size?: Maybe<TheAudioDbImageSize>;
};

/** Details of a music video associated with a track on [TheAudioDB](http://www.theaudiodb.com/). */
export type TheAudioDbMusicVideo = {
  __typename?: 'TheAudioDBMusicVideo';
  /** The URL where the music video can be found. */
  url?: Maybe<Scalars['URLString']>;
  /** The video production company of the music video. */
  companyName?: Maybe<Scalars['String']>;
  /** The director of the music video. */
  directorName?: Maybe<Scalars['String']>;
  /** A list of still images from the music video. */
  screenshots: Array<Maybe<Scalars['URLString']>>;
  /**
   * The number of views the video has received at the given URL. This will rarely
   * be up to date, so use cautiously.
   */
  viewCount?: Maybe<Scalars['Float']>;
  /**
   * The number of likes the video has received at the given URL. This will rarely
   * be up to date, so use cautiously.
   */
  likeCount?: Maybe<Scalars['Float']>;
  /**
   * The number of dislikes the video has received at the given URL. This will
   * rarely be up to date, so use cautiously.
   */
  dislikeCount?: Maybe<Scalars['Float']>;
  /**
   * The number of comments the video has received at the given URL. This will
   * rarely be up to date, so use cautiously.
   */
  commentCount?: Maybe<Scalars['Float']>;
};


/** Details of a music video associated with a track on [TheAudioDB](http://www.theaudiodb.com/). */
export type TheAudioDbMusicVideoScreenshotsArgs = {
  size?: Maybe<TheAudioDbImageSize>;
};

/**
 * An object containing lists of the different types of artist images from
 * [fanart.tv](https://fanart.tv/).
 */
export type FanArtArtist = {
  __typename?: 'FanArtArtist';
  /**
   * A list of 1920x1080 JPG images picturing the artist, suitable for use as
   * backgrounds.
   */
  backgrounds?: Maybe<Array<Maybe<FanArtImage>>>;
  /** A list of 1000x185 JPG images containing the artist and their logo or name. */
  banners?: Maybe<Array<Maybe<FanArtImage>>>;
  /**
   * A list of 400x155 PNG images containing the artist’s logo or name, with
   * transparent backgrounds.
   */
  logos?: Maybe<Array<Maybe<FanArtImage>>>;
  /**
   * A list of 800x310 PNG images containing the artist’s logo or name, with
   * transparent backgrounds.
   */
  logosHD?: Maybe<Array<Maybe<FanArtImage>>>;
  /**
   * A list of 1000x1000 JPG thumbnail images picturing the artist (usually
   * containing every member of a band).
   */
  thumbnails?: Maybe<Array<Maybe<FanArtImage>>>;
};

/** An artist on [TheAudioDB](http://www.theaudiodb.com/). */
export type TheAudioDbArtist = {
  __typename?: 'TheAudioDBArtist';
  /** TheAudioDB ID of the artist. */
  artistID?: Maybe<Scalars['ID']>;
  /** A biography of the artist, often available in several languages. */
  biography?: Maybe<Scalars['String']>;
  /** The number of members in the musical group, if applicable. */
  memberCount?: Maybe<Scalars['Int']>;
  /** A 1000x185 JPG banner image containing the artist and their logo or name. */
  banner?: Maybe<Scalars['URLString']>;
  /** A list of 1280x720 or 1920x1080 JPG images depicting the artist. */
  fanArt: Array<Maybe<Scalars['URLString']>>;
  /**
   * A 400x155 PNG image containing the artist’s logo or name, with a transparent
   * background.
   */
  logo?: Maybe<Scalars['URLString']>;
  /**
   * A 1000x1000 JPG thumbnail image picturing the artist (usually containing
   * every member of a band).
   */
  thumbnail?: Maybe<Scalars['URLString']>;
  /** The primary musical genre of the artist (e.g. “Alternative Rock”). */
  genre?: Maybe<Scalars['String']>;
  /** The primary musical mood of the artist (e.g. “Sad”). */
  mood?: Maybe<Scalars['String']>;
  /** The primary musical style of the artist (e.g. “Rock/Pop”). */
  style?: Maybe<Scalars['String']>;
};


/** An artist on [TheAudioDB](http://www.theaudiodb.com/). */
export type TheAudioDbArtistBiographyArgs = {
  lang?: Maybe<Scalars['String']>;
};


/** An artist on [TheAudioDB](http://www.theaudiodb.com/). */
export type TheAudioDbArtistBannerArgs = {
  size?: Maybe<TheAudioDbImageSize>;
};


/** An artist on [TheAudioDB](http://www.theaudiodb.com/). */
export type TheAudioDbArtistFanArtArgs = {
  size?: Maybe<TheAudioDbImageSize>;
};


/** An artist on [TheAudioDB](http://www.theaudiodb.com/). */
export type TheAudioDbArtistLogoArgs = {
  size?: Maybe<TheAudioDbImageSize>;
};


/** An artist on [TheAudioDB](http://www.theaudiodb.com/). */
export type TheAudioDbArtistThumbnailArgs = {
  size?: Maybe<TheAudioDbImageSize>;
};

/** A country with chart data available on [Last.fm](https://www.last.fm/). */
export type LastFmCountry = {
  __typename?: 'LastFMCountry';
  /** The top artists in this country, ordered by popularity. */
  topArtists?: Maybe<LastFmArtistConnection>;
  /** The top tracks in this country, ordered by popularity. */
  topTracks?: Maybe<LastFmTrackConnection>;
};


/** A country with chart data available on [Last.fm](https://www.last.fm/). */
export type LastFmCountryTopArtistsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** A country with chart data available on [Last.fm](https://www.last.fm/). */
export type LastFmCountryTopTracksArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

/**
 * A [URL](https://musicbrainz.org/doc/URL) pointing to a resource
 * external to MusicBrainz, i.e. an official homepage, a site where music can be
 * acquired, an entry in another database, etc.
 */
export type Url = Node & Entity & {
  __typename?: 'URL';
  /** The ID of an object */
  id: Scalars['ID'];
  /** The MBID of the entity. */
  mbid: Scalars['MBID'];
  /** The actual URL string. */
  resource: Scalars['URLString'];
  /** Relationships between this entity and other entitites. */
  relationships?: Maybe<Relationships>;
};

/**
 * A query for all MusicBrainz entities directly linked to another
 * entity.
 */
export type BrowseQuery = {
  __typename?: 'BrowseQuery';
  /** Browse area entities linked to the given arguments. */
  areas?: Maybe<AreaConnection>;
  /** Browse artist entities linked to the given arguments. */
  artists?: Maybe<ArtistConnection>;
  /** Browse collection entities linked to the given arguments. */
  collections?: Maybe<CollectionConnection>;
  /** Browse event entities linked to the given arguments. */
  events?: Maybe<EventConnection>;
  /** Browse label entities linked to the given arguments. */
  labels?: Maybe<LabelConnection>;
  /** Browse place entities linked to the given arguments. */
  places?: Maybe<PlaceConnection>;
  /** Browse recording entities linked to the given arguments. */
  recordings?: Maybe<RecordingConnection>;
  /** Browse release entities linked to the given arguments. */
  releases?: Maybe<ReleaseConnection>;
  /** Browse release group entities linked to the given arguments. */
  releaseGroups?: Maybe<ReleaseGroupConnection>;
  /** Browse work entities linked to the given arguments. */
  works?: Maybe<WorkConnection>;
};


/**
 * A query for all MusicBrainz entities directly linked to another
 * entity.
 */
export type BrowseQueryAreasArgs = {
  collection?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A query for all MusicBrainz entities directly linked to another
 * entity.
 */
export type BrowseQueryArtistsArgs = {
  area?: Maybe<Scalars['MBID']>;
  collection?: Maybe<Scalars['MBID']>;
  recording?: Maybe<Scalars['MBID']>;
  release?: Maybe<Scalars['MBID']>;
  releaseGroup?: Maybe<Scalars['MBID']>;
  work?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A query for all MusicBrainz entities directly linked to another
 * entity.
 */
export type BrowseQueryCollectionsArgs = {
  area?: Maybe<Scalars['MBID']>;
  artist?: Maybe<Scalars['MBID']>;
  editor?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['MBID']>;
  label?: Maybe<Scalars['MBID']>;
  place?: Maybe<Scalars['MBID']>;
  recording?: Maybe<Scalars['MBID']>;
  release?: Maybe<Scalars['MBID']>;
  releaseGroup?: Maybe<Scalars['MBID']>;
  work?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A query for all MusicBrainz entities directly linked to another
 * entity.
 */
export type BrowseQueryEventsArgs = {
  area?: Maybe<Scalars['MBID']>;
  artist?: Maybe<Scalars['MBID']>;
  collection?: Maybe<Scalars['MBID']>;
  place?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A query for all MusicBrainz entities directly linked to another
 * entity.
 */
export type BrowseQueryLabelsArgs = {
  area?: Maybe<Scalars['MBID']>;
  collection?: Maybe<Scalars['MBID']>;
  release?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A query for all MusicBrainz entities directly linked to another
 * entity.
 */
export type BrowseQueryPlacesArgs = {
  area?: Maybe<Scalars['MBID']>;
  collection?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A query for all MusicBrainz entities directly linked to another
 * entity.
 */
export type BrowseQueryRecordingsArgs = {
  artist?: Maybe<Scalars['MBID']>;
  collection?: Maybe<Scalars['MBID']>;
  isrc?: Maybe<Scalars['ISRC']>;
  release?: Maybe<Scalars['MBID']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A query for all MusicBrainz entities directly linked to another
 * entity.
 */
export type BrowseQueryReleasesArgs = {
  area?: Maybe<Scalars['MBID']>;
  artist?: Maybe<Scalars['MBID']>;
  collection?: Maybe<Scalars['MBID']>;
  discID?: Maybe<Scalars['DiscID']>;
  label?: Maybe<Scalars['MBID']>;
  recording?: Maybe<Scalars['MBID']>;
  releaseGroup?: Maybe<Scalars['MBID']>;
  track?: Maybe<Scalars['MBID']>;
  trackArtist?: Maybe<Scalars['MBID']>;
  type?: Maybe<Array<Maybe<ReleaseGroupType>>>;
  status?: Maybe<Array<Maybe<ReleaseStatus>>>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A query for all MusicBrainz entities directly linked to another
 * entity.
 */
export type BrowseQueryReleaseGroupsArgs = {
  artist?: Maybe<Scalars['MBID']>;
  collection?: Maybe<Scalars['MBID']>;
  release?: Maybe<Scalars['MBID']>;
  type?: Maybe<Array<Maybe<ReleaseGroupType>>>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/**
 * A query for all MusicBrainz entities directly linked to another
 * entity.
 */
export type BrowseQueryWorksArgs = {
  artist?: Maybe<Scalars['MBID']>;
  collection?: Maybe<Scalars['MBID']>;
  iswc?: Maybe<Scalars['ISWC']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/** A search for MusicBrainz entities using Lucene query syntax. */
export type SearchQuery = {
  __typename?: 'SearchQuery';
  /** Search for area entities matching the given query. */
  areas?: Maybe<AreaConnection>;
  /** Search for artist entities matching the given query. */
  artists?: Maybe<ArtistConnection>;
  /** Search for event entities matching the given query. */
  events?: Maybe<EventConnection>;
  /** Search for instrument entities matching the given query. */
  instruments?: Maybe<InstrumentConnection>;
  /** Search for label entities matching the given query. */
  labels?: Maybe<LabelConnection>;
  /** Search for place entities matching the given query. */
  places?: Maybe<PlaceConnection>;
  /** Search for recording entities matching the given query. */
  recordings?: Maybe<RecordingConnection>;
  /** Search for release entities matching the given query. */
  releases?: Maybe<ReleaseConnection>;
  /** Search for release group entities matching the given query. */
  releaseGroups?: Maybe<ReleaseGroupConnection>;
  /** Search for series entities matching the given query. */
  series?: Maybe<SeriesConnection>;
  /** Search for work entities matching the given query. */
  works?: Maybe<WorkConnection>;
};


/** A search for MusicBrainz entities using Lucene query syntax. */
export type SearchQueryAreasArgs = {
  query: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/** A search for MusicBrainz entities using Lucene query syntax. */
export type SearchQueryArtistsArgs = {
  query: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/** A search for MusicBrainz entities using Lucene query syntax. */
export type SearchQueryEventsArgs = {
  query: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/** A search for MusicBrainz entities using Lucene query syntax. */
export type SearchQueryInstrumentsArgs = {
  query: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/** A search for MusicBrainz entities using Lucene query syntax. */
export type SearchQueryLabelsArgs = {
  query: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/** A search for MusicBrainz entities using Lucene query syntax. */
export type SearchQueryPlacesArgs = {
  query: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/** A search for MusicBrainz entities using Lucene query syntax. */
export type SearchQueryRecordingsArgs = {
  query: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/** A search for MusicBrainz entities using Lucene query syntax. */
export type SearchQueryReleasesArgs = {
  query: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/** A search for MusicBrainz entities using Lucene query syntax. */
export type SearchQueryReleaseGroupsArgs = {
  query: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/** A search for MusicBrainz entities using Lucene query syntax. */
export type SearchQuerySeriesArgs = {
  query: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/** A search for MusicBrainz entities using Lucene query syntax. */
export type SearchQueryWorksArgs = {
  query: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};

/**
 * The different types of [Last.fm](https://www.last.fm/) queries that can be
 * made that are not connected to any particular MusicBrainz entity.
 */
export type LastFmQuery = {
  __typename?: 'LastFMQuery';
  /** A query for chart data. */
  chart: LastFmChartQuery;
};

/** A query for chart data on [Last.fm](https://www.last.fm/). */
export type LastFmChartQuery = {
  __typename?: 'LastFMChartQuery';
  /**
   * The most popular artists, ordered by popularity. If a country code is
   * given, retrieve the most popular artists in that country.
   */
  topArtists?: Maybe<LastFmArtistConnection>;
  /** The most popular tags, ordered by popularity. */
  topTags?: Maybe<LastFmTagConnection>;
  /**
   * The most popular tracks, ordered by popularity. If a country code is
   * given, retrieve the most popular tracks in that country.
   */
  topTracks?: Maybe<LastFmTrackConnection>;
};


/** A query for chart data on [Last.fm](https://www.last.fm/). */
export type LastFmChartQueryTopArtistsArgs = {
  country?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** A query for chart data on [Last.fm](https://www.last.fm/). */
export type LastFmChartQueryTopTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** A query for chart data on [Last.fm](https://www.last.fm/). */
export type LastFmChartQueryTopTracksArgs = {
  country?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

export type SpotifyQuery = {
  __typename?: 'SpotifyQuery';
  /** Track recommendations based on seed entities and various parameters. */
  recommendations: SpotifyRecommendations;
};


export type SpotifyQueryRecommendationsArgs = {
  seedArtists?: Maybe<Array<Scalars['ID']>>;
  seedGenres?: Maybe<Array<Scalars['ID']>>;
  seedTracks?: Maybe<Array<Scalars['ID']>>;
  limit?: Maybe<Scalars['Int']>;
};

export type SpotifyRecommendations = {
  __typename?: 'SpotifyRecommendations';
  tracks: Array<SpotifyTrack>;
};

/** A connection to a list of Discogs releases. */
export type DiscogsReleaseConnection = {
  __typename?: 'DiscogsReleaseConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<DiscogsReleaseEdge>;
  /** A list of nodes in the connection (without going through the `edges` field). */
  nodes: Array<DiscogsRelease>;
  /** A count of the total number of items in this connection, ignoring pagination. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a Discogs release connection. */
export type DiscogsReleaseEdge = {
  __typename?: 'DiscogsReleaseEdge';
  /** The release at the end of the edge. */
  node: DiscogsRelease;
};
