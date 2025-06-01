import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  GraphQLBigInt: { input: any; output: any; }
  GraphQLGeoJSON: { input: any; output: any; }
  GraphQLStringOrFloat: { input: any; output: any; }
  Hash: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export enum TEventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type TQuery = {
  __typename?: 'Query';
  accommodation: Array<TAccommodation>;
  accommodation_aggregated: Array<TAccommodationAggregated>;
  accommodation_by_id: Maybe<TAccommodation>;
  accommodation_by_version: Maybe<TVersionAccommodation>;
  author: Array<TAuthor>;
  author_aggregated: Array<TAuthorAggregated>;
  author_book: Array<TAuthorBook>;
  author_book_aggregated: Array<TAuthorBookAggregated>;
  author_book_by_id: Maybe<TAuthorBook>;
  author_book_by_version: Maybe<TVersionAuthorBook>;
  author_by_id: Maybe<TAuthor>;
  author_by_version: Maybe<TVersionAuthor>;
  blog: Array<TBlog>;
  blog_aggregated: Array<TBlogAggregated>;
  blog_by_id: Maybe<TBlog>;
  blog_by_version: Maybe<TVersionBlog>;
  blog_elements: Array<TBlogElements>;
  blog_elements_aggregated: Array<TBlogElementsAggregated>;
  blog_elements_by_id: Maybe<TBlogElements>;
  blog_elements_by_version: Maybe<TVersionBlogElements>;
  blog_image: Array<TBlogImage>;
  blog_image_aggregated: Array<TBlogImageAggregated>;
  blog_image_by_id: Maybe<TBlogImage>;
  blog_image_by_version: Maybe<TVersionBlogImage>;
  blog_map: Array<TBlogMap>;
  blog_map_aggregated: Array<TBlogMapAggregated>;
  blog_map_by_id: Maybe<TBlogMap>;
  blog_map_by_version: Maybe<TVersionBlogMap>;
  blog_quote: Array<TBlogQuote>;
  blog_quote_aggregated: Array<TBlogQuoteAggregated>;
  blog_quote_by_id: Maybe<TBlogQuote>;
  blog_quote_by_version: Maybe<TVersionBlogQuote>;
  blog_technology: Array<TBlogTechnology>;
  blog_technology_aggregated: Array<TBlogTechnologyAggregated>;
  blog_technology_by_id: Maybe<TBlogTechnology>;
  blog_technology_by_version: Maybe<TVersionBlogTechnology>;
  blog_text: Array<TBlogText>;
  blog_text_aggregated: Array<TBlogTextAggregated>;
  blog_text_by_id: Maybe<TBlogText>;
  blog_text_by_version: Maybe<TVersionBlogText>;
  blog_title: Array<TBlogTitle>;
  blog_title_aggregated: Array<TBlogTitleAggregated>;
  blog_title_by_id: Maybe<TBlogTitle>;
  blog_title_by_version: Maybe<TVersionBlogTitle>;
  blog_video: Array<TBlogVideo>;
  blog_video_aggregated: Array<TBlogVideoAggregated>;
  blog_video_by_id: Maybe<TBlogVideo>;
  blog_video_by_version: Maybe<TVersionBlogVideo>;
  book: Array<TBook>;
  book_aggregated: Array<TBookAggregated>;
  book_by_id: Maybe<TBook>;
  book_by_version: Maybe<TVersionBook>;
  book_series: Array<TBookSeries>;
  book_series_aggregated: Array<TBookSeriesAggregated>;
  book_series_by_id: Maybe<TBookSeries>;
  book_series_by_version: Maybe<TVersionBookSeries>;
  book_series_translations: Array<TBookSeriesTranslations>;
  book_series_translations_aggregated: Array<TBookSeriesTranslationsAggregated>;
  book_series_translations_by_id: Maybe<TBookSeriesTranslations>;
  book_series_translations_by_version: Maybe<TVersionBookSeriesTranslations>;
  book_translations: Array<TBookTranslations>;
  book_translations_aggregated: Array<TBookTranslationsAggregated>;
  book_translations_by_id: Maybe<TBookTranslations>;
  book_translations_by_version: Maybe<TVersionBookTranslations>;
  book_year: Array<TBookYear>;
  book_year_aggregated: Array<TBookYearAggregated>;
  book_year_by_id: Maybe<TBookYear>;
  book_year_by_version: Maybe<TVersionBookYear>;
  book_year_translations: Array<TBookYearTranslations>;
  book_year_translations_aggregated: Array<TBookYearTranslationsAggregated>;
  book_year_translations_by_id: Maybe<TBookYearTranslations>;
  book_year_translations_by_version: Maybe<TVersionBookYearTranslations>;
  booking: Array<TBooking>;
  booking_aggregated: Array<TBookingAggregated>;
  booking_by_id: Maybe<TBooking>;
  booking_by_version: Maybe<TVersionBooking>;
  country: Array<TCountry>;
  country_aggregated: Array<TCountryAggregated>;
  country_by_id: Maybe<TCountry>;
  country_by_version: Maybe<TVersionCountry>;
  country_translations: Array<TCountryTranslations>;
  country_translations_aggregated: Array<TCountryTranslationsAggregated>;
  country_translations_by_id: Maybe<TCountryTranslations>;
  country_translations_by_version: Maybe<TVersionCountryTranslations>;
  languages: Array<TLanguages>;
  languages_aggregated: Array<TLanguagesAggregated>;
  languages_by_id: Maybe<TLanguages>;
  languages_by_version: Maybe<TVersionLanguages>;
  navigation: Maybe<TNavigation>;
  navigation_by_version: Maybe<TVersionNavigation>;
  navigation_item: Array<TNavigationItem>;
  navigation_item_aggregated: Array<TNavigationItemAggregated>;
  navigation_item_by_id: Maybe<TNavigationItem>;
  navigation_item_by_version: Maybe<TVersionNavigationItem>;
  navigation_item_translations: Array<TNavigationItemTranslations>;
  navigation_item_translations_aggregated: Array<TNavigationItemTranslationsAggregated>;
  navigation_item_translations_by_id: Maybe<TNavigationItemTranslations>;
  navigation_item_translations_by_version: Maybe<TVersionNavigationItemTranslations>;
  navigation_translations: Array<TNavigationTranslations>;
  navigation_translations_aggregated: Array<TNavigationTranslationsAggregated>;
  navigation_translations_by_id: Maybe<TNavigationTranslations>;
  navigation_translations_by_version: Maybe<TVersionNavigationTranslations>;
  not_found: Maybe<TNotFound>;
  not_found_by_version: Maybe<TVersionNotFound>;
  not_found_translations: Array<TNotFoundTranslations>;
  not_found_translations_aggregated: Array<TNotFoundTranslationsAggregated>;
  not_found_translations_by_id: Maybe<TNotFoundTranslations>;
  not_found_translations_by_version: Maybe<TVersionNotFoundTranslations>;
  place: Array<TPlace>;
  place_aggregated: Array<TPlaceAggregated>;
  place_by_id: Maybe<TPlace>;
  place_by_version: Maybe<TVersionPlace>;
  place_translations: Array<TPlaceTranslations>;
  place_translations_aggregated: Array<TPlaceTranslationsAggregated>;
  place_translations_by_id: Maybe<TPlaceTranslations>;
  place_translations_by_version: Maybe<TVersionPlaceTranslations>;
  project: Array<TProject>;
  project_aggregated: Array<TProjectAggregated>;
  project_by_id: Maybe<TProject>;
  project_by_version: Maybe<TVersionProject>;
  project_directus_files: Array<TProjectDirectusFiles>;
  project_directus_files_aggregated: Array<TProjectDirectusFilesAggregated>;
  project_directus_files_by_id: Maybe<TProjectDirectusFiles>;
  project_directus_files_by_version: Maybe<TVersionProjectDirectusFiles>;
  project_technology: Array<TProjectTechnology>;
  project_technology_aggregated: Array<TProjectTechnologyAggregated>;
  project_technology_by_id: Maybe<TProjectTechnology>;
  project_technology_by_version: Maybe<TVersionProjectTechnology>;
  project_translations: Array<TProjectTranslations>;
  project_translations_aggregated: Array<TProjectTranslationsAggregated>;
  project_translations_by_id: Maybe<TProjectTranslations>;
  project_translations_by_version: Maybe<TVersionProjectTranslations>;
  reading: Maybe<TReading>;
  reading_by_version: Maybe<TVersionReading>;
  secret_blog: Array<TSecretBlog>;
  secret_blog_aggregated: Array<TSecretBlogAggregated>;
  secret_blog_by_id: Maybe<TSecretBlog>;
  secret_blog_by_version: Maybe<TVersionSecretBlog>;
  secret_blog_elements: Array<TSecretBlogElements>;
  secret_blog_elements_aggregated: Array<TSecretBlogElementsAggregated>;
  secret_blog_elements_by_id: Maybe<TSecretBlogElements>;
  secret_blog_elements_by_version: Maybe<TVersionSecretBlogElements>;
  secret_blog_place: Array<TSecretBlogPlace>;
  secret_blog_place_aggregated: Array<TSecretBlogPlaceAggregated>;
  secret_blog_place_by_id: Maybe<TSecretBlogPlace>;
  secret_blog_place_by_version: Maybe<TVersionSecretBlogPlace>;
  subscribers: Array<TSubscribers>;
  subscribers_aggregated: Array<TSubscribersAggregated>;
  subscribers_by_id: Maybe<TSubscribers>;
  subscribers_by_version: Maybe<TVersionSubscribers>;
  technology: Array<TTechnology>;
  technology_aggregated: Array<TTechnologyAggregated>;
  technology_by_id: Maybe<TTechnology>;
  technology_by_version: Maybe<TVersionTechnology>;
  technology_category: Array<TTechnologyCategory>;
  technology_category_aggregated: Array<TTechnologyCategoryAggregated>;
  technology_category_by_id: Maybe<TTechnologyCategory>;
  technology_category_by_version: Maybe<TVersionTechnologyCategory>;
  technology_category_translations: Array<TTechnologyCategoryTranslations>;
  technology_category_translations_aggregated: Array<TTechnologyCategoryTranslationsAggregated>;
  technology_category_translations_by_id: Maybe<TTechnologyCategoryTranslations>;
  technology_category_translations_by_version: Maybe<TVersionTechnologyCategoryTranslations>;
  technology_translations: Array<TTechnologyTranslations>;
  technology_translations_aggregated: Array<TTechnologyTranslationsAggregated>;
  technology_translations_by_id: Maybe<TTechnologyTranslations>;
  technology_translations_by_version: Maybe<TVersionTechnologyTranslations>;
  transportation: Array<TTransportation>;
  transportation_aggregated: Array<TTransportationAggregated>;
  transportation_by_id: Maybe<TTransportation>;
  transportation_by_version: Maybe<TVersionTransportation>;
  travel: Maybe<TTravel>;
  travel_by_version: Maybe<TVersionTravel>;
  website: Maybe<TWebsite>;
  website_by_version: Maybe<TVersionWebsite>;
  website_translations: Array<TWebsiteTranslations>;
  website_translations_aggregated: Array<TWebsiteTranslationsAggregated>;
  website_translations_by_id: Maybe<TWebsiteTranslations>;
  website_translations_by_version: Maybe<TVersionWebsiteTranslations>;
  work: Array<TWork>;
  work_aggregated: Array<TWorkAggregated>;
  work_by_id: Maybe<TWork>;
  work_by_version: Maybe<TVersionWork>;
  work_project: Array<TWorkProject>;
  work_project_aggregated: Array<TWorkProjectAggregated>;
  work_project_by_id: Maybe<TWorkProject>;
  work_project_by_version: Maybe<TVersionWorkProject>;
};


export type TQueryAccommodationArgs = {
  filter: InputMaybe<TAccommodationFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryAccommodationAggregatedArgs = {
  filter: InputMaybe<TAccommodationFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryAccommodationByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryAccommodationByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryAuthorArgs = {
  filter: InputMaybe<TAuthorFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryAuthorAggregatedArgs = {
  filter: InputMaybe<TAuthorFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryAuthorBookArgs = {
  filter: InputMaybe<TAuthorBookFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryAuthorBookAggregatedArgs = {
  filter: InputMaybe<TAuthorBookFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryAuthorBookByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryAuthorBookByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryAuthorByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryAuthorByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBlogArgs = {
  filter: InputMaybe<TBlogFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogAggregatedArgs = {
  filter: InputMaybe<TBlogFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBlogByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBlogElementsArgs = {
  filter: InputMaybe<TBlogElementsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogElementsAggregatedArgs = {
  filter: InputMaybe<TBlogElementsFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogElementsByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBlogElementsByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBlogImageArgs = {
  filter: InputMaybe<TBlogImageFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogImageAggregatedArgs = {
  filter: InputMaybe<TBlogImageFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogImageByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBlogImageByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBlogMapArgs = {
  filter: InputMaybe<TBlogMapFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogMapAggregatedArgs = {
  filter: InputMaybe<TBlogMapFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogMapByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBlogMapByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBlogQuoteArgs = {
  filter: InputMaybe<TBlogQuoteFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogQuoteAggregatedArgs = {
  filter: InputMaybe<TBlogQuoteFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogQuoteByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBlogQuoteByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBlogTechnologyArgs = {
  filter: InputMaybe<TBlogTechnologyFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogTechnologyAggregatedArgs = {
  filter: InputMaybe<TBlogTechnologyFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogTechnologyByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBlogTechnologyByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBlogTextArgs = {
  filter: InputMaybe<TBlogTextFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogTextAggregatedArgs = {
  filter: InputMaybe<TBlogTextFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogTextByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBlogTextByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBlogTitleArgs = {
  filter: InputMaybe<TBlogTitleFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogTitleAggregatedArgs = {
  filter: InputMaybe<TBlogTitleFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogTitleByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBlogTitleByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBlogVideoArgs = {
  filter: InputMaybe<TBlogVideoFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogVideoAggregatedArgs = {
  filter: InputMaybe<TBlogVideoFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBlogVideoByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBlogVideoByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBookArgs = {
  filter: InputMaybe<TBookFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBookAggregatedArgs = {
  filter: InputMaybe<TBookFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBookByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBookByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBookSeriesArgs = {
  filter: InputMaybe<TBookSeriesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBookSeriesAggregatedArgs = {
  filter: InputMaybe<TBookSeriesFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBookSeriesByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBookSeriesByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBookSeriesTranslationsArgs = {
  filter: InputMaybe<TBookSeriesTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBookSeriesTranslationsAggregatedArgs = {
  filter: InputMaybe<TBookSeriesTranslationsFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBookSeriesTranslationsByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBookSeriesTranslationsByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBookTranslationsArgs = {
  filter: InputMaybe<TBookTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBookTranslationsAggregatedArgs = {
  filter: InputMaybe<TBookTranslationsFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBookTranslationsByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBookTranslationsByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBookYearArgs = {
  filter: InputMaybe<TBookYearFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBookYearAggregatedArgs = {
  filter: InputMaybe<TBookYearFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBookYearByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBookYearByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBookYearTranslationsArgs = {
  filter: InputMaybe<TBookYearTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBookYearTranslationsAggregatedArgs = {
  filter: InputMaybe<TBookYearTranslationsFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBookYearTranslationsByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBookYearTranslationsByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryBookingArgs = {
  filter: InputMaybe<TBookingFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBookingAggregatedArgs = {
  filter: InputMaybe<TBookingFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryBookingByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryBookingByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryCountryArgs = {
  filter: InputMaybe<TCountryFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryCountryAggregatedArgs = {
  filter: InputMaybe<TCountryFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryCountryByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryCountryByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryCountryTranslationsArgs = {
  filter: InputMaybe<TCountryTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryCountryTranslationsAggregatedArgs = {
  filter: InputMaybe<TCountryTranslationsFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryCountryTranslationsByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryCountryTranslationsByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryLanguagesArgs = {
  filter: InputMaybe<TLanguagesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryLanguagesAggregatedArgs = {
  filter: InputMaybe<TLanguagesFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryLanguagesByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryLanguagesByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryNavigationArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryNavigationByVersionArgs = {
  version: Scalars['String']['input'];
};


export type TQueryNavigationItemArgs = {
  filter: InputMaybe<TNavigationItemFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryNavigationItemAggregatedArgs = {
  filter: InputMaybe<TNavigationItemFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryNavigationItemByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryNavigationItemByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryNavigationItemTranslationsArgs = {
  filter: InputMaybe<TNavigationItemTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryNavigationItemTranslationsAggregatedArgs = {
  filter: InputMaybe<TNavigationItemTranslationsFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryNavigationItemTranslationsByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryNavigationItemTranslationsByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryNavigationTranslationsArgs = {
  filter: InputMaybe<TNavigationTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryNavigationTranslationsAggregatedArgs = {
  filter: InputMaybe<TNavigationTranslationsFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryNavigationTranslationsByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryNavigationTranslationsByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryNotFoundArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryNotFoundByVersionArgs = {
  version: Scalars['String']['input'];
};


export type TQueryNotFoundTranslationsArgs = {
  filter: InputMaybe<TNotFoundTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryNotFoundTranslationsAggregatedArgs = {
  filter: InputMaybe<TNotFoundTranslationsFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryNotFoundTranslationsByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryNotFoundTranslationsByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryPlaceArgs = {
  filter: InputMaybe<TPlaceFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryPlaceAggregatedArgs = {
  filter: InputMaybe<TPlaceFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryPlaceByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryPlaceByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryPlaceTranslationsArgs = {
  filter: InputMaybe<TPlaceTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryPlaceTranslationsAggregatedArgs = {
  filter: InputMaybe<TPlaceTranslationsFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryPlaceTranslationsByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryPlaceTranslationsByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryProjectArgs = {
  filter: InputMaybe<TProjectFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryProjectAggregatedArgs = {
  filter: InputMaybe<TProjectFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryProjectByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryProjectByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryProjectDirectusFilesArgs = {
  filter: InputMaybe<TProjectDirectusFilesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryProjectDirectusFilesAggregatedArgs = {
  filter: InputMaybe<TProjectDirectusFilesFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryProjectDirectusFilesByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryProjectDirectusFilesByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryProjectTechnologyArgs = {
  filter: InputMaybe<TProjectTechnologyFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryProjectTechnologyAggregatedArgs = {
  filter: InputMaybe<TProjectTechnologyFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryProjectTechnologyByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryProjectTechnologyByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryProjectTranslationsArgs = {
  filter: InputMaybe<TProjectTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryProjectTranslationsAggregatedArgs = {
  filter: InputMaybe<TProjectTranslationsFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryProjectTranslationsByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryProjectTranslationsByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryReadingArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryReadingByVersionArgs = {
  version: Scalars['String']['input'];
};


export type TQuerySecretBlogArgs = {
  filter: InputMaybe<TSecretBlogFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQuerySecretBlogAggregatedArgs = {
  filter: InputMaybe<TSecretBlogFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQuerySecretBlogByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQuerySecretBlogByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQuerySecretBlogElementsArgs = {
  filter: InputMaybe<TSecretBlogElementsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQuerySecretBlogElementsAggregatedArgs = {
  filter: InputMaybe<TSecretBlogElementsFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQuerySecretBlogElementsByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQuerySecretBlogElementsByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQuerySecretBlogPlaceArgs = {
  filter: InputMaybe<TSecretBlogPlaceFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQuerySecretBlogPlaceAggregatedArgs = {
  filter: InputMaybe<TSecretBlogPlaceFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQuerySecretBlogPlaceByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQuerySecretBlogPlaceByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQuerySubscribersArgs = {
  filter: InputMaybe<TSubscribersFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQuerySubscribersAggregatedArgs = {
  filter: InputMaybe<TSubscribersFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQuerySubscribersByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQuerySubscribersByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryTechnologyArgs = {
  filter: InputMaybe<TTechnologyFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryTechnologyAggregatedArgs = {
  filter: InputMaybe<TTechnologyFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryTechnologyByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryTechnologyByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryTechnologyCategoryArgs = {
  filter: InputMaybe<TTechnologyCategoryFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryTechnologyCategoryAggregatedArgs = {
  filter: InputMaybe<TTechnologyCategoryFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryTechnologyCategoryByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryTechnologyCategoryByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryTechnologyCategoryTranslationsArgs = {
  filter: InputMaybe<TTechnologyCategoryTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryTechnologyCategoryTranslationsAggregatedArgs = {
  filter: InputMaybe<TTechnologyCategoryTranslationsFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryTechnologyCategoryTranslationsByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryTechnologyCategoryTranslationsByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryTechnologyTranslationsArgs = {
  filter: InputMaybe<TTechnologyTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryTechnologyTranslationsAggregatedArgs = {
  filter: InputMaybe<TTechnologyTranslationsFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryTechnologyTranslationsByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryTechnologyTranslationsByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryTransportationArgs = {
  filter: InputMaybe<TTransportationFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryTransportationAggregatedArgs = {
  filter: InputMaybe<TTransportationFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryTransportationByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryTransportationByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryTravelArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryTravelByVersionArgs = {
  version: Scalars['String']['input'];
};


export type TQueryWebsiteArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryWebsiteByVersionArgs = {
  version: Scalars['String']['input'];
};


export type TQueryWebsiteTranslationsArgs = {
  filter: InputMaybe<TWebsiteTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryWebsiteTranslationsAggregatedArgs = {
  filter: InputMaybe<TWebsiteTranslationsFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryWebsiteTranslationsByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryWebsiteTranslationsByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryWorkArgs = {
  filter: InputMaybe<TWorkFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryWorkAggregatedArgs = {
  filter: InputMaybe<TWorkFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryWorkByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryWorkByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type TQueryWorkProjectArgs = {
  filter: InputMaybe<TWorkProjectFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryWorkProjectAggregatedArgs = {
  filter: InputMaybe<TWorkProjectFilter>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TQueryWorkProjectByIdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type TQueryWorkProjectByVersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type TSubscription = {
  __typename?: 'Subscription';
  accommodation_mutated: Maybe<TAccommodationMutated>;
  author_book_mutated: Maybe<TAuthorBookMutated>;
  author_mutated: Maybe<TAuthorMutated>;
  blog_elements_mutated: Maybe<TBlogElementsMutated>;
  blog_image_mutated: Maybe<TBlogImageMutated>;
  blog_map_mutated: Maybe<TBlogMapMutated>;
  blog_mutated: Maybe<TBlogMutated>;
  blog_quote_mutated: Maybe<TBlogQuoteMutated>;
  blog_technology_mutated: Maybe<TBlogTechnologyMutated>;
  blog_text_mutated: Maybe<TBlogTextMutated>;
  blog_title_mutated: Maybe<TBlogTitleMutated>;
  blog_video_mutated: Maybe<TBlogVideoMutated>;
  book_mutated: Maybe<TBookMutated>;
  book_series_mutated: Maybe<TBookSeriesMutated>;
  book_series_translations_mutated: Maybe<TBookSeriesTranslationsMutated>;
  book_translations_mutated: Maybe<TBookTranslationsMutated>;
  book_year_mutated: Maybe<TBookYearMutated>;
  book_year_translations_mutated: Maybe<TBookYearTranslationsMutated>;
  booking_mutated: Maybe<TBookingMutated>;
  country_mutated: Maybe<TCountryMutated>;
  country_translations_mutated: Maybe<TCountryTranslationsMutated>;
  directus_files_mutated: Maybe<TDirectusFilesMutated>;
  directus_folders_mutated: Maybe<TDirectusFoldersMutated>;
  directus_roles_mutated: Maybe<TDirectusRolesMutated>;
  directus_settings_mutated: Maybe<TDirectusSettingsMutated>;
  directus_users_mutated: Maybe<TDirectusUsersMutated>;
  languages_mutated: Maybe<TLanguagesMutated>;
  navigation_item_mutated: Maybe<TNavigationItemMutated>;
  navigation_item_translations_mutated: Maybe<TNavigationItemTranslationsMutated>;
  navigation_mutated: Maybe<TNavigationMutated>;
  navigation_translations_mutated: Maybe<TNavigationTranslationsMutated>;
  not_found_mutated: Maybe<TNotFoundMutated>;
  not_found_translations_mutated: Maybe<TNotFoundTranslationsMutated>;
  place_mutated: Maybe<TPlaceMutated>;
  place_translations_mutated: Maybe<TPlaceTranslationsMutated>;
  project_directus_files_mutated: Maybe<TProjectDirectusFilesMutated>;
  project_mutated: Maybe<TProjectMutated>;
  project_technology_mutated: Maybe<TProjectTechnologyMutated>;
  project_translations_mutated: Maybe<TProjectTranslationsMutated>;
  reading_mutated: Maybe<TReadingMutated>;
  secret_blog_elements_mutated: Maybe<TSecretBlogElementsMutated>;
  secret_blog_mutated: Maybe<TSecretBlogMutated>;
  secret_blog_place_mutated: Maybe<TSecretBlogPlaceMutated>;
  subscribers_mutated: Maybe<TSubscribersMutated>;
  technology_category_mutated: Maybe<TTechnologyCategoryMutated>;
  technology_category_translations_mutated: Maybe<TTechnologyCategoryTranslationsMutated>;
  technology_mutated: Maybe<TTechnologyMutated>;
  technology_translations_mutated: Maybe<TTechnologyTranslationsMutated>;
  transportation_mutated: Maybe<TTransportationMutated>;
  travel_mutated: Maybe<TTravelMutated>;
  website_mutated: Maybe<TWebsiteMutated>;
  website_translations_mutated: Maybe<TWebsiteTranslationsMutated>;
  work_mutated: Maybe<TWorkMutated>;
  work_project_mutated: Maybe<TWorkProjectMutated>;
};


export type TSubscriptionAccommodationMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionAuthorBookMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionAuthorMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBlogElementsMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBlogImageMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBlogMapMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBlogMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBlogQuoteMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBlogTechnologyMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBlogTextMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBlogTitleMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBlogVideoMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBookMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBookSeriesMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBookSeriesTranslationsMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBookTranslationsMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBookYearMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBookYearTranslationsMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionBookingMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionCountryMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionCountryTranslationsMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionDirectusFilesMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionDirectusFoldersMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionDirectusRolesMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionDirectusSettingsMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionDirectusUsersMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionLanguagesMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionNavigationItemMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionNavigationItemTranslationsMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionNavigationMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionNavigationTranslationsMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionNotFoundMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionNotFoundTranslationsMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionPlaceMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionPlaceTranslationsMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionProjectDirectusFilesMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionProjectMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionProjectTechnologyMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionProjectTranslationsMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionReadingMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionSecretBlogElementsMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionSecretBlogMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionSecretBlogPlaceMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionSubscribersMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionTechnologyCategoryMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionTechnologyCategoryTranslationsMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionTechnologyMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionTechnologyTranslationsMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionTransportationMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionTravelMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionWebsiteMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionWebsiteTranslationsMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionWorkMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};


export type TSubscriptionWorkProjectMutatedArgs = {
  event: InputMaybe<TEventEnum>;
};

export type TAccommodation = {
  __typename?: 'accommodation';
  bookings: Maybe<Array<Maybe<TBooking>>>;
  bookings_func: Maybe<TCountFunctions>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  place: Maybe<TPlace>;
};


export type TAccommodationBookingsArgs = {
  filter: InputMaybe<TBookingFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TAccommodationPlaceArgs = {
  filter: InputMaybe<TPlaceFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TAccommodationAggregated = {
  __typename?: 'accommodation_aggregated';
  avg: Maybe<TAccommodationAggregatedFields>;
  avgDistinct: Maybe<TAccommodationAggregatedFields>;
  count: Maybe<TAccommodationAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TAccommodationAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TAccommodationAggregatedFields>;
  min: Maybe<TAccommodationAggregatedFields>;
  sum: Maybe<TAccommodationAggregatedFields>;
  sumDistinct: Maybe<TAccommodationAggregatedFields>;
};

export type TAccommodationAggregatedCount = {
  __typename?: 'accommodation_aggregated_count';
  bookings: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['Int']['output']>;
  place: Maybe<Scalars['Int']['output']>;
};

export type TAccommodationAggregatedFields = {
  __typename?: 'accommodation_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  place: Maybe<Scalars['Float']['output']>;
};

export type TAccommodationFilter = {
  _and: InputMaybe<Array<InputMaybe<TAccommodationFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TAccommodationFilter>>>;
  bookings: InputMaybe<TBookingFilter>;
  bookings_func: InputMaybe<TCountFunctionFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  name: InputMaybe<TStringFilterOperators>;
  place: InputMaybe<TPlaceFilter>;
};

export type TAccommodationMutated = {
  __typename?: 'accommodation_mutated';
  data: Maybe<TAccommodation>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TAuthor = {
  __typename?: 'author';
  books: Maybe<Array<Maybe<TAuthorBook>>>;
  books_func: Maybe<TCountFunctions>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
};


export type TAuthorBooksArgs = {
  filter: InputMaybe<TAuthorBookFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TAuthorAggregated = {
  __typename?: 'author_aggregated';
  avg: Maybe<TAuthorAggregatedFields>;
  avgDistinct: Maybe<TAuthorAggregatedFields>;
  count: Maybe<TAuthorAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TAuthorAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TAuthorAggregatedFields>;
  min: Maybe<TAuthorAggregatedFields>;
  sum: Maybe<TAuthorAggregatedFields>;
  sumDistinct: Maybe<TAuthorAggregatedFields>;
};

export type TAuthorAggregatedCount = {
  __typename?: 'author_aggregated_count';
  books: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['Int']['output']>;
};

export type TAuthorAggregatedFields = {
  __typename?: 'author_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type TAuthorBook = {
  __typename?: 'author_book';
  author_id: Maybe<TAuthor>;
  book_id: Maybe<TBook>;
  id: Scalars['ID']['output'];
};


export type TAuthorBookAuthorIdArgs = {
  filter: InputMaybe<TAuthorFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TAuthorBookBookIdArgs = {
  filter: InputMaybe<TBookFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TAuthorBookAggregated = {
  __typename?: 'author_book_aggregated';
  avg: Maybe<TAuthorBookAggregatedFields>;
  avgDistinct: Maybe<TAuthorBookAggregatedFields>;
  count: Maybe<TAuthorBookAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TAuthorBookAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TAuthorBookAggregatedFields>;
  min: Maybe<TAuthorBookAggregatedFields>;
  sum: Maybe<TAuthorBookAggregatedFields>;
  sumDistinct: Maybe<TAuthorBookAggregatedFields>;
};

export type TAuthorBookAggregatedCount = {
  __typename?: 'author_book_aggregated_count';
  author_id: Maybe<Scalars['Int']['output']>;
  book_id: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
};

export type TAuthorBookAggregatedFields = {
  __typename?: 'author_book_aggregated_fields';
  author_id: Maybe<Scalars['Float']['output']>;
  book_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
};

export type TAuthorBookFilter = {
  _and: InputMaybe<Array<InputMaybe<TAuthorBookFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TAuthorBookFilter>>>;
  author_id: InputMaybe<TAuthorFilter>;
  book_id: InputMaybe<TBookFilter>;
  id: InputMaybe<TNumberFilterOperators>;
};

export type TAuthorBookMutated = {
  __typename?: 'author_book_mutated';
  data: Maybe<TAuthorBook>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TAuthorFilter = {
  _and: InputMaybe<Array<InputMaybe<TAuthorFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TAuthorFilter>>>;
  books: InputMaybe<TAuthorBookFilter>;
  books_func: InputMaybe<TCountFunctionFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  name: InputMaybe<TStringFilterOperators>;
};

export type TAuthorMutated = {
  __typename?: 'author_mutated';
  data: Maybe<TAuthor>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBigIntFilterOperators = {
  _between: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _eq: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gt: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gte: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _in: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _lt: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _lte: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nbetween: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _neq: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nin: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _nnull: InputMaybe<Scalars['Boolean']['input']>;
  _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type TBlog = {
  __typename?: 'blog';
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<TDateFunctions>;
  elements: Maybe<Array<Maybe<TBlogElements>>>;
  elements_func: Maybe<TCountFunctions>;
  id: Scalars['ID']['output'];
  slug: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  teaser_text: Maybe<Scalars['String']['output']>;
  technology: Maybe<Array<Maybe<TBlogTechnology>>>;
  technology_func: Maybe<TCountFunctions>;
  title: Maybe<Scalars['String']['output']>;
};


export type TBlogElementsArgs = {
  filter: InputMaybe<TBlogElementsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TBlogTechnologyArgs = {
  filter: InputMaybe<TBlogTechnologyFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TBlogAggregated = {
  __typename?: 'blog_aggregated';
  avg: Maybe<TBlogAggregatedFields>;
  avgDistinct: Maybe<TBlogAggregatedFields>;
  count: Maybe<TBlogAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBlogAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBlogAggregatedFields>;
  min: Maybe<TBlogAggregatedFields>;
  sum: Maybe<TBlogAggregatedFields>;
  sumDistinct: Maybe<TBlogAggregatedFields>;
};

export type TBlogAggregatedCount = {
  __typename?: 'blog_aggregated_count';
  date_created: Maybe<Scalars['Int']['output']>;
  elements: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  slug: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['Int']['output']>;
  teaser_text: Maybe<Scalars['Int']['output']>;
  technology: Maybe<Scalars['Int']['output']>;
  title: Maybe<Scalars['Int']['output']>;
};

export type TBlogAggregatedFields = {
  __typename?: 'blog_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type TBlogElements = {
  __typename?: 'blog_elements';
  blog_id: Maybe<TBlog>;
  collection: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item: Maybe<TBlogElementsItemUnion>;
  sort: Maybe<Scalars['Int']['output']>;
};


export type TBlogElementsBlogIdArgs = {
  filter: InputMaybe<TBlogFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TBlogElementsAggregated = {
  __typename?: 'blog_elements_aggregated';
  avg: Maybe<TBlogElementsAggregatedFields>;
  avgDistinct: Maybe<TBlogElementsAggregatedFields>;
  count: Maybe<TBlogElementsAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBlogElementsAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBlogElementsAggregatedFields>;
  min: Maybe<TBlogElementsAggregatedFields>;
  sum: Maybe<TBlogElementsAggregatedFields>;
  sumDistinct: Maybe<TBlogElementsAggregatedFields>;
};

export type TBlogElementsAggregatedCount = {
  __typename?: 'blog_elements_aggregated_count';
  blog_id: Maybe<Scalars['Int']['output']>;
  collection: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  item: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
};

export type TBlogElementsAggregatedFields = {
  __typename?: 'blog_elements_aggregated_fields';
  blog_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  sort: Maybe<Scalars['Float']['output']>;
};

export type TBlogElementsFilter = {
  _and: InputMaybe<Array<InputMaybe<TBlogElementsFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBlogElementsFilter>>>;
  blog_id: InputMaybe<TBlogFilter>;
  collection: InputMaybe<TStringFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  item__blog_image: InputMaybe<TBlogImageFilter>;
  item__blog_map: InputMaybe<TBlogMapFilter>;
  item__blog_quote: InputMaybe<TBlogQuoteFilter>;
  item__blog_text: InputMaybe<TBlogTextFilter>;
  item__blog_title: InputMaybe<TBlogTitleFilter>;
  item__blog_video: InputMaybe<TBlogVideoFilter>;
  sort: InputMaybe<TNumberFilterOperators>;
};

export type TBlogElementsItemUnion = TBlogImage | TBlogMap | TBlogQuote | TBlogText | TBlogTitle | TBlogVideo;

export type TBlogElementsMutated = {
  __typename?: 'blog_elements_mutated';
  data: Maybe<TBlogElements>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBlogFilter = {
  _and: InputMaybe<Array<InputMaybe<TBlogFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBlogFilter>>>;
  date_created: InputMaybe<TDateFilterOperators>;
  date_created_func: InputMaybe<TDateFunctionFilterOperators>;
  elements: InputMaybe<TBlogElementsFilter>;
  elements_func: InputMaybe<TCountFunctionFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  slug: InputMaybe<TStringFilterOperators>;
  status: InputMaybe<TStringFilterOperators>;
  teaser_text: InputMaybe<TStringFilterOperators>;
  technology: InputMaybe<TBlogTechnologyFilter>;
  technology_func: InputMaybe<TCountFunctionFilterOperators>;
  title: InputMaybe<TStringFilterOperators>;
};

export type TBlogImage = {
  __typename?: 'blog_image';
  caption: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Maybe<TDirectusFiles>;
  invert: Maybe<Scalars['Boolean']['output']>;
};


export type TBlogImageImageArgs = {
  filter: InputMaybe<TDirectusFilesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TBlogImageAggregated = {
  __typename?: 'blog_image_aggregated';
  avg: Maybe<TBlogImageAggregatedFields>;
  avgDistinct: Maybe<TBlogImageAggregatedFields>;
  count: Maybe<TBlogImageAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBlogImageAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBlogImageAggregatedFields>;
  min: Maybe<TBlogImageAggregatedFields>;
  sum: Maybe<TBlogImageAggregatedFields>;
  sumDistinct: Maybe<TBlogImageAggregatedFields>;
};

export type TBlogImageAggregatedCount = {
  __typename?: 'blog_image_aggregated_count';
  caption: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  image: Maybe<Scalars['Int']['output']>;
  invert: Maybe<Scalars['Int']['output']>;
};

export type TBlogImageAggregatedFields = {
  __typename?: 'blog_image_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type TBlogImageFilter = {
  _and: InputMaybe<Array<InputMaybe<TBlogImageFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBlogImageFilter>>>;
  caption: InputMaybe<TStringFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  image: InputMaybe<TDirectusFilesFilter>;
  invert: InputMaybe<TBooleanFilterOperators>;
};

export type TBlogImageMutated = {
  __typename?: 'blog_image_mutated';
  data: Maybe<TBlogImage>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBlogMap = {
  __typename?: 'blog_map';
  id: Scalars['ID']['output'];
};

export type TBlogMapAggregated = {
  __typename?: 'blog_map_aggregated';
  avg: Maybe<TBlogMapAggregatedFields>;
  avgDistinct: Maybe<TBlogMapAggregatedFields>;
  count: Maybe<TBlogMapAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBlogMapAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBlogMapAggregatedFields>;
  min: Maybe<TBlogMapAggregatedFields>;
  sum: Maybe<TBlogMapAggregatedFields>;
  sumDistinct: Maybe<TBlogMapAggregatedFields>;
};

export type TBlogMapAggregatedCount = {
  __typename?: 'blog_map_aggregated_count';
  id: Maybe<Scalars['Int']['output']>;
};

export type TBlogMapAggregatedFields = {
  __typename?: 'blog_map_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type TBlogMapFilter = {
  _and: InputMaybe<Array<InputMaybe<TBlogMapFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBlogMapFilter>>>;
  id: InputMaybe<TNumberFilterOperators>;
};

export type TBlogMapMutated = {
  __typename?: 'blog_map_mutated';
  data: Maybe<TBlogMap>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBlogMutated = {
  __typename?: 'blog_mutated';
  data: Maybe<TBlog>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBlogQuote = {
  __typename?: 'blog_quote';
  author: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  text: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type TBlogQuoteAggregated = {
  __typename?: 'blog_quote_aggregated';
  avg: Maybe<TBlogQuoteAggregatedFields>;
  avgDistinct: Maybe<TBlogQuoteAggregatedFields>;
  count: Maybe<TBlogQuoteAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBlogQuoteAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBlogQuoteAggregatedFields>;
  min: Maybe<TBlogQuoteAggregatedFields>;
  sum: Maybe<TBlogQuoteAggregatedFields>;
  sumDistinct: Maybe<TBlogQuoteAggregatedFields>;
};

export type TBlogQuoteAggregatedCount = {
  __typename?: 'blog_quote_aggregated_count';
  author: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  text: Maybe<Scalars['Int']['output']>;
  url: Maybe<Scalars['Int']['output']>;
};

export type TBlogQuoteAggregatedFields = {
  __typename?: 'blog_quote_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type TBlogQuoteFilter = {
  _and: InputMaybe<Array<InputMaybe<TBlogQuoteFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBlogQuoteFilter>>>;
  author: InputMaybe<TStringFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  text: InputMaybe<TStringFilterOperators>;
  url: InputMaybe<TStringFilterOperators>;
};

export type TBlogQuoteMutated = {
  __typename?: 'blog_quote_mutated';
  data: Maybe<TBlogQuote>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBlogTechnology = {
  __typename?: 'blog_technology';
  blog_id: Maybe<TBlog>;
  id: Scalars['ID']['output'];
  sort: Maybe<Scalars['Int']['output']>;
  technology_id: Maybe<TTechnology>;
};


export type TBlogTechnologyBlogIdArgs = {
  filter: InputMaybe<TBlogFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TBlogTechnologyTechnologyIdArgs = {
  filter: InputMaybe<TTechnologyFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TBlogTechnologyAggregated = {
  __typename?: 'blog_technology_aggregated';
  avg: Maybe<TBlogTechnologyAggregatedFields>;
  avgDistinct: Maybe<TBlogTechnologyAggregatedFields>;
  count: Maybe<TBlogTechnologyAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBlogTechnologyAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBlogTechnologyAggregatedFields>;
  min: Maybe<TBlogTechnologyAggregatedFields>;
  sum: Maybe<TBlogTechnologyAggregatedFields>;
  sumDistinct: Maybe<TBlogTechnologyAggregatedFields>;
};

export type TBlogTechnologyAggregatedCount = {
  __typename?: 'blog_technology_aggregated_count';
  blog_id: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  technology_id: Maybe<Scalars['Int']['output']>;
};

export type TBlogTechnologyAggregatedFields = {
  __typename?: 'blog_technology_aggregated_fields';
  blog_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  sort: Maybe<Scalars['Float']['output']>;
  technology_id: Maybe<Scalars['Float']['output']>;
};

export type TBlogTechnologyFilter = {
  _and: InputMaybe<Array<InputMaybe<TBlogTechnologyFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBlogTechnologyFilter>>>;
  blog_id: InputMaybe<TBlogFilter>;
  id: InputMaybe<TNumberFilterOperators>;
  sort: InputMaybe<TNumberFilterOperators>;
  technology_id: InputMaybe<TTechnologyFilter>;
};

export type TBlogTechnologyMutated = {
  __typename?: 'blog_technology_mutated';
  data: Maybe<TBlogTechnology>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBlogText = {
  __typename?: 'blog_text';
  id: Scalars['ID']['output'];
  text: Maybe<Scalars['String']['output']>;
  word_count: Maybe<Scalars['String']['output']>;
};

export type TBlogTextAggregated = {
  __typename?: 'blog_text_aggregated';
  avg: Maybe<TBlogTextAggregatedFields>;
  avgDistinct: Maybe<TBlogTextAggregatedFields>;
  count: Maybe<TBlogTextAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBlogTextAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBlogTextAggregatedFields>;
  min: Maybe<TBlogTextAggregatedFields>;
  sum: Maybe<TBlogTextAggregatedFields>;
  sumDistinct: Maybe<TBlogTextAggregatedFields>;
};

export type TBlogTextAggregatedCount = {
  __typename?: 'blog_text_aggregated_count';
  id: Maybe<Scalars['Int']['output']>;
  text: Maybe<Scalars['Int']['output']>;
  word_count: Maybe<Scalars['Int']['output']>;
};

export type TBlogTextAggregatedFields = {
  __typename?: 'blog_text_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type TBlogTextFilter = {
  _and: InputMaybe<Array<InputMaybe<TBlogTextFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBlogTextFilter>>>;
  id: InputMaybe<TNumberFilterOperators>;
  text: InputMaybe<TStringFilterOperators>;
  word_count: InputMaybe<TStringFilterOperators>;
};

export type TBlogTextMutated = {
  __typename?: 'blog_text_mutated';
  data: Maybe<TBlogText>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBlogTitle = {
  __typename?: 'blog_title';
  id: Scalars['ID']['output'];
  level: Maybe<Scalars['String']['output']>;
  tag: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type TBlogTitleAggregated = {
  __typename?: 'blog_title_aggregated';
  avg: Maybe<TBlogTitleAggregatedFields>;
  avgDistinct: Maybe<TBlogTitleAggregatedFields>;
  count: Maybe<TBlogTitleAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBlogTitleAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBlogTitleAggregatedFields>;
  min: Maybe<TBlogTitleAggregatedFields>;
  sum: Maybe<TBlogTitleAggregatedFields>;
  sumDistinct: Maybe<TBlogTitleAggregatedFields>;
};

export type TBlogTitleAggregatedCount = {
  __typename?: 'blog_title_aggregated_count';
  id: Maybe<Scalars['Int']['output']>;
  level: Maybe<Scalars['Int']['output']>;
  tag: Maybe<Scalars['Int']['output']>;
  title: Maybe<Scalars['Int']['output']>;
};

export type TBlogTitleAggregatedFields = {
  __typename?: 'blog_title_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type TBlogTitleFilter = {
  _and: InputMaybe<Array<InputMaybe<TBlogTitleFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBlogTitleFilter>>>;
  id: InputMaybe<TNumberFilterOperators>;
  level: InputMaybe<TStringFilterOperators>;
  tag: InputMaybe<TStringFilterOperators>;
  title: InputMaybe<TStringFilterOperators>;
};

export type TBlogTitleMutated = {
  __typename?: 'blog_title_mutated';
  data: Maybe<TBlogTitle>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBlogVideo = {
  __typename?: 'blog_video';
  id: Scalars['ID']['output'];
  url: Maybe<Scalars['String']['output']>;
};

export type TBlogVideoAggregated = {
  __typename?: 'blog_video_aggregated';
  avg: Maybe<TBlogVideoAggregatedFields>;
  avgDistinct: Maybe<TBlogVideoAggregatedFields>;
  count: Maybe<TBlogVideoAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBlogVideoAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBlogVideoAggregatedFields>;
  min: Maybe<TBlogVideoAggregatedFields>;
  sum: Maybe<TBlogVideoAggregatedFields>;
  sumDistinct: Maybe<TBlogVideoAggregatedFields>;
};

export type TBlogVideoAggregatedCount = {
  __typename?: 'blog_video_aggregated_count';
  id: Maybe<Scalars['Int']['output']>;
  url: Maybe<Scalars['Int']['output']>;
};

export type TBlogVideoAggregatedFields = {
  __typename?: 'blog_video_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type TBlogVideoFilter = {
  _and: InputMaybe<Array<InputMaybe<TBlogVideoFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBlogVideoFilter>>>;
  id: InputMaybe<TNumberFilterOperators>;
  url: InputMaybe<TStringFilterOperators>;
};

export type TBlogVideoMutated = {
  __typename?: 'blog_video_mutated';
  data: Maybe<TBlogVideo>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBook = {
  __typename?: 'book';
  authors: Maybe<Array<Maybe<TAuthorBook>>>;
  authors_func: Maybe<TCountFunctions>;
  book_series: Maybe<TBookSeries>;
  category: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Maybe<Scalars['String']['output']>;
  language: Maybe<Scalars['String']['output']>;
  number_in_series: Maybe<Scalars['Int']['output']>;
  number_in_year: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Scalars['Int']['output']>;
  positions: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Array<Maybe<TBookTranslations>>>;
  translations_func: Maybe<TCountFunctions>;
  words: Maybe<Scalars['Int']['output']>;
  year: Maybe<TBookYear>;
  year_published: Maybe<Scalars['String']['output']>;
};


export type TBookAuthorsArgs = {
  filter: InputMaybe<TAuthorBookFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TBookBookSeriesArgs = {
  filter: InputMaybe<TBookSeriesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TBookTranslationsArgs = {
  filter: InputMaybe<TBookTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TBookYearArgs = {
  filter: InputMaybe<TBookYearFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TBookAggregated = {
  __typename?: 'book_aggregated';
  avg: Maybe<TBookAggregatedFields>;
  avgDistinct: Maybe<TBookAggregatedFields>;
  count: Maybe<TBookAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBookAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBookAggregatedFields>;
  min: Maybe<TBookAggregatedFields>;
  sum: Maybe<TBookAggregatedFields>;
  sumDistinct: Maybe<TBookAggregatedFields>;
};

export type TBookAggregatedCount = {
  __typename?: 'book_aggregated_count';
  authors: Maybe<Scalars['Int']['output']>;
  book_series: Maybe<Scalars['Int']['output']>;
  category: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  internal: Maybe<Scalars['Int']['output']>;
  language: Maybe<Scalars['Int']['output']>;
  number_in_series: Maybe<Scalars['Int']['output']>;
  number_in_year: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Scalars['Int']['output']>;
  positions: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Scalars['Int']['output']>;
  words: Maybe<Scalars['Int']['output']>;
  year: Maybe<Scalars['Int']['output']>;
  year_published: Maybe<Scalars['Int']['output']>;
};

export type TBookAggregatedFields = {
  __typename?: 'book_aggregated_fields';
  book_series: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  number_in_series: Maybe<Scalars['Float']['output']>;
  number_in_year: Maybe<Scalars['Float']['output']>;
  pages: Maybe<Scalars['Float']['output']>;
  positions: Maybe<Scalars['Float']['output']>;
  words: Maybe<Scalars['Float']['output']>;
  year: Maybe<Scalars['Float']['output']>;
};

export type TBookFilter = {
  _and: InputMaybe<Array<InputMaybe<TBookFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBookFilter>>>;
  authors: InputMaybe<TAuthorBookFilter>;
  authors_func: InputMaybe<TCountFunctionFilterOperators>;
  book_series: InputMaybe<TBookSeriesFilter>;
  category: InputMaybe<TStringFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  internal: InputMaybe<TStringFilterOperators>;
  language: InputMaybe<TStringFilterOperators>;
  number_in_series: InputMaybe<TNumberFilterOperators>;
  number_in_year: InputMaybe<TNumberFilterOperators>;
  pages: InputMaybe<TNumberFilterOperators>;
  positions: InputMaybe<TNumberFilterOperators>;
  translations: InputMaybe<TBookTranslationsFilter>;
  translations_func: InputMaybe<TCountFunctionFilterOperators>;
  words: InputMaybe<TNumberFilterOperators>;
  year: InputMaybe<TBookYearFilter>;
  year_published: InputMaybe<TStringFilterOperators>;
};

export type TBookMutated = {
  __typename?: 'book_mutated';
  data: Maybe<TBook>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBookSeries = {
  __typename?: 'book_series';
  books: Maybe<Array<Maybe<TBook>>>;
  books_func: Maybe<TCountFunctions>;
  id: Scalars['ID']['output'];
  internal: Maybe<Scalars['String']['output']>;
  translations: Maybe<Array<Maybe<TBookSeriesTranslations>>>;
  translations_func: Maybe<TCountFunctions>;
};


export type TBookSeriesBooksArgs = {
  filter: InputMaybe<TBookFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TBookSeriesTranslationsArgs = {
  filter: InputMaybe<TBookSeriesTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TBookSeriesAggregated = {
  __typename?: 'book_series_aggregated';
  avg: Maybe<TBookSeriesAggregatedFields>;
  avgDistinct: Maybe<TBookSeriesAggregatedFields>;
  count: Maybe<TBookSeriesAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBookSeriesAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBookSeriesAggregatedFields>;
  min: Maybe<TBookSeriesAggregatedFields>;
  sum: Maybe<TBookSeriesAggregatedFields>;
  sumDistinct: Maybe<TBookSeriesAggregatedFields>;
};

export type TBookSeriesAggregatedCount = {
  __typename?: 'book_series_aggregated_count';
  books: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  internal: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Scalars['Int']['output']>;
};

export type TBookSeriesAggregatedFields = {
  __typename?: 'book_series_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type TBookSeriesFilter = {
  _and: InputMaybe<Array<InputMaybe<TBookSeriesFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBookSeriesFilter>>>;
  books: InputMaybe<TBookFilter>;
  books_func: InputMaybe<TCountFunctionFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  internal: InputMaybe<TStringFilterOperators>;
  translations: InputMaybe<TBookSeriesTranslationsFilter>;
  translations_func: InputMaybe<TCountFunctionFilterOperators>;
};

export type TBookSeriesMutated = {
  __typename?: 'book_series_mutated';
  data: Maybe<TBookSeries>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBookSeriesTranslations = {
  __typename?: 'book_series_translations';
  book_series_id: Maybe<TBookSeries>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<TLanguages>;
  title: Maybe<Scalars['String']['output']>;
};


export type TBookSeriesTranslationsBookSeriesIdArgs = {
  filter: InputMaybe<TBookSeriesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TBookSeriesTranslationsLanguagesCodeArgs = {
  filter: InputMaybe<TLanguagesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TBookSeriesTranslationsAggregated = {
  __typename?: 'book_series_translations_aggregated';
  avg: Maybe<TBookSeriesTranslationsAggregatedFields>;
  avgDistinct: Maybe<TBookSeriesTranslationsAggregatedFields>;
  count: Maybe<TBookSeriesTranslationsAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBookSeriesTranslationsAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBookSeriesTranslationsAggregatedFields>;
  min: Maybe<TBookSeriesTranslationsAggregatedFields>;
  sum: Maybe<TBookSeriesTranslationsAggregatedFields>;
  sumDistinct: Maybe<TBookSeriesTranslationsAggregatedFields>;
};

export type TBookSeriesTranslationsAggregatedCount = {
  __typename?: 'book_series_translations_aggregated_count';
  book_series_id: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  languages_code: Maybe<Scalars['Int']['output']>;
  title: Maybe<Scalars['Int']['output']>;
};

export type TBookSeriesTranslationsAggregatedFields = {
  __typename?: 'book_series_translations_aggregated_fields';
  book_series_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
};

export type TBookSeriesTranslationsFilter = {
  _and: InputMaybe<Array<InputMaybe<TBookSeriesTranslationsFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBookSeriesTranslationsFilter>>>;
  book_series_id: InputMaybe<TBookSeriesFilter>;
  id: InputMaybe<TNumberFilterOperators>;
  languages_code: InputMaybe<TLanguagesFilter>;
  title: InputMaybe<TStringFilterOperators>;
};

export type TBookSeriesTranslationsMutated = {
  __typename?: 'book_series_translations_mutated';
  data: Maybe<TBookSeriesTranslations>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBookTranslations = {
  __typename?: 'book_translations';
  book_id: Maybe<TBook>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<TLanguages>;
  title: Maybe<Scalars['String']['output']>;
};


export type TBookTranslationsBookIdArgs = {
  filter: InputMaybe<TBookFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TBookTranslationsLanguagesCodeArgs = {
  filter: InputMaybe<TLanguagesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TBookTranslationsAggregated = {
  __typename?: 'book_translations_aggregated';
  avg: Maybe<TBookTranslationsAggregatedFields>;
  avgDistinct: Maybe<TBookTranslationsAggregatedFields>;
  count: Maybe<TBookTranslationsAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBookTranslationsAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBookTranslationsAggregatedFields>;
  min: Maybe<TBookTranslationsAggregatedFields>;
  sum: Maybe<TBookTranslationsAggregatedFields>;
  sumDistinct: Maybe<TBookTranslationsAggregatedFields>;
};

export type TBookTranslationsAggregatedCount = {
  __typename?: 'book_translations_aggregated_count';
  book_id: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  languages_code: Maybe<Scalars['Int']['output']>;
  title: Maybe<Scalars['Int']['output']>;
};

export type TBookTranslationsAggregatedFields = {
  __typename?: 'book_translations_aggregated_fields';
  book_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
};

export type TBookTranslationsFilter = {
  _and: InputMaybe<Array<InputMaybe<TBookTranslationsFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBookTranslationsFilter>>>;
  book_id: InputMaybe<TBookFilter>;
  id: InputMaybe<TNumberFilterOperators>;
  languages_code: InputMaybe<TLanguagesFilter>;
  title: InputMaybe<TStringFilterOperators>;
};

export type TBookTranslationsMutated = {
  __typename?: 'book_translations_mutated';
  data: Maybe<TBookTranslations>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBookYear = {
  __typename?: 'book_year';
  books: Maybe<Array<Maybe<TBook>>>;
  books_func: Maybe<TCountFunctions>;
  id: Scalars['ID']['output'];
  internal: Maybe<Scalars['String']['output']>;
  translations: Maybe<Array<Maybe<TBookYearTranslations>>>;
  translations_func: Maybe<TCountFunctions>;
};


export type TBookYearBooksArgs = {
  filter: InputMaybe<TBookFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TBookYearTranslationsArgs = {
  filter: InputMaybe<TBookYearTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TBookYearAggregated = {
  __typename?: 'book_year_aggregated';
  avg: Maybe<TBookYearAggregatedFields>;
  avgDistinct: Maybe<TBookYearAggregatedFields>;
  count: Maybe<TBookYearAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBookYearAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBookYearAggregatedFields>;
  min: Maybe<TBookYearAggregatedFields>;
  sum: Maybe<TBookYearAggregatedFields>;
  sumDistinct: Maybe<TBookYearAggregatedFields>;
};

export type TBookYearAggregatedCount = {
  __typename?: 'book_year_aggregated_count';
  books: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  internal: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Scalars['Int']['output']>;
};

export type TBookYearAggregatedFields = {
  __typename?: 'book_year_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type TBookYearFilter = {
  _and: InputMaybe<Array<InputMaybe<TBookYearFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBookYearFilter>>>;
  books: InputMaybe<TBookFilter>;
  books_func: InputMaybe<TCountFunctionFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  internal: InputMaybe<TStringFilterOperators>;
  translations: InputMaybe<TBookYearTranslationsFilter>;
  translations_func: InputMaybe<TCountFunctionFilterOperators>;
};

export type TBookYearMutated = {
  __typename?: 'book_year_mutated';
  data: Maybe<TBookYear>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBookYearTranslations = {
  __typename?: 'book_year_translations';
  book_year_id: Maybe<TBookYear>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<TLanguages>;
  name: Maybe<Scalars['String']['output']>;
};


export type TBookYearTranslationsBookYearIdArgs = {
  filter: InputMaybe<TBookYearFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TBookYearTranslationsLanguagesCodeArgs = {
  filter: InputMaybe<TLanguagesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TBookYearTranslationsAggregated = {
  __typename?: 'book_year_translations_aggregated';
  avg: Maybe<TBookYearTranslationsAggregatedFields>;
  avgDistinct: Maybe<TBookYearTranslationsAggregatedFields>;
  count: Maybe<TBookYearTranslationsAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBookYearTranslationsAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBookYearTranslationsAggregatedFields>;
  min: Maybe<TBookYearTranslationsAggregatedFields>;
  sum: Maybe<TBookYearTranslationsAggregatedFields>;
  sumDistinct: Maybe<TBookYearTranslationsAggregatedFields>;
};

export type TBookYearTranslationsAggregatedCount = {
  __typename?: 'book_year_translations_aggregated_count';
  book_year_id: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  languages_code: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['Int']['output']>;
};

export type TBookYearTranslationsAggregatedFields = {
  __typename?: 'book_year_translations_aggregated_fields';
  book_year_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
};

export type TBookYearTranslationsFilter = {
  _and: InputMaybe<Array<InputMaybe<TBookYearTranslationsFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBookYearTranslationsFilter>>>;
  book_year_id: InputMaybe<TBookYearFilter>;
  id: InputMaybe<TNumberFilterOperators>;
  languages_code: InputMaybe<TLanguagesFilter>;
  name: InputMaybe<TStringFilterOperators>;
};

export type TBookYearTranslationsMutated = {
  __typename?: 'book_year_translations_mutated';
  data: Maybe<TBookYearTranslations>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBooking = {
  __typename?: 'booking';
  accommodation: Maybe<TAccommodation>;
  arrival: Maybe<Scalars['Date']['output']>;
  arrival_func: Maybe<TDatetimeFunctions>;
  booking: Maybe<Scalars['String']['output']>;
  departure: Maybe<Scalars['Date']['output']>;
  departure_func: Maybe<TDatetimeFunctions>;
  id: Scalars['ID']['output'];
  price_per_night: Maybe<Scalars['Float']['output']>;
  type: Maybe<Scalars['String']['output']>;
};


export type TBookingAccommodationArgs = {
  filter: InputMaybe<TAccommodationFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TBookingAggregated = {
  __typename?: 'booking_aggregated';
  avg: Maybe<TBookingAggregatedFields>;
  avgDistinct: Maybe<TBookingAggregatedFields>;
  count: Maybe<TBookingAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TBookingAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TBookingAggregatedFields>;
  min: Maybe<TBookingAggregatedFields>;
  sum: Maybe<TBookingAggregatedFields>;
  sumDistinct: Maybe<TBookingAggregatedFields>;
};

export type TBookingAggregatedCount = {
  __typename?: 'booking_aggregated_count';
  accommodation: Maybe<Scalars['Int']['output']>;
  arrival: Maybe<Scalars['Int']['output']>;
  booking: Maybe<Scalars['Int']['output']>;
  departure: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  price_per_night: Maybe<Scalars['Int']['output']>;
  type: Maybe<Scalars['Int']['output']>;
};

export type TBookingAggregatedFields = {
  __typename?: 'booking_aggregated_fields';
  accommodation: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  price_per_night: Maybe<Scalars['Float']['output']>;
};

export type TBookingFilter = {
  _and: InputMaybe<Array<InputMaybe<TBookingFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TBookingFilter>>>;
  accommodation: InputMaybe<TAccommodationFilter>;
  arrival: InputMaybe<TDateFilterOperators>;
  arrival_func: InputMaybe<TDatetimeFunctionFilterOperators>;
  booking: InputMaybe<TStringFilterOperators>;
  departure: InputMaybe<TDateFilterOperators>;
  departure_func: InputMaybe<TDatetimeFunctionFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  price_per_night: InputMaybe<TNumberFilterOperators>;
  type: InputMaybe<TStringFilterOperators>;
};

export type TBookingMutated = {
  __typename?: 'booking_mutated';
  data: Maybe<TBooking>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TBooleanFilterOperators = {
  _eq: InputMaybe<Scalars['Boolean']['input']>;
  _neq: InputMaybe<Scalars['Boolean']['input']>;
  _nnull: InputMaybe<Scalars['Boolean']['input']>;
  _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCountFunctionFilterOperators = {
  count: InputMaybe<TNumberFilterOperators>;
};

export type TCountFunctions = {
  __typename?: 'count_functions';
  count: Maybe<Scalars['Int']['output']>;
};

export type TCountry = {
  __typename?: 'country';
  alpha3: Maybe<Scalars['String']['output']>;
  currency_code: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Maybe<Scalars['String']['output']>;
  place: Maybe<Array<Maybe<TPlace>>>;
  place_func: Maybe<TCountFunctions>;
  translations: Maybe<Array<Maybe<TCountryTranslations>>>;
  translations_func: Maybe<TCountFunctions>;
};


export type TCountryPlaceArgs = {
  filter: InputMaybe<TPlaceFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TCountryTranslationsArgs = {
  filter: InputMaybe<TCountryTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TCountryAggregated = {
  __typename?: 'country_aggregated';
  avg: Maybe<TCountryAggregatedFields>;
  avgDistinct: Maybe<TCountryAggregatedFields>;
  count: Maybe<TCountryAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TCountryAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TCountryAggregatedFields>;
  min: Maybe<TCountryAggregatedFields>;
  sum: Maybe<TCountryAggregatedFields>;
  sumDistinct: Maybe<TCountryAggregatedFields>;
};

export type TCountryAggregatedCount = {
  __typename?: 'country_aggregated_count';
  alpha3: Maybe<Scalars['Int']['output']>;
  currency_code: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  internal: Maybe<Scalars['Int']['output']>;
  place: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Scalars['Int']['output']>;
};

export type TCountryAggregatedFields = {
  __typename?: 'country_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type TCountryFilter = {
  _and: InputMaybe<Array<InputMaybe<TCountryFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TCountryFilter>>>;
  alpha3: InputMaybe<TStringFilterOperators>;
  currency_code: InputMaybe<TStringFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  internal: InputMaybe<TStringFilterOperators>;
  place: InputMaybe<TPlaceFilter>;
  place_func: InputMaybe<TCountFunctionFilterOperators>;
  translations: InputMaybe<TCountryTranslationsFilter>;
  translations_func: InputMaybe<TCountFunctionFilterOperators>;
};

export type TCountryMutated = {
  __typename?: 'country_mutated';
  data: Maybe<TCountry>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TCountryTranslations = {
  __typename?: 'country_translations';
  capital: Maybe<Scalars['String']['output']>;
  country_id: Maybe<TCountry>;
  currency: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<TLanguages>;
  name: Maybe<Scalars['String']['output']>;
};


export type TCountryTranslationsCountryIdArgs = {
  filter: InputMaybe<TCountryFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TCountryTranslationsLanguagesCodeArgs = {
  filter: InputMaybe<TLanguagesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TCountryTranslationsAggregated = {
  __typename?: 'country_translations_aggregated';
  avg: Maybe<TCountryTranslationsAggregatedFields>;
  avgDistinct: Maybe<TCountryTranslationsAggregatedFields>;
  count: Maybe<TCountryTranslationsAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TCountryTranslationsAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TCountryTranslationsAggregatedFields>;
  min: Maybe<TCountryTranslationsAggregatedFields>;
  sum: Maybe<TCountryTranslationsAggregatedFields>;
  sumDistinct: Maybe<TCountryTranslationsAggregatedFields>;
};

export type TCountryTranslationsAggregatedCount = {
  __typename?: 'country_translations_aggregated_count';
  capital: Maybe<Scalars['Int']['output']>;
  country_id: Maybe<Scalars['Int']['output']>;
  currency: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  languages_code: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['Int']['output']>;
};

export type TCountryTranslationsAggregatedFields = {
  __typename?: 'country_translations_aggregated_fields';
  country_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
};

export type TCountryTranslationsFilter = {
  _and: InputMaybe<Array<InputMaybe<TCountryTranslationsFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TCountryTranslationsFilter>>>;
  capital: InputMaybe<TStringFilterOperators>;
  country_id: InputMaybe<TCountryFilter>;
  currency: InputMaybe<TStringFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  languages_code: InputMaybe<TLanguagesFilter>;
  name: InputMaybe<TStringFilterOperators>;
};

export type TCountryTranslationsMutated = {
  __typename?: 'country_translations_mutated';
  data: Maybe<TCountryTranslations>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TDateFilterOperators = {
  _between: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq: InputMaybe<Scalars['String']['input']>;
  _gt: InputMaybe<Scalars['String']['input']>;
  _gte: InputMaybe<Scalars['String']['input']>;
  _in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt: InputMaybe<Scalars['String']['input']>;
  _lte: InputMaybe<Scalars['String']['input']>;
  _nbetween: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq: InputMaybe<Scalars['String']['input']>;
  _nin: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull: InputMaybe<Scalars['Boolean']['input']>;
  _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type TDateFunctionFilterOperators = {
  day: InputMaybe<TNumberFilterOperators>;
  month: InputMaybe<TNumberFilterOperators>;
  week: InputMaybe<TNumberFilterOperators>;
  weekday: InputMaybe<TNumberFilterOperators>;
  year: InputMaybe<TNumberFilterOperators>;
};

export type TDateFunctions = {
  __typename?: 'date_functions';
  day: Maybe<Scalars['Int']['output']>;
  month: Maybe<Scalars['Int']['output']>;
  week: Maybe<Scalars['Int']['output']>;
  weekday: Maybe<Scalars['Int']['output']>;
  year: Maybe<Scalars['Int']['output']>;
};

export type TDatetimeFunctionFilterOperators = {
  day: InputMaybe<TNumberFilterOperators>;
  hour: InputMaybe<TNumberFilterOperators>;
  minute: InputMaybe<TNumberFilterOperators>;
  month: InputMaybe<TNumberFilterOperators>;
  second: InputMaybe<TNumberFilterOperators>;
  week: InputMaybe<TNumberFilterOperators>;
  weekday: InputMaybe<TNumberFilterOperators>;
  year: InputMaybe<TNumberFilterOperators>;
};

export type TDatetimeFunctions = {
  __typename?: 'datetime_functions';
  day: Maybe<Scalars['Int']['output']>;
  hour: Maybe<Scalars['Int']['output']>;
  minute: Maybe<Scalars['Int']['output']>;
  month: Maybe<Scalars['Int']['output']>;
  second: Maybe<Scalars['Int']['output']>;
  week: Maybe<Scalars['Int']['output']>;
  weekday: Maybe<Scalars['Int']['output']>;
  year: Maybe<Scalars['Int']['output']>;
};

export type TDirectusFiles = {
  __typename?: 'directus_files';
  charset: Maybe<Scalars['String']['output']>;
  created_on: Maybe<Scalars['Date']['output']>;
  created_on_func: Maybe<TDatetimeFunctions>;
  description: Maybe<Scalars['String']['output']>;
  duration: Maybe<Scalars['Int']['output']>;
  embed: Maybe<Scalars['String']['output']>;
  filename_disk: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize: Maybe<Scalars['GraphQLBigInt']['output']>;
  focal_point_x: Maybe<Scalars['Int']['output']>;
  focal_point_y: Maybe<Scalars['Int']['output']>;
  folder: Maybe<TDirectusFolders>;
  height: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location: Maybe<Scalars['String']['output']>;
  metadata: Maybe<Scalars['JSON']['output']>;
  metadata_func: Maybe<TCountFunctions>;
  modified_by: Maybe<TDirectusUsers>;
  modified_on: Maybe<Scalars['Date']['output']>;
  modified_on_func: Maybe<TDatetimeFunctions>;
  storage: Scalars['String']['output'];
  tags: Maybe<Scalars['JSON']['output']>;
  tags_func: Maybe<TCountFunctions>;
  title: Maybe<Scalars['String']['output']>;
  tus_data: Maybe<Scalars['JSON']['output']>;
  tus_data_func: Maybe<TCountFunctions>;
  tus_id: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
  uploaded_by: Maybe<TDirectusUsers>;
  uploaded_on: Maybe<Scalars['Date']['output']>;
  uploaded_on_func: Maybe<TDatetimeFunctions>;
  width: Maybe<Scalars['Int']['output']>;
};


export type TDirectusFilesFolderArgs = {
  filter: InputMaybe<TDirectusFoldersFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TDirectusFilesModifiedByArgs = {
  filter: InputMaybe<TDirectusUsersFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TDirectusFilesUploadedByArgs = {
  filter: InputMaybe<TDirectusUsersFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TDirectusFilesFilter = {
  _and: InputMaybe<Array<InputMaybe<TDirectusFilesFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TDirectusFilesFilter>>>;
  charset: InputMaybe<TStringFilterOperators>;
  created_on: InputMaybe<TDateFilterOperators>;
  created_on_func: InputMaybe<TDatetimeFunctionFilterOperators>;
  description: InputMaybe<TStringFilterOperators>;
  duration: InputMaybe<TNumberFilterOperators>;
  embed: InputMaybe<TStringFilterOperators>;
  filename_disk: InputMaybe<TStringFilterOperators>;
  filename_download: InputMaybe<TStringFilterOperators>;
  filesize: InputMaybe<TBigIntFilterOperators>;
  focal_point_x: InputMaybe<TNumberFilterOperators>;
  focal_point_y: InputMaybe<TNumberFilterOperators>;
  folder: InputMaybe<TDirectusFoldersFilter>;
  height: InputMaybe<TNumberFilterOperators>;
  id: InputMaybe<TStringFilterOperators>;
  location: InputMaybe<TStringFilterOperators>;
  metadata: InputMaybe<TStringFilterOperators>;
  metadata_func: InputMaybe<TCountFunctionFilterOperators>;
  modified_by: InputMaybe<TDirectusUsersFilter>;
  modified_on: InputMaybe<TDateFilterOperators>;
  modified_on_func: InputMaybe<TDatetimeFunctionFilterOperators>;
  storage: InputMaybe<TStringFilterOperators>;
  tags: InputMaybe<TStringFilterOperators>;
  tags_func: InputMaybe<TCountFunctionFilterOperators>;
  title: InputMaybe<TStringFilterOperators>;
  tus_data: InputMaybe<TStringFilterOperators>;
  tus_data_func: InputMaybe<TCountFunctionFilterOperators>;
  tus_id: InputMaybe<TStringFilterOperators>;
  type: InputMaybe<TStringFilterOperators>;
  uploaded_by: InputMaybe<TDirectusUsersFilter>;
  uploaded_on: InputMaybe<TDateFilterOperators>;
  uploaded_on_func: InputMaybe<TDatetimeFunctionFilterOperators>;
  width: InputMaybe<TNumberFilterOperators>;
};

export type TDirectusFilesMutated = {
  __typename?: 'directus_files_mutated';
  data: Maybe<TDirectusFiles>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TDirectusFolders = {
  __typename?: 'directus_folders';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent: Maybe<TDirectusFolders>;
};


export type TDirectusFoldersParentArgs = {
  filter: InputMaybe<TDirectusFoldersFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TDirectusFoldersFilter = {
  _and: InputMaybe<Array<InputMaybe<TDirectusFoldersFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TDirectusFoldersFilter>>>;
  id: InputMaybe<TStringFilterOperators>;
  name: InputMaybe<TStringFilterOperators>;
  parent: InputMaybe<TDirectusFoldersFilter>;
};

export type TDirectusFoldersMutated = {
  __typename?: 'directus_folders_mutated';
  data: Maybe<TDirectusFolders>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TDirectusRoles = {
  __typename?: 'directus_roles';
  children: Maybe<Array<Maybe<TDirectusRoles>>>;
  children_func: Maybe<TCountFunctions>;
  description: Maybe<Scalars['String']['output']>;
  icon: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent: Maybe<TDirectusRoles>;
  policies: Maybe<Scalars['String']['output']>;
  policies_func: Maybe<TCountFunctions>;
  users: Maybe<Array<Maybe<TDirectusUsers>>>;
  users_func: Maybe<TCountFunctions>;
};


export type TDirectusRolesChildrenArgs = {
  filter: InputMaybe<TDirectusRolesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TDirectusRolesParentArgs = {
  filter: InputMaybe<TDirectusRolesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TDirectusRolesUsersArgs = {
  filter: InputMaybe<TDirectusUsersFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TDirectusRolesFilter = {
  _and: InputMaybe<Array<InputMaybe<TDirectusRolesFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TDirectusRolesFilter>>>;
  children: InputMaybe<TDirectusRolesFilter>;
  children_func: InputMaybe<TCountFunctionFilterOperators>;
  description: InputMaybe<TStringFilterOperators>;
  icon: InputMaybe<TStringFilterOperators>;
  id: InputMaybe<TStringFilterOperators>;
  name: InputMaybe<TStringFilterOperators>;
  parent: InputMaybe<TDirectusRolesFilter>;
  policies: InputMaybe<TStringFilterOperators>;
  policies_func: InputMaybe<TCountFunctionFilterOperators>;
  users: InputMaybe<TDirectusUsersFilter>;
  users_func: InputMaybe<TCountFunctionFilterOperators>;
};

export type TDirectusRolesMutated = {
  __typename?: 'directus_roles_mutated';
  data: Maybe<TDirectusRoles>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TDirectusSettings = {
  __typename?: 'directus_settings';
  auth_login_attempts: Maybe<Scalars['Int']['output']>;
  auth_password_policy: Maybe<Scalars['String']['output']>;
  basemaps: Maybe<Scalars['JSON']['output']>;
  basemaps_func: Maybe<TCountFunctions>;
  custom_aspect_ratios: Maybe<Scalars['JSON']['output']>;
  custom_aspect_ratios_func: Maybe<TCountFunctions>;
  custom_css: Maybe<Scalars['String']['output']>;
  default_appearance: Maybe<Scalars['String']['output']>;
  default_language: Maybe<Scalars['String']['output']>;
  default_theme_dark: Maybe<Scalars['String']['output']>;
  default_theme_light: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mapbox_key: Maybe<Scalars['String']['output']>;
  module_bar: Maybe<Scalars['JSON']['output']>;
  module_bar_func: Maybe<TCountFunctions>;
  /** $t:field_options.directus_settings.project_color_note */
  project_color: Maybe<Scalars['String']['output']>;
  project_descriptor: Maybe<Scalars['String']['output']>;
  project_logo: Maybe<TDirectusFiles>;
  project_name: Maybe<Scalars['String']['output']>;
  project_url: Maybe<Scalars['String']['output']>;
  public_background: Maybe<TDirectusFiles>;
  public_favicon: Maybe<TDirectusFiles>;
  public_foreground: Maybe<TDirectusFiles>;
  public_note: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.public_registration_note */
  public_registration: Scalars['Boolean']['output'];
  /** $t:fields.directus_settings.public_registration_email_filter_note */
  public_registration_email_filter: Maybe<Scalars['JSON']['output']>;
  public_registration_email_filter_func: Maybe<TCountFunctions>;
  public_registration_role: Maybe<TDirectusRoles>;
  /** $t:fields.directus_settings.public_registration_verify_email_note */
  public_registration_verify_email: Maybe<Scalars['Boolean']['output']>;
  report_bug_url: Maybe<Scalars['String']['output']>;
  report_error_url: Maybe<Scalars['String']['output']>;
  report_feature_url: Maybe<Scalars['String']['output']>;
  storage_asset_presets: Maybe<Scalars['JSON']['output']>;
  storage_asset_presets_func: Maybe<TCountFunctions>;
  storage_asset_transform: Maybe<Scalars['String']['output']>;
  storage_default_folder: Maybe<TDirectusFolders>;
  theme_dark_overrides: Maybe<Scalars['JSON']['output']>;
  theme_dark_overrides_func: Maybe<TCountFunctions>;
  theme_light_overrides: Maybe<Scalars['JSON']['output']>;
  theme_light_overrides_func: Maybe<TCountFunctions>;
};


export type TDirectusSettingsProjectLogoArgs = {
  filter: InputMaybe<TDirectusFilesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TDirectusSettingsPublicBackgroundArgs = {
  filter: InputMaybe<TDirectusFilesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TDirectusSettingsPublicFaviconArgs = {
  filter: InputMaybe<TDirectusFilesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TDirectusSettingsPublicForegroundArgs = {
  filter: InputMaybe<TDirectusFilesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TDirectusSettingsPublicRegistrationRoleArgs = {
  filter: InputMaybe<TDirectusRolesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TDirectusSettingsStorageDefaultFolderArgs = {
  filter: InputMaybe<TDirectusFoldersFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TDirectusSettingsMutated = {
  __typename?: 'directus_settings_mutated';
  data: Maybe<TDirectusSettings>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TDirectusUsers = {
  __typename?: 'directus_users';
  appearance: Maybe<Scalars['String']['output']>;
  auth_data: Maybe<Scalars['JSON']['output']>;
  auth_data_func: Maybe<TCountFunctions>;
  avatar: Maybe<TDirectusFiles>;
  description: Maybe<Scalars['String']['output']>;
  email: Maybe<Scalars['String']['output']>;
  email_notifications: Maybe<Scalars['Boolean']['output']>;
  external_identifier: Maybe<Scalars['String']['output']>;
  first_name: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language: Maybe<Scalars['String']['output']>;
  last_access: Maybe<Scalars['Date']['output']>;
  last_access_func: Maybe<TDatetimeFunctions>;
  last_name: Maybe<Scalars['String']['output']>;
  last_page: Maybe<Scalars['String']['output']>;
  location: Maybe<Scalars['String']['output']>;
  password: Maybe<Scalars['Hash']['output']>;
  policies: Maybe<Scalars['String']['output']>;
  policies_func: Maybe<TCountFunctions>;
  provider: Maybe<Scalars['String']['output']>;
  role: Maybe<TDirectusRoles>;
  status: Maybe<Scalars['String']['output']>;
  tags: Maybe<Scalars['JSON']['output']>;
  tags_func: Maybe<TCountFunctions>;
  tfa_secret: Maybe<Scalars['Hash']['output']>;
  theme_dark: Maybe<Scalars['String']['output']>;
  theme_dark_overrides: Maybe<Scalars['JSON']['output']>;
  theme_dark_overrides_func: Maybe<TCountFunctions>;
  theme_light: Maybe<Scalars['String']['output']>;
  theme_light_overrides: Maybe<Scalars['JSON']['output']>;
  theme_light_overrides_func: Maybe<TCountFunctions>;
  title: Maybe<Scalars['String']['output']>;
  token: Maybe<Scalars['Hash']['output']>;
};


export type TDirectusUsersAvatarArgs = {
  filter: InputMaybe<TDirectusFilesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TDirectusUsersRoleArgs = {
  filter: InputMaybe<TDirectusRolesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TDirectusUsersFilter = {
  _and: InputMaybe<Array<InputMaybe<TDirectusUsersFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TDirectusUsersFilter>>>;
  appearance: InputMaybe<TStringFilterOperators>;
  auth_data: InputMaybe<TStringFilterOperators>;
  auth_data_func: InputMaybe<TCountFunctionFilterOperators>;
  avatar: InputMaybe<TDirectusFilesFilter>;
  description: InputMaybe<TStringFilterOperators>;
  email: InputMaybe<TStringFilterOperators>;
  email_notifications: InputMaybe<TBooleanFilterOperators>;
  external_identifier: InputMaybe<TStringFilterOperators>;
  first_name: InputMaybe<TStringFilterOperators>;
  id: InputMaybe<TStringFilterOperators>;
  language: InputMaybe<TStringFilterOperators>;
  last_access: InputMaybe<TDateFilterOperators>;
  last_access_func: InputMaybe<TDatetimeFunctionFilterOperators>;
  last_name: InputMaybe<TStringFilterOperators>;
  last_page: InputMaybe<TStringFilterOperators>;
  location: InputMaybe<TStringFilterOperators>;
  password: InputMaybe<THashFilterOperators>;
  policies: InputMaybe<TStringFilterOperators>;
  policies_func: InputMaybe<TCountFunctionFilterOperators>;
  provider: InputMaybe<TStringFilterOperators>;
  role: InputMaybe<TDirectusRolesFilter>;
  status: InputMaybe<TStringFilterOperators>;
  tags: InputMaybe<TStringFilterOperators>;
  tags_func: InputMaybe<TCountFunctionFilterOperators>;
  tfa_secret: InputMaybe<THashFilterOperators>;
  theme_dark: InputMaybe<TStringFilterOperators>;
  theme_dark_overrides: InputMaybe<TStringFilterOperators>;
  theme_dark_overrides_func: InputMaybe<TCountFunctionFilterOperators>;
  theme_light: InputMaybe<TStringFilterOperators>;
  theme_light_overrides: InputMaybe<TStringFilterOperators>;
  theme_light_overrides_func: InputMaybe<TCountFunctionFilterOperators>;
  title: InputMaybe<TStringFilterOperators>;
  token: InputMaybe<THashFilterOperators>;
};

export type TDirectusUsersMutated = {
  __typename?: 'directus_users_mutated';
  data: Maybe<TDirectusUsers>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TGeometryFilterOperators = {
  _eq: InputMaybe<Scalars['GraphQLGeoJSON']['input']>;
  _intersects: InputMaybe<Scalars['GraphQLGeoJSON']['input']>;
  _intersects_bbox: InputMaybe<Scalars['GraphQLGeoJSON']['input']>;
  _neq: InputMaybe<Scalars['GraphQLGeoJSON']['input']>;
  _nintersects: InputMaybe<Scalars['GraphQLGeoJSON']['input']>;
  _nintersects_bbox: InputMaybe<Scalars['GraphQLGeoJSON']['input']>;
  _nnull: InputMaybe<Scalars['Boolean']['input']>;
  _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type THashFilterOperators = {
  _empty: InputMaybe<Scalars['Boolean']['input']>;
  _nempty: InputMaybe<Scalars['Boolean']['input']>;
  _nnull: InputMaybe<Scalars['Boolean']['input']>;
  _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type TLanguages = {
  __typename?: 'languages';
  abbreviation: Maybe<Scalars['String']['output']>;
  code: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
};

export type TLanguagesAggregated = {
  __typename?: 'languages_aggregated';
  count: Maybe<TLanguagesAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TLanguagesAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
};

export type TLanguagesAggregatedCount = {
  __typename?: 'languages_aggregated_count';
  abbreviation: Maybe<Scalars['Int']['output']>;
  code: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['Int']['output']>;
};

export type TLanguagesFilter = {
  _and: InputMaybe<Array<InputMaybe<TLanguagesFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TLanguagesFilter>>>;
  abbreviation: InputMaybe<TStringFilterOperators>;
  code: InputMaybe<TStringFilterOperators>;
  name: InputMaybe<TStringFilterOperators>;
};

export type TLanguagesMutated = {
  __typename?: 'languages_mutated';
  data: Maybe<TLanguages>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TNavigation = {
  __typename?: 'navigation';
  id: Scalars['ID']['output'];
  image: Maybe<TDirectusFiles>;
  main_navigation_items: Maybe<Array<Maybe<TNavigationItem>>>;
  main_navigation_items_func: Maybe<TCountFunctions>;
  misc_navigation_items: Maybe<Array<Maybe<TNavigationItem>>>;
  misc_navigation_items_func: Maybe<TCountFunctions>;
  translations: Maybe<Array<Maybe<TNavigationTranslations>>>;
  translations_func: Maybe<TCountFunctions>;
};


export type TNavigationImageArgs = {
  filter: InputMaybe<TDirectusFilesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TNavigationMainNavigationItemsArgs = {
  filter: InputMaybe<TNavigationItemFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TNavigationMiscNavigationItemsArgs = {
  filter: InputMaybe<TNavigationItemFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TNavigationTranslationsArgs = {
  filter: InputMaybe<TNavigationTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TNavigationFilter = {
  _and: InputMaybe<Array<InputMaybe<TNavigationFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TNavigationFilter>>>;
  id: InputMaybe<TNumberFilterOperators>;
  image: InputMaybe<TDirectusFilesFilter>;
  main_navigation_items: InputMaybe<TNavigationItemFilter>;
  main_navigation_items_func: InputMaybe<TCountFunctionFilterOperators>;
  misc_navigation_items: InputMaybe<TNavigationItemFilter>;
  misc_navigation_items_func: InputMaybe<TCountFunctionFilterOperators>;
  translations: InputMaybe<TNavigationTranslationsFilter>;
  translations_func: InputMaybe<TCountFunctionFilterOperators>;
};

export type TNavigationItem = {
  __typename?: 'navigation_item';
  active: Maybe<Scalars['Boolean']['output']>;
  icon: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  line: Maybe<Scalars['Boolean']['output']>;
  main_navigation: Maybe<TNavigation>;
  misc_navigation: Maybe<TNavigation>;
  sort: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Array<Maybe<TNavigationItemTranslations>>>;
  translations_func: Maybe<TCountFunctions>;
  url: Maybe<Scalars['String']['output']>;
};


export type TNavigationItemMainNavigationArgs = {
  filter: InputMaybe<TNavigationFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TNavigationItemMiscNavigationArgs = {
  filter: InputMaybe<TNavigationFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TNavigationItemTranslationsArgs = {
  filter: InputMaybe<TNavigationItemTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TNavigationItemAggregated = {
  __typename?: 'navigation_item_aggregated';
  avg: Maybe<TNavigationItemAggregatedFields>;
  avgDistinct: Maybe<TNavigationItemAggregatedFields>;
  count: Maybe<TNavigationItemAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TNavigationItemAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TNavigationItemAggregatedFields>;
  min: Maybe<TNavigationItemAggregatedFields>;
  sum: Maybe<TNavigationItemAggregatedFields>;
  sumDistinct: Maybe<TNavigationItemAggregatedFields>;
};

export type TNavigationItemAggregatedCount = {
  __typename?: 'navigation_item_aggregated_count';
  active: Maybe<Scalars['Int']['output']>;
  icon: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  line: Maybe<Scalars['Int']['output']>;
  main_navigation: Maybe<Scalars['Int']['output']>;
  misc_navigation: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Scalars['Int']['output']>;
  url: Maybe<Scalars['Int']['output']>;
};

export type TNavigationItemAggregatedFields = {
  __typename?: 'navigation_item_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  main_navigation: Maybe<Scalars['Float']['output']>;
  misc_navigation: Maybe<Scalars['Float']['output']>;
  sort: Maybe<Scalars['Float']['output']>;
};

export type TNavigationItemFilter = {
  _and: InputMaybe<Array<InputMaybe<TNavigationItemFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TNavigationItemFilter>>>;
  active: InputMaybe<TBooleanFilterOperators>;
  icon: InputMaybe<TStringFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  line: InputMaybe<TBooleanFilterOperators>;
  main_navigation: InputMaybe<TNavigationFilter>;
  misc_navigation: InputMaybe<TNavigationFilter>;
  sort: InputMaybe<TNumberFilterOperators>;
  translations: InputMaybe<TNavigationItemTranslationsFilter>;
  translations_func: InputMaybe<TCountFunctionFilterOperators>;
  url: InputMaybe<TStringFilterOperators>;
};

export type TNavigationItemMutated = {
  __typename?: 'navigation_item_mutated';
  data: Maybe<TNavigationItem>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TNavigationItemTranslations = {
  __typename?: 'navigation_item_translations';
  id: Scalars['ID']['output'];
  label: Maybe<Scalars['String']['output']>;
  languages_code: Maybe<TLanguages>;
  navigation_item_id: Maybe<TNavigationItem>;
  title: Maybe<Scalars['String']['output']>;
};


export type TNavigationItemTranslationsLanguagesCodeArgs = {
  filter: InputMaybe<TLanguagesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TNavigationItemTranslationsNavigationItemIdArgs = {
  filter: InputMaybe<TNavigationItemFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TNavigationItemTranslationsAggregated = {
  __typename?: 'navigation_item_translations_aggregated';
  avg: Maybe<TNavigationItemTranslationsAggregatedFields>;
  avgDistinct: Maybe<TNavigationItemTranslationsAggregatedFields>;
  count: Maybe<TNavigationItemTranslationsAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TNavigationItemTranslationsAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TNavigationItemTranslationsAggregatedFields>;
  min: Maybe<TNavigationItemTranslationsAggregatedFields>;
  sum: Maybe<TNavigationItemTranslationsAggregatedFields>;
  sumDistinct: Maybe<TNavigationItemTranslationsAggregatedFields>;
};

export type TNavigationItemTranslationsAggregatedCount = {
  __typename?: 'navigation_item_translations_aggregated_count';
  id: Maybe<Scalars['Int']['output']>;
  label: Maybe<Scalars['Int']['output']>;
  languages_code: Maybe<Scalars['Int']['output']>;
  navigation_item_id: Maybe<Scalars['Int']['output']>;
  title: Maybe<Scalars['Int']['output']>;
};

export type TNavigationItemTranslationsAggregatedFields = {
  __typename?: 'navigation_item_translations_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  navigation_item_id: Maybe<Scalars['Float']['output']>;
};

export type TNavigationItemTranslationsFilter = {
  _and: InputMaybe<Array<InputMaybe<TNavigationItemTranslationsFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TNavigationItemTranslationsFilter>>>;
  id: InputMaybe<TNumberFilterOperators>;
  label: InputMaybe<TStringFilterOperators>;
  languages_code: InputMaybe<TLanguagesFilter>;
  navigation_item_id: InputMaybe<TNavigationItemFilter>;
  title: InputMaybe<TStringFilterOperators>;
};

export type TNavigationItemTranslationsMutated = {
  __typename?: 'navigation_item_translations_mutated';
  data: Maybe<TNavigationItemTranslations>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TNavigationMutated = {
  __typename?: 'navigation_mutated';
  data: Maybe<TNavigation>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TNavigationTranslations = {
  __typename?: 'navigation_translations';
  contact: Maybe<Scalars['String']['output']>;
  cv: Maybe<Scalars['String']['output']>;
  dark: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language: Maybe<Scalars['String']['output']>;
  languages_code: Maybe<TLanguages>;
  navigation_id: Maybe<TNavigation>;
  search: Maybe<Scalars['String']['output']>;
};


export type TNavigationTranslationsLanguagesCodeArgs = {
  filter: InputMaybe<TLanguagesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TNavigationTranslationsNavigationIdArgs = {
  filter: InputMaybe<TNavigationFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TNavigationTranslationsAggregated = {
  __typename?: 'navigation_translations_aggregated';
  avg: Maybe<TNavigationTranslationsAggregatedFields>;
  avgDistinct: Maybe<TNavigationTranslationsAggregatedFields>;
  count: Maybe<TNavigationTranslationsAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TNavigationTranslationsAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TNavigationTranslationsAggregatedFields>;
  min: Maybe<TNavigationTranslationsAggregatedFields>;
  sum: Maybe<TNavigationTranslationsAggregatedFields>;
  sumDistinct: Maybe<TNavigationTranslationsAggregatedFields>;
};

export type TNavigationTranslationsAggregatedCount = {
  __typename?: 'navigation_translations_aggregated_count';
  contact: Maybe<Scalars['Int']['output']>;
  cv: Maybe<Scalars['Int']['output']>;
  dark: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  language: Maybe<Scalars['Int']['output']>;
  languages_code: Maybe<Scalars['Int']['output']>;
  navigation_id: Maybe<Scalars['Int']['output']>;
  search: Maybe<Scalars['Int']['output']>;
};

export type TNavigationTranslationsAggregatedFields = {
  __typename?: 'navigation_translations_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  navigation_id: Maybe<Scalars['Float']['output']>;
};

export type TNavigationTranslationsFilter = {
  _and: InputMaybe<Array<InputMaybe<TNavigationTranslationsFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TNavigationTranslationsFilter>>>;
  contact: InputMaybe<TStringFilterOperators>;
  cv: InputMaybe<TStringFilterOperators>;
  dark: InputMaybe<TStringFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  language: InputMaybe<TStringFilterOperators>;
  languages_code: InputMaybe<TLanguagesFilter>;
  navigation_id: InputMaybe<TNavigationFilter>;
  search: InputMaybe<TStringFilterOperators>;
};

export type TNavigationTranslationsMutated = {
  __typename?: 'navigation_translations_mutated';
  data: Maybe<TNavigationTranslations>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TNotFound = {
  __typename?: 'not_found';
  id: Scalars['ID']['output'];
  translations: Maybe<Array<Maybe<TNotFoundTranslations>>>;
  translations_func: Maybe<TCountFunctions>;
};


export type TNotFoundTranslationsArgs = {
  filter: InputMaybe<TNotFoundTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TNotFoundFilter = {
  _and: InputMaybe<Array<InputMaybe<TNotFoundFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TNotFoundFilter>>>;
  id: InputMaybe<TNumberFilterOperators>;
  translations: InputMaybe<TNotFoundTranslationsFilter>;
  translations_func: InputMaybe<TCountFunctionFilterOperators>;
};

export type TNotFoundMutated = {
  __typename?: 'not_found_mutated';
  data: Maybe<TNotFound>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TNotFoundTranslations = {
  __typename?: 'not_found_translations';
  button: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<TLanguages>;
  navigation: Maybe<Scalars['String']['output']>;
  not_found_id: Maybe<TNotFound>;
  title: Maybe<Scalars['String']['output']>;
};


export type TNotFoundTranslationsLanguagesCodeArgs = {
  filter: InputMaybe<TLanguagesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TNotFoundTranslationsNotFoundIdArgs = {
  filter: InputMaybe<TNotFoundFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TNotFoundTranslationsAggregated = {
  __typename?: 'not_found_translations_aggregated';
  avg: Maybe<TNotFoundTranslationsAggregatedFields>;
  avgDistinct: Maybe<TNotFoundTranslationsAggregatedFields>;
  count: Maybe<TNotFoundTranslationsAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TNotFoundTranslationsAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TNotFoundTranslationsAggregatedFields>;
  min: Maybe<TNotFoundTranslationsAggregatedFields>;
  sum: Maybe<TNotFoundTranslationsAggregatedFields>;
  sumDistinct: Maybe<TNotFoundTranslationsAggregatedFields>;
};

export type TNotFoundTranslationsAggregatedCount = {
  __typename?: 'not_found_translations_aggregated_count';
  button: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  languages_code: Maybe<Scalars['Int']['output']>;
  navigation: Maybe<Scalars['Int']['output']>;
  not_found_id: Maybe<Scalars['Int']['output']>;
  title: Maybe<Scalars['Int']['output']>;
};

export type TNotFoundTranslationsAggregatedFields = {
  __typename?: 'not_found_translations_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  not_found_id: Maybe<Scalars['Float']['output']>;
};

export type TNotFoundTranslationsFilter = {
  _and: InputMaybe<Array<InputMaybe<TNotFoundTranslationsFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TNotFoundTranslationsFilter>>>;
  button: InputMaybe<TStringFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  languages_code: InputMaybe<TLanguagesFilter>;
  navigation: InputMaybe<TStringFilterOperators>;
  not_found_id: InputMaybe<TNotFoundFilter>;
  title: InputMaybe<TStringFilterOperators>;
};

export type TNotFoundTranslationsMutated = {
  __typename?: 'not_found_translations_mutated';
  data: Maybe<TNotFoundTranslations>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TNumberFilterOperators = {
  _between: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull: InputMaybe<Scalars['Boolean']['input']>;
  _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type TPlace = {
  __typename?: 'place';
  accommodation: Maybe<Array<Maybe<TAccommodation>>>;
  accommodation_func: Maybe<TCountFunctions>;
  album: Maybe<Scalars['String']['output']>;
  country: Maybe<TCountry>;
  id: Scalars['ID']['output'];
  internal: Maybe<Scalars['String']['output']>;
  location: Maybe<Scalars['GraphQLGeoJSON']['output']>;
  secret_blog: Maybe<Array<Maybe<TSecretBlogPlace>>>;
  secret_blog_func: Maybe<TCountFunctions>;
  translations: Maybe<Array<Maybe<TPlaceTranslations>>>;
  translations_func: Maybe<TCountFunctions>;
  transportation: Maybe<Array<Maybe<TTransportation>>>;
};


export type TPlaceAccommodationArgs = {
  filter: InputMaybe<TAccommodationFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TPlaceCountryArgs = {
  filter: InputMaybe<TCountryFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TPlaceSecretBlogArgs = {
  filter: InputMaybe<TSecretBlogPlaceFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TPlaceTranslationsArgs = {
  filter: InputMaybe<TPlaceTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TPlaceTransportationArgs = {
  filter: InputMaybe<TTransportationFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TPlaceAggregated = {
  __typename?: 'place_aggregated';
  avg: Maybe<TPlaceAggregatedFields>;
  avgDistinct: Maybe<TPlaceAggregatedFields>;
  count: Maybe<TPlaceAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TPlaceAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TPlaceAggregatedFields>;
  min: Maybe<TPlaceAggregatedFields>;
  sum: Maybe<TPlaceAggregatedFields>;
  sumDistinct: Maybe<TPlaceAggregatedFields>;
};

export type TPlaceAggregatedCount = {
  __typename?: 'place_aggregated_count';
  accommodation: Maybe<Scalars['Int']['output']>;
  album: Maybe<Scalars['Int']['output']>;
  country: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  internal: Maybe<Scalars['Int']['output']>;
  location: Maybe<Scalars['Int']['output']>;
  secret_blog: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Scalars['Int']['output']>;
};

export type TPlaceAggregatedFields = {
  __typename?: 'place_aggregated_fields';
  country: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
};

export type TPlaceFilter = {
  _and: InputMaybe<Array<InputMaybe<TPlaceFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TPlaceFilter>>>;
  accommodation: InputMaybe<TAccommodationFilter>;
  accommodation_func: InputMaybe<TCountFunctionFilterOperators>;
  album: InputMaybe<TStringFilterOperators>;
  country: InputMaybe<TCountryFilter>;
  id: InputMaybe<TNumberFilterOperators>;
  internal: InputMaybe<TStringFilterOperators>;
  location: InputMaybe<TGeometryFilterOperators>;
  secret_blog: InputMaybe<TSecretBlogPlaceFilter>;
  secret_blog_func: InputMaybe<TCountFunctionFilterOperators>;
  translations: InputMaybe<TPlaceTranslationsFilter>;
  translations_func: InputMaybe<TCountFunctionFilterOperators>;
  transportation: InputMaybe<TTransportationFilter>;
};

export type TPlaceMutated = {
  __typename?: 'place_mutated';
  data: Maybe<TPlace>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TPlaceTranslations = {
  __typename?: 'place_translations';
  id: Scalars['ID']['output'];
  languages_code: Maybe<TLanguages>;
  name: Maybe<Scalars['String']['output']>;
  place_id: Maybe<TPlace>;
};


export type TPlaceTranslationsLanguagesCodeArgs = {
  filter: InputMaybe<TLanguagesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TPlaceTranslationsPlaceIdArgs = {
  filter: InputMaybe<TPlaceFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TPlaceTranslationsAggregated = {
  __typename?: 'place_translations_aggregated';
  avg: Maybe<TPlaceTranslationsAggregatedFields>;
  avgDistinct: Maybe<TPlaceTranslationsAggregatedFields>;
  count: Maybe<TPlaceTranslationsAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TPlaceTranslationsAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TPlaceTranslationsAggregatedFields>;
  min: Maybe<TPlaceTranslationsAggregatedFields>;
  sum: Maybe<TPlaceTranslationsAggregatedFields>;
  sumDistinct: Maybe<TPlaceTranslationsAggregatedFields>;
};

export type TPlaceTranslationsAggregatedCount = {
  __typename?: 'place_translations_aggregated_count';
  id: Maybe<Scalars['Int']['output']>;
  languages_code: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['Int']['output']>;
  place_id: Maybe<Scalars['Int']['output']>;
};

export type TPlaceTranslationsAggregatedFields = {
  __typename?: 'place_translations_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  place_id: Maybe<Scalars['Float']['output']>;
};

export type TPlaceTranslationsFilter = {
  _and: InputMaybe<Array<InputMaybe<TPlaceTranslationsFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TPlaceTranslationsFilter>>>;
  id: InputMaybe<TNumberFilterOperators>;
  languages_code: InputMaybe<TLanguagesFilter>;
  name: InputMaybe<TStringFilterOperators>;
  place_id: InputMaybe<TPlaceFilter>;
};

export type TPlaceTranslationsMutated = {
  __typename?: 'place_translations_mutated';
  data: Maybe<TPlaceTranslations>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TProject = {
  __typename?: 'project';
  color: Maybe<Scalars['String']['output']>;
  gallery: Maybe<Array<Maybe<TProjectDirectusFiles>>>;
  gallery_func: Maybe<TCountFunctions>;
  id: Scalars['ID']['output'];
  slug: Maybe<Scalars['String']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  technologies: Maybe<Array<Maybe<TProjectTechnology>>>;
  technologies_func: Maybe<TCountFunctions>;
  title: Maybe<Scalars['String']['output']>;
  translations: Maybe<Array<Maybe<TProjectTranslations>>>;
  translations_func: Maybe<TCountFunctions>;
  url: Maybe<Scalars['String']['output']>;
  work: Maybe<Array<Maybe<TWorkProject>>>;
  work_func: Maybe<TCountFunctions>;
};


export type TProjectGalleryArgs = {
  filter: InputMaybe<TProjectDirectusFilesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TProjectTechnologiesArgs = {
  filter: InputMaybe<TProjectTechnologyFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TProjectTranslationsArgs = {
  filter: InputMaybe<TProjectTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TProjectWorkArgs = {
  filter: InputMaybe<TWorkProjectFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TProjectAggregated = {
  __typename?: 'project_aggregated';
  avg: Maybe<TProjectAggregatedFields>;
  avgDistinct: Maybe<TProjectAggregatedFields>;
  count: Maybe<TProjectAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TProjectAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TProjectAggregatedFields>;
  min: Maybe<TProjectAggregatedFields>;
  sum: Maybe<TProjectAggregatedFields>;
  sumDistinct: Maybe<TProjectAggregatedFields>;
};

export type TProjectAggregatedCount = {
  __typename?: 'project_aggregated_count';
  color: Maybe<Scalars['Int']['output']>;
  gallery: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  slug: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  technologies: Maybe<Scalars['Int']['output']>;
  title: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Scalars['Int']['output']>;
  url: Maybe<Scalars['Int']['output']>;
  work: Maybe<Scalars['Int']['output']>;
};

export type TProjectAggregatedFields = {
  __typename?: 'project_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  sort: Maybe<Scalars['Float']['output']>;
};

export type TProjectDirectusFiles = {
  __typename?: 'project_directus_files';
  directus_files_id: Maybe<TDirectusFiles>;
  id: Scalars['ID']['output'];
  project_id: Maybe<TProject>;
  sort: Maybe<Scalars['Int']['output']>;
};


export type TProjectDirectusFilesDirectusFilesIdArgs = {
  filter: InputMaybe<TDirectusFilesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TProjectDirectusFilesProjectIdArgs = {
  filter: InputMaybe<TProjectFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TProjectDirectusFilesAggregated = {
  __typename?: 'project_directus_files_aggregated';
  avg: Maybe<TProjectDirectusFilesAggregatedFields>;
  avgDistinct: Maybe<TProjectDirectusFilesAggregatedFields>;
  count: Maybe<TProjectDirectusFilesAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TProjectDirectusFilesAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TProjectDirectusFilesAggregatedFields>;
  min: Maybe<TProjectDirectusFilesAggregatedFields>;
  sum: Maybe<TProjectDirectusFilesAggregatedFields>;
  sumDistinct: Maybe<TProjectDirectusFilesAggregatedFields>;
};

export type TProjectDirectusFilesAggregatedCount = {
  __typename?: 'project_directus_files_aggregated_count';
  directus_files_id: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  project_id: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
};

export type TProjectDirectusFilesAggregatedFields = {
  __typename?: 'project_directus_files_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  project_id: Maybe<Scalars['Float']['output']>;
  sort: Maybe<Scalars['Float']['output']>;
};

export type TProjectDirectusFilesFilter = {
  _and: InputMaybe<Array<InputMaybe<TProjectDirectusFilesFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TProjectDirectusFilesFilter>>>;
  directus_files_id: InputMaybe<TDirectusFilesFilter>;
  id: InputMaybe<TNumberFilterOperators>;
  project_id: InputMaybe<TProjectFilter>;
  sort: InputMaybe<TNumberFilterOperators>;
};

export type TProjectDirectusFilesMutated = {
  __typename?: 'project_directus_files_mutated';
  data: Maybe<TProjectDirectusFiles>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TProjectFilter = {
  _and: InputMaybe<Array<InputMaybe<TProjectFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TProjectFilter>>>;
  color: InputMaybe<TStringFilterOperators>;
  gallery: InputMaybe<TProjectDirectusFilesFilter>;
  gallery_func: InputMaybe<TCountFunctionFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  slug: InputMaybe<TStringFilterOperators>;
  sort: InputMaybe<TNumberFilterOperators>;
  technologies: InputMaybe<TProjectTechnologyFilter>;
  technologies_func: InputMaybe<TCountFunctionFilterOperators>;
  title: InputMaybe<TStringFilterOperators>;
  translations: InputMaybe<TProjectTranslationsFilter>;
  translations_func: InputMaybe<TCountFunctionFilterOperators>;
  url: InputMaybe<TStringFilterOperators>;
  work: InputMaybe<TWorkProjectFilter>;
  work_func: InputMaybe<TCountFunctionFilterOperators>;
};

export type TProjectMutated = {
  __typename?: 'project_mutated';
  data: Maybe<TProject>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TProjectTechnology = {
  __typename?: 'project_technology';
  id: Scalars['ID']['output'];
  project_id: Maybe<TProject>;
  secondary: Maybe<Scalars['Boolean']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  technology_id: Maybe<TTechnology>;
};


export type TProjectTechnologyProjectIdArgs = {
  filter: InputMaybe<TProjectFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TProjectTechnologyTechnologyIdArgs = {
  filter: InputMaybe<TTechnologyFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TProjectTechnologyAggregated = {
  __typename?: 'project_technology_aggregated';
  avg: Maybe<TProjectTechnologyAggregatedFields>;
  avgDistinct: Maybe<TProjectTechnologyAggregatedFields>;
  count: Maybe<TProjectTechnologyAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TProjectTechnologyAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TProjectTechnologyAggregatedFields>;
  min: Maybe<TProjectTechnologyAggregatedFields>;
  sum: Maybe<TProjectTechnologyAggregatedFields>;
  sumDistinct: Maybe<TProjectTechnologyAggregatedFields>;
};

export type TProjectTechnologyAggregatedCount = {
  __typename?: 'project_technology_aggregated_count';
  id: Maybe<Scalars['Int']['output']>;
  project_id: Maybe<Scalars['Int']['output']>;
  secondary: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  technology_id: Maybe<Scalars['Int']['output']>;
};

export type TProjectTechnologyAggregatedFields = {
  __typename?: 'project_technology_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  project_id: Maybe<Scalars['Float']['output']>;
  sort: Maybe<Scalars['Float']['output']>;
  technology_id: Maybe<Scalars['Float']['output']>;
};

export type TProjectTechnologyFilter = {
  _and: InputMaybe<Array<InputMaybe<TProjectTechnologyFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TProjectTechnologyFilter>>>;
  id: InputMaybe<TNumberFilterOperators>;
  project_id: InputMaybe<TProjectFilter>;
  secondary: InputMaybe<TBooleanFilterOperators>;
  sort: InputMaybe<TNumberFilterOperators>;
  technology_id: InputMaybe<TTechnologyFilter>;
};

export type TProjectTechnologyMutated = {
  __typename?: 'project_technology_mutated';
  data: Maybe<TProjectTechnology>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TProjectTranslations = {
  __typename?: 'project_translations';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<TLanguages>;
  project_id: Maybe<TProject>;
};


export type TProjectTranslationsLanguagesCodeArgs = {
  filter: InputMaybe<TLanguagesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TProjectTranslationsProjectIdArgs = {
  filter: InputMaybe<TProjectFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TProjectTranslationsAggregated = {
  __typename?: 'project_translations_aggregated';
  avg: Maybe<TProjectTranslationsAggregatedFields>;
  avgDistinct: Maybe<TProjectTranslationsAggregatedFields>;
  count: Maybe<TProjectTranslationsAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TProjectTranslationsAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TProjectTranslationsAggregatedFields>;
  min: Maybe<TProjectTranslationsAggregatedFields>;
  sum: Maybe<TProjectTranslationsAggregatedFields>;
  sumDistinct: Maybe<TProjectTranslationsAggregatedFields>;
};

export type TProjectTranslationsAggregatedCount = {
  __typename?: 'project_translations_aggregated_count';
  description: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  languages_code: Maybe<Scalars['Int']['output']>;
  project_id: Maybe<Scalars['Int']['output']>;
};

export type TProjectTranslationsAggregatedFields = {
  __typename?: 'project_translations_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  project_id: Maybe<Scalars['Float']['output']>;
};

export type TProjectTranslationsFilter = {
  _and: InputMaybe<Array<InputMaybe<TProjectTranslationsFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TProjectTranslationsFilter>>>;
  description: InputMaybe<TStringFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  languages_code: InputMaybe<TLanguagesFilter>;
  project_id: InputMaybe<TProjectFilter>;
};

export type TProjectTranslationsMutated = {
  __typename?: 'project_translations_mutated';
  data: Maybe<TProjectTranslations>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TReading = {
  __typename?: 'reading';
  id: Scalars['ID']['output'];
};

export type TReadingMutated = {
  __typename?: 'reading_mutated';
  data: Maybe<TReading>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TSecretBlog = {
  __typename?: 'secret_blog';
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<TDateFunctions>;
  elements: Maybe<Array<Maybe<TSecretBlogElements>>>;
  elements_func: Maybe<TCountFunctions>;
  id: Scalars['ID']['output'];
  image: Maybe<TDirectusFiles>;
  place: Maybe<Array<Maybe<TSecretBlogPlace>>>;
  place_func: Maybe<TCountFunctions>;
  slug: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


export type TSecretBlogElementsArgs = {
  filter: InputMaybe<TSecretBlogElementsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TSecretBlogImageArgs = {
  filter: InputMaybe<TDirectusFilesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TSecretBlogPlaceArgs = {
  filter: InputMaybe<TSecretBlogPlaceFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TSecretBlogAggregated = {
  __typename?: 'secret_blog_aggregated';
  avg: Maybe<TSecretBlogAggregatedFields>;
  avgDistinct: Maybe<TSecretBlogAggregatedFields>;
  count: Maybe<TSecretBlogAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TSecretBlogAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TSecretBlogAggregatedFields>;
  min: Maybe<TSecretBlogAggregatedFields>;
  sum: Maybe<TSecretBlogAggregatedFields>;
  sumDistinct: Maybe<TSecretBlogAggregatedFields>;
};

export type TSecretBlogAggregatedCount = {
  __typename?: 'secret_blog_aggregated_count';
  date_created: Maybe<Scalars['Int']['output']>;
  elements: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  image: Maybe<Scalars['Int']['output']>;
  place: Maybe<Scalars['Int']['output']>;
  slug: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['Int']['output']>;
  title: Maybe<Scalars['Int']['output']>;
};

export type TSecretBlogAggregatedFields = {
  __typename?: 'secret_blog_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type TSecretBlogElements = {
  __typename?: 'secret_blog_elements';
  collection: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item: Maybe<TSecretBlogElementsItemUnion>;
  secret_blog_id: Maybe<TSecretBlog>;
  sort: Maybe<Scalars['Int']['output']>;
};


export type TSecretBlogElementsSecretBlogIdArgs = {
  filter: InputMaybe<TSecretBlogFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TSecretBlogElementsAggregated = {
  __typename?: 'secret_blog_elements_aggregated';
  avg: Maybe<TSecretBlogElementsAggregatedFields>;
  avgDistinct: Maybe<TSecretBlogElementsAggregatedFields>;
  count: Maybe<TSecretBlogElementsAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TSecretBlogElementsAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TSecretBlogElementsAggregatedFields>;
  min: Maybe<TSecretBlogElementsAggregatedFields>;
  sum: Maybe<TSecretBlogElementsAggregatedFields>;
  sumDistinct: Maybe<TSecretBlogElementsAggregatedFields>;
};

export type TSecretBlogElementsAggregatedCount = {
  __typename?: 'secret_blog_elements_aggregated_count';
  collection: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  item: Maybe<Scalars['Int']['output']>;
  secret_blog_id: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
};

export type TSecretBlogElementsAggregatedFields = {
  __typename?: 'secret_blog_elements_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  secret_blog_id: Maybe<Scalars['Float']['output']>;
  sort: Maybe<Scalars['Float']['output']>;
};

export type TSecretBlogElementsFilter = {
  _and: InputMaybe<Array<InputMaybe<TSecretBlogElementsFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TSecretBlogElementsFilter>>>;
  collection: InputMaybe<TStringFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  item__blog_image: InputMaybe<TBlogImageFilter>;
  item__blog_map: InputMaybe<TBlogMapFilter>;
  item__blog_quote: InputMaybe<TBlogQuoteFilter>;
  item__blog_text: InputMaybe<TBlogTextFilter>;
  item__blog_title: InputMaybe<TBlogTitleFilter>;
  item__blog_video: InputMaybe<TBlogVideoFilter>;
  secret_blog_id: InputMaybe<TSecretBlogFilter>;
  sort: InputMaybe<TNumberFilterOperators>;
};

export type TSecretBlogElementsItemUnion = TBlogImage | TBlogMap | TBlogQuote | TBlogText | TBlogTitle | TBlogVideo;

export type TSecretBlogElementsMutated = {
  __typename?: 'secret_blog_elements_mutated';
  data: Maybe<TSecretBlogElements>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TSecretBlogFilter = {
  _and: InputMaybe<Array<InputMaybe<TSecretBlogFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TSecretBlogFilter>>>;
  date_created: InputMaybe<TDateFilterOperators>;
  date_created_func: InputMaybe<TDateFunctionFilterOperators>;
  elements: InputMaybe<TSecretBlogElementsFilter>;
  elements_func: InputMaybe<TCountFunctionFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  image: InputMaybe<TDirectusFilesFilter>;
  place: InputMaybe<TSecretBlogPlaceFilter>;
  place_func: InputMaybe<TCountFunctionFilterOperators>;
  slug: InputMaybe<TStringFilterOperators>;
  status: InputMaybe<TStringFilterOperators>;
  title: InputMaybe<TStringFilterOperators>;
};

export type TSecretBlogMutated = {
  __typename?: 'secret_blog_mutated';
  data: Maybe<TSecretBlog>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TSecretBlogPlace = {
  __typename?: 'secret_blog_place';
  id: Scalars['ID']['output'];
  place_id: Maybe<TPlace>;
  secret_blog_id: Maybe<TSecretBlog>;
};


export type TSecretBlogPlacePlaceIdArgs = {
  filter: InputMaybe<TPlaceFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TSecretBlogPlaceSecretBlogIdArgs = {
  filter: InputMaybe<TSecretBlogFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TSecretBlogPlaceAggregated = {
  __typename?: 'secret_blog_place_aggregated';
  avg: Maybe<TSecretBlogPlaceAggregatedFields>;
  avgDistinct: Maybe<TSecretBlogPlaceAggregatedFields>;
  count: Maybe<TSecretBlogPlaceAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TSecretBlogPlaceAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TSecretBlogPlaceAggregatedFields>;
  min: Maybe<TSecretBlogPlaceAggregatedFields>;
  sum: Maybe<TSecretBlogPlaceAggregatedFields>;
  sumDistinct: Maybe<TSecretBlogPlaceAggregatedFields>;
};

export type TSecretBlogPlaceAggregatedCount = {
  __typename?: 'secret_blog_place_aggregated_count';
  id: Maybe<Scalars['Int']['output']>;
  place_id: Maybe<Scalars['Int']['output']>;
  secret_blog_id: Maybe<Scalars['Int']['output']>;
};

export type TSecretBlogPlaceAggregatedFields = {
  __typename?: 'secret_blog_place_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  place_id: Maybe<Scalars['Float']['output']>;
  secret_blog_id: Maybe<Scalars['Float']['output']>;
};

export type TSecretBlogPlaceFilter = {
  _and: InputMaybe<Array<InputMaybe<TSecretBlogPlaceFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TSecretBlogPlaceFilter>>>;
  id: InputMaybe<TNumberFilterOperators>;
  place_id: InputMaybe<TPlaceFilter>;
  secret_blog_id: InputMaybe<TSecretBlogFilter>;
};

export type TSecretBlogPlaceMutated = {
  __typename?: 'secret_blog_place_mutated';
  data: Maybe<TSecretBlogPlace>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TStringFilterOperators = {
  _contains: InputMaybe<Scalars['String']['input']>;
  _empty: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with: InputMaybe<Scalars['String']['input']>;
  _eq: InputMaybe<Scalars['String']['input']>;
  _icontains: InputMaybe<Scalars['String']['input']>;
  _iends_with: InputMaybe<Scalars['String']['input']>;
  _in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _istarts_with: InputMaybe<Scalars['String']['input']>;
  _ncontains: InputMaybe<Scalars['String']['input']>;
  _nempty: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with: InputMaybe<Scalars['String']['input']>;
  _neq: InputMaybe<Scalars['String']['input']>;
  _niends_with: InputMaybe<Scalars['String']['input']>;
  _nin: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nistarts_with: InputMaybe<Scalars['String']['input']>;
  _nnull: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with: InputMaybe<Scalars['String']['input']>;
  _null: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with: InputMaybe<Scalars['String']['input']>;
};

export type TSubscribers = {
  __typename?: 'subscribers';
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<TDatetimeFunctions>;
  id: Scalars['ID']['output'];
  mail: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
};

export type TSubscribersAggregated = {
  __typename?: 'subscribers_aggregated';
  avg: Maybe<TSubscribersAggregatedFields>;
  avgDistinct: Maybe<TSubscribersAggregatedFields>;
  count: Maybe<TSubscribersAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TSubscribersAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TSubscribersAggregatedFields>;
  min: Maybe<TSubscribersAggregatedFields>;
  sum: Maybe<TSubscribersAggregatedFields>;
  sumDistinct: Maybe<TSubscribersAggregatedFields>;
};

export type TSubscribersAggregatedCount = {
  __typename?: 'subscribers_aggregated_count';
  date_created: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  mail: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['Int']['output']>;
};

export type TSubscribersAggregatedFields = {
  __typename?: 'subscribers_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type TSubscribersFilter = {
  _and: InputMaybe<Array<InputMaybe<TSubscribersFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TSubscribersFilter>>>;
  date_created: InputMaybe<TDateFilterOperators>;
  date_created_func: InputMaybe<TDatetimeFunctionFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  mail: InputMaybe<TStringFilterOperators>;
  name: InputMaybe<TStringFilterOperators>;
  status: InputMaybe<TStringFilterOperators>;
};

export type TSubscribersMutated = {
  __typename?: 'subscribers_mutated';
  data: Maybe<TSubscribers>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TTechnology = {
  __typename?: 'technology';
  blog: Maybe<Array<Maybe<TBlogTechnology>>>;
  blog_func: Maybe<TCountFunctions>;
  category: Maybe<TTechnologyCategory>;
  children: Maybe<Array<Maybe<TTechnology>>>;
  children_func: Maybe<TCountFunctions>;
  children_sort: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  id_parent: Maybe<TTechnology>;
  label: Maybe<Scalars['String']['output']>;
  list: Maybe<Scalars['Boolean']['output']>;
  preferred: Maybe<Scalars['Boolean']['output']>;
  projects: Maybe<Array<Maybe<TProjectTechnology>>>;
  projects_func: Maybe<TCountFunctions>;
  sort: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Array<Maybe<TTechnologyTranslations>>>;
  translations_func: Maybe<TCountFunctions>;
};


export type TTechnologyBlogArgs = {
  filter: InputMaybe<TBlogTechnologyFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TTechnologyCategoryArgs = {
  filter: InputMaybe<TTechnologyCategoryFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TTechnologyChildrenArgs = {
  filter: InputMaybe<TTechnologyFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TTechnologyIdParentArgs = {
  filter: InputMaybe<TTechnologyFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TTechnologyProjectsArgs = {
  filter: InputMaybe<TProjectTechnologyFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TTechnologyTranslationsArgs = {
  filter: InputMaybe<TTechnologyTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TTechnologyAggregated = {
  __typename?: 'technology_aggregated';
  avg: Maybe<TTechnologyAggregatedFields>;
  avgDistinct: Maybe<TTechnologyAggregatedFields>;
  count: Maybe<TTechnologyAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TTechnologyAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TTechnologyAggregatedFields>;
  min: Maybe<TTechnologyAggregatedFields>;
  sum: Maybe<TTechnologyAggregatedFields>;
  sumDistinct: Maybe<TTechnologyAggregatedFields>;
};

export type TTechnologyAggregatedCount = {
  __typename?: 'technology_aggregated_count';
  blog: Maybe<Scalars['Int']['output']>;
  category: Maybe<Scalars['Int']['output']>;
  children: Maybe<Scalars['Int']['output']>;
  children_sort: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  id_parent: Maybe<Scalars['Int']['output']>;
  label: Maybe<Scalars['Int']['output']>;
  list: Maybe<Scalars['Int']['output']>;
  preferred: Maybe<Scalars['Int']['output']>;
  projects: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Scalars['Int']['output']>;
};

export type TTechnologyAggregatedFields = {
  __typename?: 'technology_aggregated_fields';
  category: Maybe<Scalars['Float']['output']>;
  children_sort: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  id_parent: Maybe<Scalars['Float']['output']>;
  sort: Maybe<Scalars['Float']['output']>;
};

export type TTechnologyCategory = {
  __typename?: 'technology_category';
  id: Scalars['ID']['output'];
  label: Maybe<Scalars['String']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  technologies: Maybe<Array<Maybe<TTechnology>>>;
  technologies_func: Maybe<TCountFunctions>;
  translations: Maybe<Array<Maybe<TTechnologyCategoryTranslations>>>;
  translations_func: Maybe<TCountFunctions>;
};


export type TTechnologyCategoryTechnologiesArgs = {
  filter: InputMaybe<TTechnologyFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TTechnologyCategoryTranslationsArgs = {
  filter: InputMaybe<TTechnologyCategoryTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TTechnologyCategoryAggregated = {
  __typename?: 'technology_category_aggregated';
  avg: Maybe<TTechnologyCategoryAggregatedFields>;
  avgDistinct: Maybe<TTechnologyCategoryAggregatedFields>;
  count: Maybe<TTechnologyCategoryAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TTechnologyCategoryAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TTechnologyCategoryAggregatedFields>;
  min: Maybe<TTechnologyCategoryAggregatedFields>;
  sum: Maybe<TTechnologyCategoryAggregatedFields>;
  sumDistinct: Maybe<TTechnologyCategoryAggregatedFields>;
};

export type TTechnologyCategoryAggregatedCount = {
  __typename?: 'technology_category_aggregated_count';
  id: Maybe<Scalars['Int']['output']>;
  label: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  technologies: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Scalars['Int']['output']>;
};

export type TTechnologyCategoryAggregatedFields = {
  __typename?: 'technology_category_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  sort: Maybe<Scalars['Float']['output']>;
};

export type TTechnologyCategoryFilter = {
  _and: InputMaybe<Array<InputMaybe<TTechnologyCategoryFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TTechnologyCategoryFilter>>>;
  id: InputMaybe<TNumberFilterOperators>;
  label: InputMaybe<TStringFilterOperators>;
  sort: InputMaybe<TNumberFilterOperators>;
  technologies: InputMaybe<TTechnologyFilter>;
  technologies_func: InputMaybe<TCountFunctionFilterOperators>;
  translations: InputMaybe<TTechnologyCategoryTranslationsFilter>;
  translations_func: InputMaybe<TCountFunctionFilterOperators>;
};

export type TTechnologyCategoryMutated = {
  __typename?: 'technology_category_mutated';
  data: Maybe<TTechnologyCategory>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TTechnologyCategoryTranslations = {
  __typename?: 'technology_category_translations';
  id: Scalars['ID']['output'];
  languages_code: Maybe<TLanguages>;
  technology_category_id: Maybe<TTechnologyCategory>;
  title: Maybe<Scalars['String']['output']>;
};


export type TTechnologyCategoryTranslationsLanguagesCodeArgs = {
  filter: InputMaybe<TLanguagesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TTechnologyCategoryTranslationsTechnologyCategoryIdArgs = {
  filter: InputMaybe<TTechnologyCategoryFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TTechnologyCategoryTranslationsAggregated = {
  __typename?: 'technology_category_translations_aggregated';
  avg: Maybe<TTechnologyCategoryTranslationsAggregatedFields>;
  avgDistinct: Maybe<TTechnologyCategoryTranslationsAggregatedFields>;
  count: Maybe<TTechnologyCategoryTranslationsAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TTechnologyCategoryTranslationsAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TTechnologyCategoryTranslationsAggregatedFields>;
  min: Maybe<TTechnologyCategoryTranslationsAggregatedFields>;
  sum: Maybe<TTechnologyCategoryTranslationsAggregatedFields>;
  sumDistinct: Maybe<TTechnologyCategoryTranslationsAggregatedFields>;
};

export type TTechnologyCategoryTranslationsAggregatedCount = {
  __typename?: 'technology_category_translations_aggregated_count';
  id: Maybe<Scalars['Int']['output']>;
  languages_code: Maybe<Scalars['Int']['output']>;
  technology_category_id: Maybe<Scalars['Int']['output']>;
  title: Maybe<Scalars['Int']['output']>;
};

export type TTechnologyCategoryTranslationsAggregatedFields = {
  __typename?: 'technology_category_translations_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  technology_category_id: Maybe<Scalars['Float']['output']>;
};

export type TTechnologyCategoryTranslationsFilter = {
  _and: InputMaybe<Array<InputMaybe<TTechnologyCategoryTranslationsFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TTechnologyCategoryTranslationsFilter>>>;
  id: InputMaybe<TNumberFilterOperators>;
  languages_code: InputMaybe<TLanguagesFilter>;
  technology_category_id: InputMaybe<TTechnologyCategoryFilter>;
  title: InputMaybe<TStringFilterOperators>;
};

export type TTechnologyCategoryTranslationsMutated = {
  __typename?: 'technology_category_translations_mutated';
  data: Maybe<TTechnologyCategoryTranslations>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TTechnologyFilter = {
  _and: InputMaybe<Array<InputMaybe<TTechnologyFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TTechnologyFilter>>>;
  blog: InputMaybe<TBlogTechnologyFilter>;
  blog_func: InputMaybe<TCountFunctionFilterOperators>;
  category: InputMaybe<TTechnologyCategoryFilter>;
  children: InputMaybe<TTechnologyFilter>;
  children_func: InputMaybe<TCountFunctionFilterOperators>;
  children_sort: InputMaybe<TNumberFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  id_parent: InputMaybe<TTechnologyFilter>;
  label: InputMaybe<TStringFilterOperators>;
  list: InputMaybe<TBooleanFilterOperators>;
  preferred: InputMaybe<TBooleanFilterOperators>;
  projects: InputMaybe<TProjectTechnologyFilter>;
  projects_func: InputMaybe<TCountFunctionFilterOperators>;
  sort: InputMaybe<TNumberFilterOperators>;
  translations: InputMaybe<TTechnologyTranslationsFilter>;
  translations_func: InputMaybe<TCountFunctionFilterOperators>;
};

export type TTechnologyMutated = {
  __typename?: 'technology_mutated';
  data: Maybe<TTechnology>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TTechnologyTranslations = {
  __typename?: 'technology_translations';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<TLanguages>;
  technology_id: Maybe<TTechnology>;
};


export type TTechnologyTranslationsLanguagesCodeArgs = {
  filter: InputMaybe<TLanguagesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TTechnologyTranslationsTechnologyIdArgs = {
  filter: InputMaybe<TTechnologyFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TTechnologyTranslationsAggregated = {
  __typename?: 'technology_translations_aggregated';
  avg: Maybe<TTechnologyTranslationsAggregatedFields>;
  avgDistinct: Maybe<TTechnologyTranslationsAggregatedFields>;
  count: Maybe<TTechnologyTranslationsAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TTechnologyTranslationsAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TTechnologyTranslationsAggregatedFields>;
  min: Maybe<TTechnologyTranslationsAggregatedFields>;
  sum: Maybe<TTechnologyTranslationsAggregatedFields>;
  sumDistinct: Maybe<TTechnologyTranslationsAggregatedFields>;
};

export type TTechnologyTranslationsAggregatedCount = {
  __typename?: 'technology_translations_aggregated_count';
  description: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  languages_code: Maybe<Scalars['Int']['output']>;
  technology_id: Maybe<Scalars['Int']['output']>;
};

export type TTechnologyTranslationsAggregatedFields = {
  __typename?: 'technology_translations_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  technology_id: Maybe<Scalars['Float']['output']>;
};

export type TTechnologyTranslationsFilter = {
  _and: InputMaybe<Array<InputMaybe<TTechnologyTranslationsFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TTechnologyTranslationsFilter>>>;
  description: InputMaybe<TStringFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  languages_code: InputMaybe<TLanguagesFilter>;
  technology_id: InputMaybe<TTechnologyFilter>;
};

export type TTechnologyTranslationsMutated = {
  __typename?: 'technology_translations_mutated';
  data: Maybe<TTechnologyTranslations>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TTransportation = {
  __typename?: 'transportation';
  arrival: Scalars['Date']['output'];
  arrival_airport_code: Maybe<Scalars['String']['output']>;
  arrival_func: Maybe<TDatetimeFunctions>;
  company: Maybe<Scalars['String']['output']>;
  crosspacific: Scalars['Boolean']['output'];
  departure: Scalars['Date']['output'];
  departure_airport_code: Maybe<Scalars['String']['output']>;
  departure_func: Maybe<TDatetimeFunctions>;
  from: Maybe<TPlace>;
  id: Scalars['ID']['output'];
  number: Maybe<Scalars['String']['output']>;
  price: Maybe<Scalars['Float']['output']>;
  show_time: Scalars['Boolean']['output'];
  to: Maybe<TPlace>;
  type: Maybe<Scalars['String']['output']>;
  vessel: Maybe<Scalars['String']['output']>;
};


export type TTransportationFromArgs = {
  filter: InputMaybe<TPlaceFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TTransportationToArgs = {
  filter: InputMaybe<TPlaceFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TTransportationAggregated = {
  __typename?: 'transportation_aggregated';
  avg: Maybe<TTransportationAggregatedFields>;
  avgDistinct: Maybe<TTransportationAggregatedFields>;
  count: Maybe<TTransportationAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TTransportationAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TTransportationAggregatedFields>;
  min: Maybe<TTransportationAggregatedFields>;
  sum: Maybe<TTransportationAggregatedFields>;
  sumDistinct: Maybe<TTransportationAggregatedFields>;
};

export type TTransportationAggregatedCount = {
  __typename?: 'transportation_aggregated_count';
  arrival: Maybe<Scalars['Int']['output']>;
  arrival_airport_code: Maybe<Scalars['Int']['output']>;
  company: Maybe<Scalars['Int']['output']>;
  crosspacific: Maybe<Scalars['Int']['output']>;
  departure: Maybe<Scalars['Int']['output']>;
  departure_airport_code: Maybe<Scalars['Int']['output']>;
  from: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  number: Maybe<Scalars['Int']['output']>;
  price: Maybe<Scalars['Int']['output']>;
  show_time: Maybe<Scalars['Int']['output']>;
  to: Maybe<Scalars['Int']['output']>;
  type: Maybe<Scalars['Int']['output']>;
  vessel: Maybe<Scalars['Int']['output']>;
};

export type TTransportationAggregatedFields = {
  __typename?: 'transportation_aggregated_fields';
  from: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  price: Maybe<Scalars['Float']['output']>;
  to: Maybe<Scalars['Float']['output']>;
};

export type TTransportationFilter = {
  _and: InputMaybe<Array<InputMaybe<TTransportationFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TTransportationFilter>>>;
  arrival: InputMaybe<TDateFilterOperators>;
  arrival_airport_code: InputMaybe<TStringFilterOperators>;
  arrival_func: InputMaybe<TDatetimeFunctionFilterOperators>;
  company: InputMaybe<TStringFilterOperators>;
  crosspacific: InputMaybe<TBooleanFilterOperators>;
  departure: InputMaybe<TDateFilterOperators>;
  departure_airport_code: InputMaybe<TStringFilterOperators>;
  departure_func: InputMaybe<TDatetimeFunctionFilterOperators>;
  from: InputMaybe<TPlaceFilter>;
  id: InputMaybe<TNumberFilterOperators>;
  number: InputMaybe<TStringFilterOperators>;
  price: InputMaybe<TNumberFilterOperators>;
  show_time: InputMaybe<TBooleanFilterOperators>;
  to: InputMaybe<TPlaceFilter>;
  type: InputMaybe<TStringFilterOperators>;
  vessel: InputMaybe<TStringFilterOperators>;
};

export type TTransportationMutated = {
  __typename?: 'transportation_mutated';
  data: Maybe<TTransportation>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TTravel = {
  __typename?: 'travel';
  id: Scalars['ID']['output'];
};

export type TTravelMutated = {
  __typename?: 'travel_mutated';
  data: Maybe<TTravel>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TVersionAccommodation = {
  __typename?: 'version_accommodation';
  bookings: Maybe<Scalars['JSON']['output']>;
  bookings_func: Maybe<TCountFunctions>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  place: Maybe<Scalars['JSON']['output']>;
};

export type TVersionAuthor = {
  __typename?: 'version_author';
  books: Maybe<Scalars['JSON']['output']>;
  books_func: Maybe<TCountFunctions>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
};

export type TVersionAuthorBook = {
  __typename?: 'version_author_book';
  author_id: Maybe<Scalars['JSON']['output']>;
  book_id: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
};

export type TVersionBlog = {
  __typename?: 'version_blog';
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<TDateFunctions>;
  elements: Maybe<Scalars['JSON']['output']>;
  elements_func: Maybe<TCountFunctions>;
  id: Scalars['ID']['output'];
  slug: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  teaser_text: Maybe<Scalars['String']['output']>;
  technology: Maybe<Scalars['JSON']['output']>;
  technology_func: Maybe<TCountFunctions>;
  title: Maybe<Scalars['String']['output']>;
};

export type TVersionBlogElements = {
  __typename?: 'version_blog_elements';
  blog_id: Maybe<Scalars['JSON']['output']>;
  collection: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item: Maybe<Scalars['String']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
};

export type TVersionBlogImage = {
  __typename?: 'version_blog_image';
  caption: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Maybe<Scalars['JSON']['output']>;
  invert: Maybe<Scalars['Boolean']['output']>;
};

export type TVersionBlogMap = {
  __typename?: 'version_blog_map';
  id: Scalars['ID']['output'];
};

export type TVersionBlogQuote = {
  __typename?: 'version_blog_quote';
  author: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  text: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type TVersionBlogTechnology = {
  __typename?: 'version_blog_technology';
  blog_id: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  sort: Maybe<Scalars['Int']['output']>;
  technology_id: Maybe<Scalars['JSON']['output']>;
};

export type TVersionBlogText = {
  __typename?: 'version_blog_text';
  id: Scalars['ID']['output'];
  text: Maybe<Scalars['String']['output']>;
  word_count: Maybe<Scalars['String']['output']>;
};

export type TVersionBlogTitle = {
  __typename?: 'version_blog_title';
  id: Scalars['ID']['output'];
  level: Maybe<Scalars['String']['output']>;
  tag: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type TVersionBlogVideo = {
  __typename?: 'version_blog_video';
  id: Scalars['ID']['output'];
  url: Maybe<Scalars['String']['output']>;
};

export type TVersionBook = {
  __typename?: 'version_book';
  authors: Maybe<Scalars['JSON']['output']>;
  authors_func: Maybe<TCountFunctions>;
  book_series: Maybe<Scalars['JSON']['output']>;
  category: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Maybe<Scalars['String']['output']>;
  language: Maybe<Scalars['String']['output']>;
  number_in_series: Maybe<Scalars['Int']['output']>;
  number_in_year: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Scalars['Int']['output']>;
  positions: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Scalars['JSON']['output']>;
  translations_func: Maybe<TCountFunctions>;
  words: Maybe<Scalars['Int']['output']>;
  year: Maybe<Scalars['JSON']['output']>;
  year_published: Maybe<Scalars['String']['output']>;
};

export type TVersionBookSeries = {
  __typename?: 'version_book_series';
  books: Maybe<Scalars['JSON']['output']>;
  books_func: Maybe<TCountFunctions>;
  id: Scalars['ID']['output'];
  internal: Maybe<Scalars['String']['output']>;
  translations: Maybe<Scalars['JSON']['output']>;
  translations_func: Maybe<TCountFunctions>;
};

export type TVersionBookSeriesTranslations = {
  __typename?: 'version_book_series_translations';
  book_series_id: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<Scalars['JSON']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type TVersionBookTranslations = {
  __typename?: 'version_book_translations';
  book_id: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<Scalars['JSON']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type TVersionBookYear = {
  __typename?: 'version_book_year';
  books: Maybe<Scalars['JSON']['output']>;
  books_func: Maybe<TCountFunctions>;
  id: Scalars['ID']['output'];
  internal: Maybe<Scalars['String']['output']>;
  translations: Maybe<Scalars['JSON']['output']>;
  translations_func: Maybe<TCountFunctions>;
};

export type TVersionBookYearTranslations = {
  __typename?: 'version_book_year_translations';
  book_year_id: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<Scalars['JSON']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type TVersionBooking = {
  __typename?: 'version_booking';
  accommodation: Maybe<Scalars['JSON']['output']>;
  arrival: Maybe<Scalars['Date']['output']>;
  arrival_func: Maybe<TDatetimeFunctions>;
  booking: Maybe<Scalars['String']['output']>;
  departure: Maybe<Scalars['Date']['output']>;
  departure_func: Maybe<TDatetimeFunctions>;
  id: Scalars['ID']['output'];
  price_per_night: Maybe<Scalars['Float']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type TVersionCountry = {
  __typename?: 'version_country';
  alpha3: Maybe<Scalars['String']['output']>;
  currency_code: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Maybe<Scalars['String']['output']>;
  place: Maybe<Scalars['JSON']['output']>;
  place_func: Maybe<TCountFunctions>;
  translations: Maybe<Scalars['JSON']['output']>;
  translations_func: Maybe<TCountFunctions>;
};

export type TVersionCountryTranslations = {
  __typename?: 'version_country_translations';
  capital: Maybe<Scalars['String']['output']>;
  country_id: Maybe<Scalars['JSON']['output']>;
  currency: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<Scalars['JSON']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type TVersionLanguages = {
  __typename?: 'version_languages';
  abbreviation: Maybe<Scalars['String']['output']>;
  code: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
};

export type TVersionNavigation = {
  __typename?: 'version_navigation';
  id: Scalars['ID']['output'];
  image: Maybe<Scalars['JSON']['output']>;
  main_navigation_items: Maybe<Scalars['JSON']['output']>;
  main_navigation_items_func: Maybe<TCountFunctions>;
  misc_navigation_items: Maybe<Scalars['JSON']['output']>;
  misc_navigation_items_func: Maybe<TCountFunctions>;
  translations: Maybe<Scalars['JSON']['output']>;
  translations_func: Maybe<TCountFunctions>;
};

export type TVersionNavigationItem = {
  __typename?: 'version_navigation_item';
  active: Maybe<Scalars['Boolean']['output']>;
  icon: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  line: Maybe<Scalars['Boolean']['output']>;
  main_navigation: Maybe<Scalars['JSON']['output']>;
  misc_navigation: Maybe<Scalars['JSON']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Scalars['JSON']['output']>;
  translations_func: Maybe<TCountFunctions>;
  url: Maybe<Scalars['String']['output']>;
};

export type TVersionNavigationItemTranslations = {
  __typename?: 'version_navigation_item_translations';
  id: Scalars['ID']['output'];
  label: Maybe<Scalars['String']['output']>;
  languages_code: Maybe<Scalars['JSON']['output']>;
  navigation_item_id: Maybe<Scalars['JSON']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type TVersionNavigationTranslations = {
  __typename?: 'version_navigation_translations';
  contact: Maybe<Scalars['String']['output']>;
  cv: Maybe<Scalars['String']['output']>;
  dark: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language: Maybe<Scalars['String']['output']>;
  languages_code: Maybe<Scalars['JSON']['output']>;
  navigation_id: Maybe<Scalars['JSON']['output']>;
  search: Maybe<Scalars['String']['output']>;
};

export type TVersionNotFound = {
  __typename?: 'version_not_found';
  id: Scalars['ID']['output'];
  translations: Maybe<Scalars['JSON']['output']>;
  translations_func: Maybe<TCountFunctions>;
};

export type TVersionNotFoundTranslations = {
  __typename?: 'version_not_found_translations';
  button: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<Scalars['JSON']['output']>;
  navigation: Maybe<Scalars['String']['output']>;
  not_found_id: Maybe<Scalars['JSON']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type TVersionPlace = {
  __typename?: 'version_place';
  accommodation: Maybe<Scalars['JSON']['output']>;
  accommodation_func: Maybe<TCountFunctions>;
  album: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  internal: Maybe<Scalars['String']['output']>;
  location: Maybe<Scalars['GraphQLGeoJSON']['output']>;
  secret_blog: Maybe<Scalars['JSON']['output']>;
  secret_blog_func: Maybe<TCountFunctions>;
  translations: Maybe<Scalars['JSON']['output']>;
  translations_func: Maybe<TCountFunctions>;
  transportation: Maybe<Scalars['JSON']['output']>;
};

export type TVersionPlaceTranslations = {
  __typename?: 'version_place_translations';
  id: Scalars['ID']['output'];
  languages_code: Maybe<Scalars['JSON']['output']>;
  name: Maybe<Scalars['String']['output']>;
  place_id: Maybe<Scalars['JSON']['output']>;
};

export type TVersionProject = {
  __typename?: 'version_project';
  color: Maybe<Scalars['String']['output']>;
  gallery: Maybe<Scalars['JSON']['output']>;
  gallery_func: Maybe<TCountFunctions>;
  id: Scalars['ID']['output'];
  slug: Maybe<Scalars['String']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  technologies: Maybe<Scalars['JSON']['output']>;
  technologies_func: Maybe<TCountFunctions>;
  title: Maybe<Scalars['String']['output']>;
  translations: Maybe<Scalars['JSON']['output']>;
  translations_func: Maybe<TCountFunctions>;
  url: Maybe<Scalars['String']['output']>;
  work: Maybe<Scalars['JSON']['output']>;
  work_func: Maybe<TCountFunctions>;
};

export type TVersionProjectDirectusFiles = {
  __typename?: 'version_project_directus_files';
  directus_files_id: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  project_id: Maybe<Scalars['JSON']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
};

export type TVersionProjectTechnology = {
  __typename?: 'version_project_technology';
  id: Scalars['ID']['output'];
  project_id: Maybe<Scalars['JSON']['output']>;
  secondary: Maybe<Scalars['Boolean']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  technology_id: Maybe<Scalars['JSON']['output']>;
};

export type TVersionProjectTranslations = {
  __typename?: 'version_project_translations';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<Scalars['JSON']['output']>;
  project_id: Maybe<Scalars['JSON']['output']>;
};

export type TVersionReading = {
  __typename?: 'version_reading';
  id: Scalars['ID']['output'];
};

export type TVersionSecretBlog = {
  __typename?: 'version_secret_blog';
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<TDateFunctions>;
  elements: Maybe<Scalars['JSON']['output']>;
  elements_func: Maybe<TCountFunctions>;
  id: Scalars['ID']['output'];
  image: Maybe<Scalars['JSON']['output']>;
  place: Maybe<Scalars['JSON']['output']>;
  place_func: Maybe<TCountFunctions>;
  slug: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type TVersionSecretBlogElements = {
  __typename?: 'version_secret_blog_elements';
  collection: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item: Maybe<Scalars['String']['output']>;
  secret_blog_id: Maybe<Scalars['JSON']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
};

export type TVersionSecretBlogPlace = {
  __typename?: 'version_secret_blog_place';
  id: Scalars['ID']['output'];
  place_id: Maybe<Scalars['JSON']['output']>;
  secret_blog_id: Maybe<Scalars['JSON']['output']>;
};

export type TVersionSubscribers = {
  __typename?: 'version_subscribers';
  date_created: Maybe<Scalars['Date']['output']>;
  date_created_func: Maybe<TDatetimeFunctions>;
  id: Scalars['ID']['output'];
  mail: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
};

export type TVersionTechnology = {
  __typename?: 'version_technology';
  blog: Maybe<Scalars['JSON']['output']>;
  blog_func: Maybe<TCountFunctions>;
  category: Maybe<Scalars['JSON']['output']>;
  children: Maybe<Scalars['JSON']['output']>;
  children_func: Maybe<TCountFunctions>;
  children_sort: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  id_parent: Maybe<Scalars['JSON']['output']>;
  label: Maybe<Scalars['String']['output']>;
  list: Maybe<Scalars['Boolean']['output']>;
  preferred: Maybe<Scalars['Boolean']['output']>;
  projects: Maybe<Scalars['JSON']['output']>;
  projects_func: Maybe<TCountFunctions>;
  sort: Maybe<Scalars['Int']['output']>;
  translations: Maybe<Scalars['JSON']['output']>;
  translations_func: Maybe<TCountFunctions>;
};

export type TVersionTechnologyCategory = {
  __typename?: 'version_technology_category';
  id: Scalars['ID']['output'];
  label: Maybe<Scalars['String']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  technologies: Maybe<Scalars['JSON']['output']>;
  technologies_func: Maybe<TCountFunctions>;
  translations: Maybe<Scalars['JSON']['output']>;
  translations_func: Maybe<TCountFunctions>;
};

export type TVersionTechnologyCategoryTranslations = {
  __typename?: 'version_technology_category_translations';
  id: Scalars['ID']['output'];
  languages_code: Maybe<Scalars['JSON']['output']>;
  technology_category_id: Maybe<Scalars['JSON']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type TVersionTechnologyTranslations = {
  __typename?: 'version_technology_translations';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<Scalars['JSON']['output']>;
  technology_id: Maybe<Scalars['JSON']['output']>;
};

export type TVersionTransportation = {
  __typename?: 'version_transportation';
  arrival: Scalars['Date']['output'];
  arrival_airport_code: Maybe<Scalars['String']['output']>;
  arrival_func: Maybe<TDatetimeFunctions>;
  company: Maybe<Scalars['String']['output']>;
  crosspacific: Scalars['Boolean']['output'];
  departure: Scalars['Date']['output'];
  departure_airport_code: Maybe<Scalars['String']['output']>;
  departure_func: Maybe<TDatetimeFunctions>;
  from: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  number: Maybe<Scalars['String']['output']>;
  price: Maybe<Scalars['Float']['output']>;
  show_time: Scalars['Boolean']['output'];
  to: Maybe<Scalars['JSON']['output']>;
  type: Maybe<Scalars['String']['output']>;
  vessel: Maybe<Scalars['String']['output']>;
};

export type TVersionTravel = {
  __typename?: 'version_travel';
  id: Scalars['ID']['output'];
};

export type TVersionWebsite = {
  __typename?: 'version_website';
  dev_blog_image: Maybe<Scalars['JSON']['output']>;
  home_image: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  translations: Maybe<Scalars['JSON']['output']>;
  translations_func: Maybe<TCountFunctions>;
  travel_blog_image: Maybe<Scalars['JSON']['output']>;
};

export type TVersionWebsiteTranslations = {
  __typename?: 'version_website_translations';
  home_text: Maybe<Scalars['String']['output']>;
  home_title: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<Scalars['JSON']['output']>;
  website_id: Maybe<Scalars['JSON']['output']>;
};

export type TVersionWork = {
  __typename?: 'version_work';
  id: Scalars['ID']['output'];
  projects: Maybe<Scalars['JSON']['output']>;
  projects_func: Maybe<TCountFunctions>;
};

export type TVersionWorkProject = {
  __typename?: 'version_work_project';
  id: Scalars['ID']['output'];
  project_id: Maybe<Scalars['JSON']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  work_id: Maybe<Scalars['JSON']['output']>;
};

export type TWebsite = {
  __typename?: 'website';
  dev_blog_image: Maybe<TDirectusFiles>;
  home_image: Maybe<TDirectusFiles>;
  id: Scalars['ID']['output'];
  translations: Maybe<Array<Maybe<TWebsiteTranslations>>>;
  translations_func: Maybe<TCountFunctions>;
  travel_blog_image: Maybe<TDirectusFiles>;
};


export type TWebsiteDevBlogImageArgs = {
  filter: InputMaybe<TDirectusFilesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TWebsiteHomeImageArgs = {
  filter: InputMaybe<TDirectusFilesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TWebsiteTranslationsArgs = {
  filter: InputMaybe<TWebsiteTranslationsFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TWebsiteTravelBlogImageArgs = {
  filter: InputMaybe<TDirectusFilesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TWebsiteFilter = {
  _and: InputMaybe<Array<InputMaybe<TWebsiteFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TWebsiteFilter>>>;
  dev_blog_image: InputMaybe<TDirectusFilesFilter>;
  home_image: InputMaybe<TDirectusFilesFilter>;
  id: InputMaybe<TNumberFilterOperators>;
  translations: InputMaybe<TWebsiteTranslationsFilter>;
  translations_func: InputMaybe<TCountFunctionFilterOperators>;
  travel_blog_image: InputMaybe<TDirectusFilesFilter>;
};

export type TWebsiteMutated = {
  __typename?: 'website_mutated';
  data: Maybe<TWebsite>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TWebsiteTranslations = {
  __typename?: 'website_translations';
  home_text: Maybe<Scalars['String']['output']>;
  home_title: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languages_code: Maybe<TLanguages>;
  website_id: Maybe<TWebsite>;
};


export type TWebsiteTranslationsLanguagesCodeArgs = {
  filter: InputMaybe<TLanguagesFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TWebsiteTranslationsWebsiteIdArgs = {
  filter: InputMaybe<TWebsiteFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TWebsiteTranslationsAggregated = {
  __typename?: 'website_translations_aggregated';
  avg: Maybe<TWebsiteTranslationsAggregatedFields>;
  avgDistinct: Maybe<TWebsiteTranslationsAggregatedFields>;
  count: Maybe<TWebsiteTranslationsAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TWebsiteTranslationsAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TWebsiteTranslationsAggregatedFields>;
  min: Maybe<TWebsiteTranslationsAggregatedFields>;
  sum: Maybe<TWebsiteTranslationsAggregatedFields>;
  sumDistinct: Maybe<TWebsiteTranslationsAggregatedFields>;
};

export type TWebsiteTranslationsAggregatedCount = {
  __typename?: 'website_translations_aggregated_count';
  home_text: Maybe<Scalars['Int']['output']>;
  home_title: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  languages_code: Maybe<Scalars['Int']['output']>;
  website_id: Maybe<Scalars['Int']['output']>;
};

export type TWebsiteTranslationsAggregatedFields = {
  __typename?: 'website_translations_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  website_id: Maybe<Scalars['Float']['output']>;
};

export type TWebsiteTranslationsFilter = {
  _and: InputMaybe<Array<InputMaybe<TWebsiteTranslationsFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TWebsiteTranslationsFilter>>>;
  home_text: InputMaybe<TStringFilterOperators>;
  home_title: InputMaybe<TStringFilterOperators>;
  id: InputMaybe<TNumberFilterOperators>;
  languages_code: InputMaybe<TLanguagesFilter>;
  website_id: InputMaybe<TWebsiteFilter>;
};

export type TWebsiteTranslationsMutated = {
  __typename?: 'website_translations_mutated';
  data: Maybe<TWebsiteTranslations>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TWork = {
  __typename?: 'work';
  id: Scalars['ID']['output'];
  projects: Maybe<Array<Maybe<TWorkProject>>>;
  projects_func: Maybe<TCountFunctions>;
};


export type TWorkProjectsArgs = {
  filter: InputMaybe<TWorkProjectFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TWorkAggregated = {
  __typename?: 'work_aggregated';
  avg: Maybe<TWorkAggregatedFields>;
  avgDistinct: Maybe<TWorkAggregatedFields>;
  count: Maybe<TWorkAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TWorkAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TWorkAggregatedFields>;
  min: Maybe<TWorkAggregatedFields>;
  sum: Maybe<TWorkAggregatedFields>;
  sumDistinct: Maybe<TWorkAggregatedFields>;
};

export type TWorkAggregatedCount = {
  __typename?: 'work_aggregated_count';
  id: Maybe<Scalars['Int']['output']>;
  projects: Maybe<Scalars['Int']['output']>;
};

export type TWorkAggregatedFields = {
  __typename?: 'work_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type TWorkFilter = {
  _and: InputMaybe<Array<InputMaybe<TWorkFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TWorkFilter>>>;
  id: InputMaybe<TNumberFilterOperators>;
  projects: InputMaybe<TWorkProjectFilter>;
  projects_func: InputMaybe<TCountFunctionFilterOperators>;
};

export type TWorkMutated = {
  __typename?: 'work_mutated';
  data: Maybe<TWork>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};

export type TWorkProject = {
  __typename?: 'work_project';
  id: Scalars['ID']['output'];
  project_id: Maybe<TProject>;
  sort: Maybe<Scalars['Int']['output']>;
  work_id: Maybe<TWork>;
};


export type TWorkProjectProjectIdArgs = {
  filter: InputMaybe<TProjectFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TWorkProjectWorkIdArgs = {
  filter: InputMaybe<TWorkFilter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TWorkProjectAggregated = {
  __typename?: 'work_project_aggregated';
  avg: Maybe<TWorkProjectAggregatedFields>;
  avgDistinct: Maybe<TWorkProjectAggregatedFields>;
  count: Maybe<TWorkProjectAggregatedCount>;
  countAll: Maybe<Scalars['Int']['output']>;
  countDistinct: Maybe<TWorkProjectAggregatedCount>;
  group: Maybe<Scalars['JSON']['output']>;
  max: Maybe<TWorkProjectAggregatedFields>;
  min: Maybe<TWorkProjectAggregatedFields>;
  sum: Maybe<TWorkProjectAggregatedFields>;
  sumDistinct: Maybe<TWorkProjectAggregatedFields>;
};

export type TWorkProjectAggregatedCount = {
  __typename?: 'work_project_aggregated_count';
  id: Maybe<Scalars['Int']['output']>;
  project_id: Maybe<Scalars['Int']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  work_id: Maybe<Scalars['Int']['output']>;
};

export type TWorkProjectAggregatedFields = {
  __typename?: 'work_project_aggregated_fields';
  id: Maybe<Scalars['Float']['output']>;
  project_id: Maybe<Scalars['Float']['output']>;
  sort: Maybe<Scalars['Float']['output']>;
  work_id: Maybe<Scalars['Float']['output']>;
};

export type TWorkProjectFilter = {
  _and: InputMaybe<Array<InputMaybe<TWorkProjectFilter>>>;
  _or: InputMaybe<Array<InputMaybe<TWorkProjectFilter>>>;
  id: InputMaybe<TNumberFilterOperators>;
  project_id: InputMaybe<TProjectFilter>;
  sort: InputMaybe<TNumberFilterOperators>;
  work_id: InputMaybe<TWorkFilter>;
};

export type TWorkProjectMutated = {
  __typename?: 'work_project_mutated';
  data: Maybe<TWorkProject>;
  event: Maybe<TEventEnum>;
  key: Scalars['ID']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type TResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  blog_elements_item_union: ( TBlogImage ) | ( TBlogMap ) | ( TBlogQuote ) | ( TBlogText ) | ( TBlogTitle ) | ( TBlogVideo );
  secret_blog_elements_item_union: ( TBlogImage ) | ( TBlogMap ) | ( TBlogQuote ) | ( TBlogText ) | ( TBlogTitle ) | ( TBlogVideo );
};


/** Mapping between all available schema types and the resolvers types */
export type TResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  EventEnum: TEventEnum;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GraphQLBigInt: ResolverTypeWrapper<Scalars['GraphQLBigInt']['output']>;
  GraphQLGeoJSON: ResolverTypeWrapper<Scalars['GraphQLGeoJSON']['output']>;
  GraphQLStringOrFloat: ResolverTypeWrapper<Scalars['GraphQLStringOrFloat']['output']>;
  Hash: ResolverTypeWrapper<Scalars['Hash']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  accommodation: ResolverTypeWrapper<Omit<TAccommodation, 'bookings' | 'bookings_func' | 'place'> & { bookings: Maybe<Array<Maybe<TResolversTypes['booking']>>>, bookings_func: Maybe<TResolversTypes['count_functions']>, place: Maybe<TResolversTypes['place']> }>;
  accommodation_aggregated: ResolverTypeWrapper<TAccommodationAggregated>;
  accommodation_aggregated_count: ResolverTypeWrapper<TAccommodationAggregatedCount>;
  accommodation_aggregated_fields: ResolverTypeWrapper<TAccommodationAggregatedFields>;
  accommodation_filter: TAccommodationFilter;
  accommodation_mutated: ResolverTypeWrapper<Omit<TAccommodationMutated, 'data'> & { data: Maybe<TResolversTypes['accommodation']> }>;
  author: ResolverTypeWrapper<Omit<TAuthor, 'books' | 'books_func'> & { books: Maybe<Array<Maybe<TResolversTypes['author_book']>>>, books_func: Maybe<TResolversTypes['count_functions']> }>;
  author_aggregated: ResolverTypeWrapper<TAuthorAggregated>;
  author_aggregated_count: ResolverTypeWrapper<TAuthorAggregatedCount>;
  author_aggregated_fields: ResolverTypeWrapper<TAuthorAggregatedFields>;
  author_book: ResolverTypeWrapper<Omit<TAuthorBook, 'author_id' | 'book_id'> & { author_id: Maybe<TResolversTypes['author']>, book_id: Maybe<TResolversTypes['book']> }>;
  author_book_aggregated: ResolverTypeWrapper<TAuthorBookAggregated>;
  author_book_aggregated_count: ResolverTypeWrapper<TAuthorBookAggregatedCount>;
  author_book_aggregated_fields: ResolverTypeWrapper<TAuthorBookAggregatedFields>;
  author_book_filter: TAuthorBookFilter;
  author_book_mutated: ResolverTypeWrapper<Omit<TAuthorBookMutated, 'data'> & { data: Maybe<TResolversTypes['author_book']> }>;
  author_filter: TAuthorFilter;
  author_mutated: ResolverTypeWrapper<Omit<TAuthorMutated, 'data'> & { data: Maybe<TResolversTypes['author']> }>;
  big_int_filter_operators: TBigIntFilterOperators;
  blog: ResolverTypeWrapper<Omit<TBlog, 'date_created_func' | 'elements' | 'elements_func' | 'technology' | 'technology_func'> & { date_created_func: Maybe<TResolversTypes['date_functions']>, elements: Maybe<Array<Maybe<TResolversTypes['blog_elements']>>>, elements_func: Maybe<TResolversTypes['count_functions']>, technology: Maybe<Array<Maybe<TResolversTypes['blog_technology']>>>, technology_func: Maybe<TResolversTypes['count_functions']> }>;
  blog_aggregated: ResolverTypeWrapper<TBlogAggregated>;
  blog_aggregated_count: ResolverTypeWrapper<TBlogAggregatedCount>;
  blog_aggregated_fields: ResolverTypeWrapper<TBlogAggregatedFields>;
  blog_elements: ResolverTypeWrapper<Omit<TBlogElements, 'blog_id' | 'item'> & { blog_id: Maybe<TResolversTypes['blog']>, item: Maybe<TResolversTypes['blog_elements_item_union']> }>;
  blog_elements_aggregated: ResolverTypeWrapper<TBlogElementsAggregated>;
  blog_elements_aggregated_count: ResolverTypeWrapper<TBlogElementsAggregatedCount>;
  blog_elements_aggregated_fields: ResolverTypeWrapper<TBlogElementsAggregatedFields>;
  blog_elements_filter: TBlogElementsFilter;
  blog_elements_item_union: ResolverTypeWrapper<TResolversUnionTypes<TResolversTypes>['blog_elements_item_union']>;
  blog_elements_mutated: ResolverTypeWrapper<Omit<TBlogElementsMutated, 'data'> & { data: Maybe<TResolversTypes['blog_elements']> }>;
  blog_filter: TBlogFilter;
  blog_image: ResolverTypeWrapper<TBlogImage>;
  blog_image_aggregated: ResolverTypeWrapper<TBlogImageAggregated>;
  blog_image_aggregated_count: ResolverTypeWrapper<TBlogImageAggregatedCount>;
  blog_image_aggregated_fields: ResolverTypeWrapper<TBlogImageAggregatedFields>;
  blog_image_filter: TBlogImageFilter;
  blog_image_mutated: ResolverTypeWrapper<TBlogImageMutated>;
  blog_map: ResolverTypeWrapper<TBlogMap>;
  blog_map_aggregated: ResolverTypeWrapper<TBlogMapAggregated>;
  blog_map_aggregated_count: ResolverTypeWrapper<TBlogMapAggregatedCount>;
  blog_map_aggregated_fields: ResolverTypeWrapper<TBlogMapAggregatedFields>;
  blog_map_filter: TBlogMapFilter;
  blog_map_mutated: ResolverTypeWrapper<TBlogMapMutated>;
  blog_mutated: ResolverTypeWrapper<Omit<TBlogMutated, 'data'> & { data: Maybe<TResolversTypes['blog']> }>;
  blog_quote: ResolverTypeWrapper<TBlogQuote>;
  blog_quote_aggregated: ResolverTypeWrapper<TBlogQuoteAggregated>;
  blog_quote_aggregated_count: ResolverTypeWrapper<TBlogQuoteAggregatedCount>;
  blog_quote_aggregated_fields: ResolverTypeWrapper<TBlogQuoteAggregatedFields>;
  blog_quote_filter: TBlogQuoteFilter;
  blog_quote_mutated: ResolverTypeWrapper<TBlogQuoteMutated>;
  blog_technology: ResolverTypeWrapper<Omit<TBlogTechnology, 'blog_id' | 'technology_id'> & { blog_id: Maybe<TResolversTypes['blog']>, technology_id: Maybe<TResolversTypes['technology']> }>;
  blog_technology_aggregated: ResolverTypeWrapper<TBlogTechnologyAggregated>;
  blog_technology_aggregated_count: ResolverTypeWrapper<TBlogTechnologyAggregatedCount>;
  blog_technology_aggregated_fields: ResolverTypeWrapper<TBlogTechnologyAggregatedFields>;
  blog_technology_filter: TBlogTechnologyFilter;
  blog_technology_mutated: ResolverTypeWrapper<Omit<TBlogTechnologyMutated, 'data'> & { data: Maybe<TResolversTypes['blog_technology']> }>;
  blog_text: ResolverTypeWrapper<TBlogText>;
  blog_text_aggregated: ResolverTypeWrapper<TBlogTextAggregated>;
  blog_text_aggregated_count: ResolverTypeWrapper<TBlogTextAggregatedCount>;
  blog_text_aggregated_fields: ResolverTypeWrapper<TBlogTextAggregatedFields>;
  blog_text_filter: TBlogTextFilter;
  blog_text_mutated: ResolverTypeWrapper<TBlogTextMutated>;
  blog_title: ResolverTypeWrapper<TBlogTitle>;
  blog_title_aggregated: ResolverTypeWrapper<TBlogTitleAggregated>;
  blog_title_aggregated_count: ResolverTypeWrapper<TBlogTitleAggregatedCount>;
  blog_title_aggregated_fields: ResolverTypeWrapper<TBlogTitleAggregatedFields>;
  blog_title_filter: TBlogTitleFilter;
  blog_title_mutated: ResolverTypeWrapper<TBlogTitleMutated>;
  blog_video: ResolverTypeWrapper<TBlogVideo>;
  blog_video_aggregated: ResolverTypeWrapper<TBlogVideoAggregated>;
  blog_video_aggregated_count: ResolverTypeWrapper<TBlogVideoAggregatedCount>;
  blog_video_aggregated_fields: ResolverTypeWrapper<TBlogVideoAggregatedFields>;
  blog_video_filter: TBlogVideoFilter;
  blog_video_mutated: ResolverTypeWrapper<TBlogVideoMutated>;
  book: ResolverTypeWrapper<Omit<TBook, 'authors' | 'authors_func' | 'book_series' | 'translations' | 'translations_func' | 'year'> & { authors: Maybe<Array<Maybe<TResolversTypes['author_book']>>>, authors_func: Maybe<TResolversTypes['count_functions']>, book_series: Maybe<TResolversTypes['book_series']>, translations: Maybe<Array<Maybe<TResolversTypes['book_translations']>>>, translations_func: Maybe<TResolversTypes['count_functions']>, year: Maybe<TResolversTypes['book_year']> }>;
  book_aggregated: ResolverTypeWrapper<TBookAggregated>;
  book_aggregated_count: ResolverTypeWrapper<TBookAggregatedCount>;
  book_aggregated_fields: ResolverTypeWrapper<TBookAggregatedFields>;
  book_filter: TBookFilter;
  book_mutated: ResolverTypeWrapper<Omit<TBookMutated, 'data'> & { data: Maybe<TResolversTypes['book']> }>;
  book_series: ResolverTypeWrapper<Omit<TBookSeries, 'books' | 'books_func' | 'translations' | 'translations_func'> & { books: Maybe<Array<Maybe<TResolversTypes['book']>>>, books_func: Maybe<TResolversTypes['count_functions']>, translations: Maybe<Array<Maybe<TResolversTypes['book_series_translations']>>>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  book_series_aggregated: ResolverTypeWrapper<TBookSeriesAggregated>;
  book_series_aggregated_count: ResolverTypeWrapper<TBookSeriesAggregatedCount>;
  book_series_aggregated_fields: ResolverTypeWrapper<TBookSeriesAggregatedFields>;
  book_series_filter: TBookSeriesFilter;
  book_series_mutated: ResolverTypeWrapper<Omit<TBookSeriesMutated, 'data'> & { data: Maybe<TResolversTypes['book_series']> }>;
  book_series_translations: ResolverTypeWrapper<Omit<TBookSeriesTranslations, 'book_series_id'> & { book_series_id: Maybe<TResolversTypes['book_series']> }>;
  book_series_translations_aggregated: ResolverTypeWrapper<TBookSeriesTranslationsAggregated>;
  book_series_translations_aggregated_count: ResolverTypeWrapper<TBookSeriesTranslationsAggregatedCount>;
  book_series_translations_aggregated_fields: ResolverTypeWrapper<TBookSeriesTranslationsAggregatedFields>;
  book_series_translations_filter: TBookSeriesTranslationsFilter;
  book_series_translations_mutated: ResolverTypeWrapper<Omit<TBookSeriesTranslationsMutated, 'data'> & { data: Maybe<TResolversTypes['book_series_translations']> }>;
  book_translations: ResolverTypeWrapper<Omit<TBookTranslations, 'book_id'> & { book_id: Maybe<TResolversTypes['book']> }>;
  book_translations_aggregated: ResolverTypeWrapper<TBookTranslationsAggregated>;
  book_translations_aggregated_count: ResolverTypeWrapper<TBookTranslationsAggregatedCount>;
  book_translations_aggregated_fields: ResolverTypeWrapper<TBookTranslationsAggregatedFields>;
  book_translations_filter: TBookTranslationsFilter;
  book_translations_mutated: ResolverTypeWrapper<Omit<TBookTranslationsMutated, 'data'> & { data: Maybe<TResolversTypes['book_translations']> }>;
  book_year: ResolverTypeWrapper<Omit<TBookYear, 'books' | 'books_func' | 'translations' | 'translations_func'> & { books: Maybe<Array<Maybe<TResolversTypes['book']>>>, books_func: Maybe<TResolversTypes['count_functions']>, translations: Maybe<Array<Maybe<TResolversTypes['book_year_translations']>>>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  book_year_aggregated: ResolverTypeWrapper<TBookYearAggregated>;
  book_year_aggregated_count: ResolverTypeWrapper<TBookYearAggregatedCount>;
  book_year_aggregated_fields: ResolverTypeWrapper<TBookYearAggregatedFields>;
  book_year_filter: TBookYearFilter;
  book_year_mutated: ResolverTypeWrapper<Omit<TBookYearMutated, 'data'> & { data: Maybe<TResolversTypes['book_year']> }>;
  book_year_translations: ResolverTypeWrapper<Omit<TBookYearTranslations, 'book_year_id'> & { book_year_id: Maybe<TResolversTypes['book_year']> }>;
  book_year_translations_aggregated: ResolverTypeWrapper<TBookYearTranslationsAggregated>;
  book_year_translations_aggregated_count: ResolverTypeWrapper<TBookYearTranslationsAggregatedCount>;
  book_year_translations_aggregated_fields: ResolverTypeWrapper<TBookYearTranslationsAggregatedFields>;
  book_year_translations_filter: TBookYearTranslationsFilter;
  book_year_translations_mutated: ResolverTypeWrapper<Omit<TBookYearTranslationsMutated, 'data'> & { data: Maybe<TResolversTypes['book_year_translations']> }>;
  booking: ResolverTypeWrapper<Omit<TBooking, 'accommodation'> & { accommodation: Maybe<TResolversTypes['accommodation']> }>;
  booking_aggregated: ResolverTypeWrapper<TBookingAggregated>;
  booking_aggregated_count: ResolverTypeWrapper<TBookingAggregatedCount>;
  booking_aggregated_fields: ResolverTypeWrapper<TBookingAggregatedFields>;
  booking_filter: TBookingFilter;
  booking_mutated: ResolverTypeWrapper<Omit<TBookingMutated, 'data'> & { data: Maybe<TResolversTypes['booking']> }>;
  boolean_filter_operators: TBooleanFilterOperators;
  count_function_filter_operators: TCountFunctionFilterOperators;
  count_functions: ResolverTypeWrapper<TCountFunctions>;
  country: ResolverTypeWrapper<Omit<TCountry, 'place' | 'place_func' | 'translations_func'> & { place: Maybe<Array<Maybe<TResolversTypes['place']>>>, place_func: Maybe<TResolversTypes['count_functions']>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  country_aggregated: ResolverTypeWrapper<TCountryAggregated>;
  country_aggregated_count: ResolverTypeWrapper<TCountryAggregatedCount>;
  country_aggregated_fields: ResolverTypeWrapper<TCountryAggregatedFields>;
  country_filter: TCountryFilter;
  country_mutated: ResolverTypeWrapper<TCountryMutated>;
  country_translations: ResolverTypeWrapper<TCountryTranslations>;
  country_translations_aggregated: ResolverTypeWrapper<TCountryTranslationsAggregated>;
  country_translations_aggregated_count: ResolverTypeWrapper<TCountryTranslationsAggregatedCount>;
  country_translations_aggregated_fields: ResolverTypeWrapper<TCountryTranslationsAggregatedFields>;
  country_translations_filter: TCountryTranslationsFilter;
  country_translations_mutated: ResolverTypeWrapper<TCountryTranslationsMutated>;
  date_filter_operators: TDateFilterOperators;
  date_function_filter_operators: TDateFunctionFilterOperators;
  date_functions: ResolverTypeWrapper<TDateFunctions>;
  datetime_function_filter_operators: TDatetimeFunctionFilterOperators;
  datetime_functions: ResolverTypeWrapper<TDatetimeFunctions>;
  directus_files: ResolverTypeWrapper<Omit<TDirectusFiles, 'metadata_func' | 'tags_func' | 'tus_data_func'> & { metadata_func: Maybe<TResolversTypes['count_functions']>, tags_func: Maybe<TResolversTypes['count_functions']>, tus_data_func: Maybe<TResolversTypes['count_functions']> }>;
  directus_files_filter: TDirectusFilesFilter;
  directus_files_mutated: ResolverTypeWrapper<TDirectusFilesMutated>;
  directus_folders: ResolverTypeWrapper<TDirectusFolders>;
  directus_folders_filter: TDirectusFoldersFilter;
  directus_folders_mutated: ResolverTypeWrapper<TDirectusFoldersMutated>;
  directus_roles: ResolverTypeWrapper<Omit<TDirectusRoles, 'children_func' | 'policies_func' | 'users_func'> & { children_func: Maybe<TResolversTypes['count_functions']>, policies_func: Maybe<TResolversTypes['count_functions']>, users_func: Maybe<TResolversTypes['count_functions']> }>;
  directus_roles_filter: TDirectusRolesFilter;
  directus_roles_mutated: ResolverTypeWrapper<TDirectusRolesMutated>;
  directus_settings: ResolverTypeWrapper<Omit<TDirectusSettings, 'basemaps_func' | 'custom_aspect_ratios_func' | 'module_bar_func' | 'public_registration_email_filter_func' | 'storage_asset_presets_func' | 'theme_dark_overrides_func' | 'theme_light_overrides_func'> & { basemaps_func: Maybe<TResolversTypes['count_functions']>, custom_aspect_ratios_func: Maybe<TResolversTypes['count_functions']>, module_bar_func: Maybe<TResolversTypes['count_functions']>, public_registration_email_filter_func: Maybe<TResolversTypes['count_functions']>, storage_asset_presets_func: Maybe<TResolversTypes['count_functions']>, theme_dark_overrides_func: Maybe<TResolversTypes['count_functions']>, theme_light_overrides_func: Maybe<TResolversTypes['count_functions']> }>;
  directus_settings_mutated: ResolverTypeWrapper<Omit<TDirectusSettingsMutated, 'data'> & { data: Maybe<TResolversTypes['directus_settings']> }>;
  directus_users: ResolverTypeWrapper<Omit<TDirectusUsers, 'auth_data_func' | 'policies_func' | 'tags_func' | 'theme_dark_overrides_func' | 'theme_light_overrides_func'> & { auth_data_func: Maybe<TResolversTypes['count_functions']>, policies_func: Maybe<TResolversTypes['count_functions']>, tags_func: Maybe<TResolversTypes['count_functions']>, theme_dark_overrides_func: Maybe<TResolversTypes['count_functions']>, theme_light_overrides_func: Maybe<TResolversTypes['count_functions']> }>;
  directus_users_filter: TDirectusUsersFilter;
  directus_users_mutated: ResolverTypeWrapper<TDirectusUsersMutated>;
  geometry_filter_operators: TGeometryFilterOperators;
  hash_filter_operators: THashFilterOperators;
  languages: ResolverTypeWrapper<TLanguages>;
  languages_aggregated: ResolverTypeWrapper<TLanguagesAggregated>;
  languages_aggregated_count: ResolverTypeWrapper<TLanguagesAggregatedCount>;
  languages_filter: TLanguagesFilter;
  languages_mutated: ResolverTypeWrapper<TLanguagesMutated>;
  navigation: ResolverTypeWrapper<Omit<TNavigation, 'main_navigation_items' | 'main_navigation_items_func' | 'misc_navigation_items' | 'misc_navigation_items_func' | 'translations' | 'translations_func'> & { main_navigation_items: Maybe<Array<Maybe<TResolversTypes['navigation_item']>>>, main_navigation_items_func: Maybe<TResolversTypes['count_functions']>, misc_navigation_items: Maybe<Array<Maybe<TResolversTypes['navigation_item']>>>, misc_navigation_items_func: Maybe<TResolversTypes['count_functions']>, translations: Maybe<Array<Maybe<TResolversTypes['navigation_translations']>>>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  navigation_filter: TNavigationFilter;
  navigation_item: ResolverTypeWrapper<Omit<TNavigationItem, 'main_navigation' | 'misc_navigation' | 'translations' | 'translations_func'> & { main_navigation: Maybe<TResolversTypes['navigation']>, misc_navigation: Maybe<TResolversTypes['navigation']>, translations: Maybe<Array<Maybe<TResolversTypes['navigation_item_translations']>>>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  navigation_item_aggregated: ResolverTypeWrapper<TNavigationItemAggregated>;
  navigation_item_aggregated_count: ResolverTypeWrapper<TNavigationItemAggregatedCount>;
  navigation_item_aggregated_fields: ResolverTypeWrapper<TNavigationItemAggregatedFields>;
  navigation_item_filter: TNavigationItemFilter;
  navigation_item_mutated: ResolverTypeWrapper<Omit<TNavigationItemMutated, 'data'> & { data: Maybe<TResolversTypes['navigation_item']> }>;
  navigation_item_translations: ResolverTypeWrapper<Omit<TNavigationItemTranslations, 'navigation_item_id'> & { navigation_item_id: Maybe<TResolversTypes['navigation_item']> }>;
  navigation_item_translations_aggregated: ResolverTypeWrapper<TNavigationItemTranslationsAggregated>;
  navigation_item_translations_aggregated_count: ResolverTypeWrapper<TNavigationItemTranslationsAggregatedCount>;
  navigation_item_translations_aggregated_fields: ResolverTypeWrapper<TNavigationItemTranslationsAggregatedFields>;
  navigation_item_translations_filter: TNavigationItemTranslationsFilter;
  navigation_item_translations_mutated: ResolverTypeWrapper<Omit<TNavigationItemTranslationsMutated, 'data'> & { data: Maybe<TResolversTypes['navigation_item_translations']> }>;
  navigation_mutated: ResolverTypeWrapper<Omit<TNavigationMutated, 'data'> & { data: Maybe<TResolversTypes['navigation']> }>;
  navigation_translations: ResolverTypeWrapper<Omit<TNavigationTranslations, 'navigation_id'> & { navigation_id: Maybe<TResolversTypes['navigation']> }>;
  navigation_translations_aggregated: ResolverTypeWrapper<TNavigationTranslationsAggregated>;
  navigation_translations_aggregated_count: ResolverTypeWrapper<TNavigationTranslationsAggregatedCount>;
  navigation_translations_aggregated_fields: ResolverTypeWrapper<TNavigationTranslationsAggregatedFields>;
  navigation_translations_filter: TNavigationTranslationsFilter;
  navigation_translations_mutated: ResolverTypeWrapper<Omit<TNavigationTranslationsMutated, 'data'> & { data: Maybe<TResolversTypes['navigation_translations']> }>;
  not_found: ResolverTypeWrapper<Omit<TNotFound, 'translations' | 'translations_func'> & { translations: Maybe<Array<Maybe<TResolversTypes['not_found_translations']>>>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  not_found_filter: TNotFoundFilter;
  not_found_mutated: ResolverTypeWrapper<Omit<TNotFoundMutated, 'data'> & { data: Maybe<TResolversTypes['not_found']> }>;
  not_found_translations: ResolverTypeWrapper<Omit<TNotFoundTranslations, 'not_found_id'> & { not_found_id: Maybe<TResolversTypes['not_found']> }>;
  not_found_translations_aggregated: ResolverTypeWrapper<TNotFoundTranslationsAggregated>;
  not_found_translations_aggregated_count: ResolverTypeWrapper<TNotFoundTranslationsAggregatedCount>;
  not_found_translations_aggregated_fields: ResolverTypeWrapper<TNotFoundTranslationsAggregatedFields>;
  not_found_translations_filter: TNotFoundTranslationsFilter;
  not_found_translations_mutated: ResolverTypeWrapper<Omit<TNotFoundTranslationsMutated, 'data'> & { data: Maybe<TResolversTypes['not_found_translations']> }>;
  number_filter_operators: TNumberFilterOperators;
  place: ResolverTypeWrapper<Omit<TPlace, 'accommodation' | 'accommodation_func' | 'secret_blog' | 'secret_blog_func' | 'translations' | 'translations_func' | 'transportation'> & { accommodation: Maybe<Array<Maybe<TResolversTypes['accommodation']>>>, accommodation_func: Maybe<TResolversTypes['count_functions']>, secret_blog: Maybe<Array<Maybe<TResolversTypes['secret_blog_place']>>>, secret_blog_func: Maybe<TResolversTypes['count_functions']>, translations: Maybe<Array<Maybe<TResolversTypes['place_translations']>>>, translations_func: Maybe<TResolversTypes['count_functions']>, transportation: Maybe<Array<Maybe<TResolversTypes['transportation']>>> }>;
  place_aggregated: ResolverTypeWrapper<TPlaceAggregated>;
  place_aggregated_count: ResolverTypeWrapper<TPlaceAggregatedCount>;
  place_aggregated_fields: ResolverTypeWrapper<TPlaceAggregatedFields>;
  place_filter: TPlaceFilter;
  place_mutated: ResolverTypeWrapper<Omit<TPlaceMutated, 'data'> & { data: Maybe<TResolversTypes['place']> }>;
  place_translations: ResolverTypeWrapper<Omit<TPlaceTranslations, 'place_id'> & { place_id: Maybe<TResolversTypes['place']> }>;
  place_translations_aggregated: ResolverTypeWrapper<TPlaceTranslationsAggregated>;
  place_translations_aggregated_count: ResolverTypeWrapper<TPlaceTranslationsAggregatedCount>;
  place_translations_aggregated_fields: ResolverTypeWrapper<TPlaceTranslationsAggregatedFields>;
  place_translations_filter: TPlaceTranslationsFilter;
  place_translations_mutated: ResolverTypeWrapper<Omit<TPlaceTranslationsMutated, 'data'> & { data: Maybe<TResolversTypes['place_translations']> }>;
  project: ResolverTypeWrapper<Omit<TProject, 'gallery' | 'gallery_func' | 'technologies' | 'technologies_func' | 'translations' | 'translations_func' | 'work' | 'work_func'> & { gallery: Maybe<Array<Maybe<TResolversTypes['project_directus_files']>>>, gallery_func: Maybe<TResolversTypes['count_functions']>, technologies: Maybe<Array<Maybe<TResolversTypes['project_technology']>>>, technologies_func: Maybe<TResolversTypes['count_functions']>, translations: Maybe<Array<Maybe<TResolversTypes['project_translations']>>>, translations_func: Maybe<TResolversTypes['count_functions']>, work: Maybe<Array<Maybe<TResolversTypes['work_project']>>>, work_func: Maybe<TResolversTypes['count_functions']> }>;
  project_aggregated: ResolverTypeWrapper<TProjectAggregated>;
  project_aggregated_count: ResolverTypeWrapper<TProjectAggregatedCount>;
  project_aggregated_fields: ResolverTypeWrapper<TProjectAggregatedFields>;
  project_directus_files: ResolverTypeWrapper<Omit<TProjectDirectusFiles, 'project_id'> & { project_id: Maybe<TResolversTypes['project']> }>;
  project_directus_files_aggregated: ResolverTypeWrapper<TProjectDirectusFilesAggregated>;
  project_directus_files_aggregated_count: ResolverTypeWrapper<TProjectDirectusFilesAggregatedCount>;
  project_directus_files_aggregated_fields: ResolverTypeWrapper<TProjectDirectusFilesAggregatedFields>;
  project_directus_files_filter: TProjectDirectusFilesFilter;
  project_directus_files_mutated: ResolverTypeWrapper<Omit<TProjectDirectusFilesMutated, 'data'> & { data: Maybe<TResolversTypes['project_directus_files']> }>;
  project_filter: TProjectFilter;
  project_mutated: ResolverTypeWrapper<Omit<TProjectMutated, 'data'> & { data: Maybe<TResolversTypes['project']> }>;
  project_technology: ResolverTypeWrapper<Omit<TProjectTechnology, 'project_id' | 'technology_id'> & { project_id: Maybe<TResolversTypes['project']>, technology_id: Maybe<TResolversTypes['technology']> }>;
  project_technology_aggregated: ResolverTypeWrapper<TProjectTechnologyAggregated>;
  project_technology_aggregated_count: ResolverTypeWrapper<TProjectTechnologyAggregatedCount>;
  project_technology_aggregated_fields: ResolverTypeWrapper<TProjectTechnologyAggregatedFields>;
  project_technology_filter: TProjectTechnologyFilter;
  project_technology_mutated: ResolverTypeWrapper<Omit<TProjectTechnologyMutated, 'data'> & { data: Maybe<TResolversTypes['project_technology']> }>;
  project_translations: ResolverTypeWrapper<Omit<TProjectTranslations, 'project_id'> & { project_id: Maybe<TResolversTypes['project']> }>;
  project_translations_aggregated: ResolverTypeWrapper<TProjectTranslationsAggregated>;
  project_translations_aggregated_count: ResolverTypeWrapper<TProjectTranslationsAggregatedCount>;
  project_translations_aggregated_fields: ResolverTypeWrapper<TProjectTranslationsAggregatedFields>;
  project_translations_filter: TProjectTranslationsFilter;
  project_translations_mutated: ResolverTypeWrapper<Omit<TProjectTranslationsMutated, 'data'> & { data: Maybe<TResolversTypes['project_translations']> }>;
  reading: ResolverTypeWrapper<TReading>;
  reading_mutated: ResolverTypeWrapper<TReadingMutated>;
  secret_blog: ResolverTypeWrapper<Omit<TSecretBlog, 'date_created_func' | 'elements' | 'elements_func' | 'place' | 'place_func'> & { date_created_func: Maybe<TResolversTypes['date_functions']>, elements: Maybe<Array<Maybe<TResolversTypes['secret_blog_elements']>>>, elements_func: Maybe<TResolversTypes['count_functions']>, place: Maybe<Array<Maybe<TResolversTypes['secret_blog_place']>>>, place_func: Maybe<TResolversTypes['count_functions']> }>;
  secret_blog_aggregated: ResolverTypeWrapper<TSecretBlogAggregated>;
  secret_blog_aggregated_count: ResolverTypeWrapper<TSecretBlogAggregatedCount>;
  secret_blog_aggregated_fields: ResolverTypeWrapper<TSecretBlogAggregatedFields>;
  secret_blog_elements: ResolverTypeWrapper<Omit<TSecretBlogElements, 'item' | 'secret_blog_id'> & { item: Maybe<TResolversTypes['secret_blog_elements_item_union']>, secret_blog_id: Maybe<TResolversTypes['secret_blog']> }>;
  secret_blog_elements_aggregated: ResolverTypeWrapper<TSecretBlogElementsAggregated>;
  secret_blog_elements_aggregated_count: ResolverTypeWrapper<TSecretBlogElementsAggregatedCount>;
  secret_blog_elements_aggregated_fields: ResolverTypeWrapper<TSecretBlogElementsAggregatedFields>;
  secret_blog_elements_filter: TSecretBlogElementsFilter;
  secret_blog_elements_item_union: ResolverTypeWrapper<TResolversUnionTypes<TResolversTypes>['secret_blog_elements_item_union']>;
  secret_blog_elements_mutated: ResolverTypeWrapper<Omit<TSecretBlogElementsMutated, 'data'> & { data: Maybe<TResolversTypes['secret_blog_elements']> }>;
  secret_blog_filter: TSecretBlogFilter;
  secret_blog_mutated: ResolverTypeWrapper<Omit<TSecretBlogMutated, 'data'> & { data: Maybe<TResolversTypes['secret_blog']> }>;
  secret_blog_place: ResolverTypeWrapper<Omit<TSecretBlogPlace, 'place_id' | 'secret_blog_id'> & { place_id: Maybe<TResolversTypes['place']>, secret_blog_id: Maybe<TResolversTypes['secret_blog']> }>;
  secret_blog_place_aggregated: ResolverTypeWrapper<TSecretBlogPlaceAggregated>;
  secret_blog_place_aggregated_count: ResolverTypeWrapper<TSecretBlogPlaceAggregatedCount>;
  secret_blog_place_aggregated_fields: ResolverTypeWrapper<TSecretBlogPlaceAggregatedFields>;
  secret_blog_place_filter: TSecretBlogPlaceFilter;
  secret_blog_place_mutated: ResolverTypeWrapper<Omit<TSecretBlogPlaceMutated, 'data'> & { data: Maybe<TResolversTypes['secret_blog_place']> }>;
  string_filter_operators: TStringFilterOperators;
  subscribers: ResolverTypeWrapper<TSubscribers>;
  subscribers_aggregated: ResolverTypeWrapper<TSubscribersAggregated>;
  subscribers_aggregated_count: ResolverTypeWrapper<TSubscribersAggregatedCount>;
  subscribers_aggregated_fields: ResolverTypeWrapper<TSubscribersAggregatedFields>;
  subscribers_filter: TSubscribersFilter;
  subscribers_mutated: ResolverTypeWrapper<TSubscribersMutated>;
  technology: ResolverTypeWrapper<Omit<TTechnology, 'blog' | 'blog_func' | 'category' | 'children' | 'children_func' | 'id_parent' | 'projects' | 'projects_func' | 'translations' | 'translations_func'> & { blog: Maybe<Array<Maybe<TResolversTypes['blog_technology']>>>, blog_func: Maybe<TResolversTypes['count_functions']>, category: Maybe<TResolversTypes['technology_category']>, children: Maybe<Array<Maybe<TResolversTypes['technology']>>>, children_func: Maybe<TResolversTypes['count_functions']>, id_parent: Maybe<TResolversTypes['technology']>, projects: Maybe<Array<Maybe<TResolversTypes['project_technology']>>>, projects_func: Maybe<TResolversTypes['count_functions']>, translations: Maybe<Array<Maybe<TResolversTypes['technology_translations']>>>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  technology_aggregated: ResolverTypeWrapper<TTechnologyAggregated>;
  technology_aggregated_count: ResolverTypeWrapper<TTechnologyAggregatedCount>;
  technology_aggregated_fields: ResolverTypeWrapper<TTechnologyAggregatedFields>;
  technology_category: ResolverTypeWrapper<Omit<TTechnologyCategory, 'technologies' | 'technologies_func' | 'translations' | 'translations_func'> & { technologies: Maybe<Array<Maybe<TResolversTypes['technology']>>>, technologies_func: Maybe<TResolversTypes['count_functions']>, translations: Maybe<Array<Maybe<TResolversTypes['technology_category_translations']>>>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  technology_category_aggregated: ResolverTypeWrapper<TTechnologyCategoryAggregated>;
  technology_category_aggregated_count: ResolverTypeWrapper<TTechnologyCategoryAggregatedCount>;
  technology_category_aggregated_fields: ResolverTypeWrapper<TTechnologyCategoryAggregatedFields>;
  technology_category_filter: TTechnologyCategoryFilter;
  technology_category_mutated: ResolverTypeWrapper<Omit<TTechnologyCategoryMutated, 'data'> & { data: Maybe<TResolversTypes['technology_category']> }>;
  technology_category_translations: ResolverTypeWrapper<Omit<TTechnologyCategoryTranslations, 'technology_category_id'> & { technology_category_id: Maybe<TResolversTypes['technology_category']> }>;
  technology_category_translations_aggregated: ResolverTypeWrapper<TTechnologyCategoryTranslationsAggregated>;
  technology_category_translations_aggregated_count: ResolverTypeWrapper<TTechnologyCategoryTranslationsAggregatedCount>;
  technology_category_translations_aggregated_fields: ResolverTypeWrapper<TTechnologyCategoryTranslationsAggregatedFields>;
  technology_category_translations_filter: TTechnologyCategoryTranslationsFilter;
  technology_category_translations_mutated: ResolverTypeWrapper<Omit<TTechnologyCategoryTranslationsMutated, 'data'> & { data: Maybe<TResolversTypes['technology_category_translations']> }>;
  technology_filter: TTechnologyFilter;
  technology_mutated: ResolverTypeWrapper<Omit<TTechnologyMutated, 'data'> & { data: Maybe<TResolversTypes['technology']> }>;
  technology_translations: ResolverTypeWrapper<Omit<TTechnologyTranslations, 'technology_id'> & { technology_id: Maybe<TResolversTypes['technology']> }>;
  technology_translations_aggregated: ResolverTypeWrapper<TTechnologyTranslationsAggregated>;
  technology_translations_aggregated_count: ResolverTypeWrapper<TTechnologyTranslationsAggregatedCount>;
  technology_translations_aggregated_fields: ResolverTypeWrapper<TTechnologyTranslationsAggregatedFields>;
  technology_translations_filter: TTechnologyTranslationsFilter;
  technology_translations_mutated: ResolverTypeWrapper<Omit<TTechnologyTranslationsMutated, 'data'> & { data: Maybe<TResolversTypes['technology_translations']> }>;
  transportation: ResolverTypeWrapper<Omit<TTransportation, 'from' | 'to'> & { from: Maybe<TResolversTypes['place']>, to: Maybe<TResolversTypes['place']> }>;
  transportation_aggregated: ResolverTypeWrapper<TTransportationAggregated>;
  transportation_aggregated_count: ResolverTypeWrapper<TTransportationAggregatedCount>;
  transportation_aggregated_fields: ResolverTypeWrapper<TTransportationAggregatedFields>;
  transportation_filter: TTransportationFilter;
  transportation_mutated: ResolverTypeWrapper<Omit<TTransportationMutated, 'data'> & { data: Maybe<TResolversTypes['transportation']> }>;
  travel: ResolverTypeWrapper<TTravel>;
  travel_mutated: ResolverTypeWrapper<TTravelMutated>;
  version_accommodation: ResolverTypeWrapper<Omit<TVersionAccommodation, 'bookings_func'> & { bookings_func: Maybe<TResolversTypes['count_functions']> }>;
  version_author: ResolverTypeWrapper<Omit<TVersionAuthor, 'books_func'> & { books_func: Maybe<TResolversTypes['count_functions']> }>;
  version_author_book: ResolverTypeWrapper<TVersionAuthorBook>;
  version_blog: ResolverTypeWrapper<Omit<TVersionBlog, 'date_created_func' | 'elements_func' | 'technology_func'> & { date_created_func: Maybe<TResolversTypes['date_functions']>, elements_func: Maybe<TResolversTypes['count_functions']>, technology_func: Maybe<TResolversTypes['count_functions']> }>;
  version_blog_elements: ResolverTypeWrapper<TVersionBlogElements>;
  version_blog_image: ResolverTypeWrapper<TVersionBlogImage>;
  version_blog_map: ResolverTypeWrapper<TVersionBlogMap>;
  version_blog_quote: ResolverTypeWrapper<TVersionBlogQuote>;
  version_blog_technology: ResolverTypeWrapper<TVersionBlogTechnology>;
  version_blog_text: ResolverTypeWrapper<TVersionBlogText>;
  version_blog_title: ResolverTypeWrapper<TVersionBlogTitle>;
  version_blog_video: ResolverTypeWrapper<TVersionBlogVideo>;
  version_book: ResolverTypeWrapper<Omit<TVersionBook, 'authors_func' | 'translations_func'> & { authors_func: Maybe<TResolversTypes['count_functions']>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  version_book_series: ResolverTypeWrapper<Omit<TVersionBookSeries, 'books_func' | 'translations_func'> & { books_func: Maybe<TResolversTypes['count_functions']>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  version_book_series_translations: ResolverTypeWrapper<TVersionBookSeriesTranslations>;
  version_book_translations: ResolverTypeWrapper<TVersionBookTranslations>;
  version_book_year: ResolverTypeWrapper<Omit<TVersionBookYear, 'books_func' | 'translations_func'> & { books_func: Maybe<TResolversTypes['count_functions']>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  version_book_year_translations: ResolverTypeWrapper<TVersionBookYearTranslations>;
  version_booking: ResolverTypeWrapper<TVersionBooking>;
  version_country: ResolverTypeWrapper<Omit<TVersionCountry, 'place_func' | 'translations_func'> & { place_func: Maybe<TResolversTypes['count_functions']>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  version_country_translations: ResolverTypeWrapper<TVersionCountryTranslations>;
  version_languages: ResolverTypeWrapper<TVersionLanguages>;
  version_navigation: ResolverTypeWrapper<Omit<TVersionNavigation, 'main_navigation_items_func' | 'misc_navigation_items_func' | 'translations_func'> & { main_navigation_items_func: Maybe<TResolversTypes['count_functions']>, misc_navigation_items_func: Maybe<TResolversTypes['count_functions']>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  version_navigation_item: ResolverTypeWrapper<Omit<TVersionNavigationItem, 'translations_func'> & { translations_func: Maybe<TResolversTypes['count_functions']> }>;
  version_navigation_item_translations: ResolverTypeWrapper<TVersionNavigationItemTranslations>;
  version_navigation_translations: ResolverTypeWrapper<TVersionNavigationTranslations>;
  version_not_found: ResolverTypeWrapper<Omit<TVersionNotFound, 'translations_func'> & { translations_func: Maybe<TResolversTypes['count_functions']> }>;
  version_not_found_translations: ResolverTypeWrapper<TVersionNotFoundTranslations>;
  version_place: ResolverTypeWrapper<Omit<TVersionPlace, 'accommodation_func' | 'secret_blog_func' | 'translations_func'> & { accommodation_func: Maybe<TResolversTypes['count_functions']>, secret_blog_func: Maybe<TResolversTypes['count_functions']>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  version_place_translations: ResolverTypeWrapper<TVersionPlaceTranslations>;
  version_project: ResolverTypeWrapper<Omit<TVersionProject, 'gallery_func' | 'technologies_func' | 'translations_func' | 'work_func'> & { gallery_func: Maybe<TResolversTypes['count_functions']>, technologies_func: Maybe<TResolversTypes['count_functions']>, translations_func: Maybe<TResolversTypes['count_functions']>, work_func: Maybe<TResolversTypes['count_functions']> }>;
  version_project_directus_files: ResolverTypeWrapper<TVersionProjectDirectusFiles>;
  version_project_technology: ResolverTypeWrapper<TVersionProjectTechnology>;
  version_project_translations: ResolverTypeWrapper<TVersionProjectTranslations>;
  version_reading: ResolverTypeWrapper<TVersionReading>;
  version_secret_blog: ResolverTypeWrapper<Omit<TVersionSecretBlog, 'date_created_func' | 'elements_func' | 'place_func'> & { date_created_func: Maybe<TResolversTypes['date_functions']>, elements_func: Maybe<TResolversTypes['count_functions']>, place_func: Maybe<TResolversTypes['count_functions']> }>;
  version_secret_blog_elements: ResolverTypeWrapper<TVersionSecretBlogElements>;
  version_secret_blog_place: ResolverTypeWrapper<TVersionSecretBlogPlace>;
  version_subscribers: ResolverTypeWrapper<TVersionSubscribers>;
  version_technology: ResolverTypeWrapper<Omit<TVersionTechnology, 'blog_func' | 'children_func' | 'projects_func' | 'translations_func'> & { blog_func: Maybe<TResolversTypes['count_functions']>, children_func: Maybe<TResolversTypes['count_functions']>, projects_func: Maybe<TResolversTypes['count_functions']>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  version_technology_category: ResolverTypeWrapper<Omit<TVersionTechnologyCategory, 'technologies_func' | 'translations_func'> & { technologies_func: Maybe<TResolversTypes['count_functions']>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  version_technology_category_translations: ResolverTypeWrapper<TVersionTechnologyCategoryTranslations>;
  version_technology_translations: ResolverTypeWrapper<TVersionTechnologyTranslations>;
  version_transportation: ResolverTypeWrapper<TVersionTransportation>;
  version_travel: ResolverTypeWrapper<TVersionTravel>;
  version_website: ResolverTypeWrapper<Omit<TVersionWebsite, 'translations_func'> & { translations_func: Maybe<TResolversTypes['count_functions']> }>;
  version_website_translations: ResolverTypeWrapper<TVersionWebsiteTranslations>;
  version_work: ResolverTypeWrapper<Omit<TVersionWork, 'projects_func'> & { projects_func: Maybe<TResolversTypes['count_functions']> }>;
  version_work_project: ResolverTypeWrapper<TVersionWorkProject>;
  website: ResolverTypeWrapper<Omit<TWebsite, 'translations' | 'translations_func'> & { translations: Maybe<Array<Maybe<TResolversTypes['website_translations']>>>, translations_func: Maybe<TResolversTypes['count_functions']> }>;
  website_filter: TWebsiteFilter;
  website_mutated: ResolverTypeWrapper<Omit<TWebsiteMutated, 'data'> & { data: Maybe<TResolversTypes['website']> }>;
  website_translations: ResolverTypeWrapper<Omit<TWebsiteTranslations, 'website_id'> & { website_id: Maybe<TResolversTypes['website']> }>;
  website_translations_aggregated: ResolverTypeWrapper<TWebsiteTranslationsAggregated>;
  website_translations_aggregated_count: ResolverTypeWrapper<TWebsiteTranslationsAggregatedCount>;
  website_translations_aggregated_fields: ResolverTypeWrapper<TWebsiteTranslationsAggregatedFields>;
  website_translations_filter: TWebsiteTranslationsFilter;
  website_translations_mutated: ResolverTypeWrapper<Omit<TWebsiteTranslationsMutated, 'data'> & { data: Maybe<TResolversTypes['website_translations']> }>;
  work: ResolverTypeWrapper<Omit<TWork, 'projects' | 'projects_func'> & { projects: Maybe<Array<Maybe<TResolversTypes['work_project']>>>, projects_func: Maybe<TResolversTypes['count_functions']> }>;
  work_aggregated: ResolverTypeWrapper<TWorkAggregated>;
  work_aggregated_count: ResolverTypeWrapper<TWorkAggregatedCount>;
  work_aggregated_fields: ResolverTypeWrapper<TWorkAggregatedFields>;
  work_filter: TWorkFilter;
  work_mutated: ResolverTypeWrapper<Omit<TWorkMutated, 'data'> & { data: Maybe<TResolversTypes['work']> }>;
  work_project: ResolverTypeWrapper<Omit<TWorkProject, 'project_id' | 'work_id'> & { project_id: Maybe<TResolversTypes['project']>, work_id: Maybe<TResolversTypes['work']> }>;
  work_project_aggregated: ResolverTypeWrapper<TWorkProjectAggregated>;
  work_project_aggregated_count: ResolverTypeWrapper<TWorkProjectAggregatedCount>;
  work_project_aggregated_fields: ResolverTypeWrapper<TWorkProjectAggregatedFields>;
  work_project_filter: TWorkProjectFilter;
  work_project_mutated: ResolverTypeWrapper<Omit<TWorkProjectMutated, 'data'> & { data: Maybe<TResolversTypes['work_project']> }>;
};

/** Mapping between all available schema types and the resolvers parents */
export type TResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Date: Scalars['Date']['output'];
  Float: Scalars['Float']['output'];
  GraphQLBigInt: Scalars['GraphQLBigInt']['output'];
  GraphQLGeoJSON: Scalars['GraphQLGeoJSON']['output'];
  GraphQLStringOrFloat: Scalars['GraphQLStringOrFloat']['output'];
  Hash: Scalars['Hash']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  Query: {};
  String: Scalars['String']['output'];
  Subscription: {};
  accommodation: Omit<TAccommodation, 'bookings' | 'bookings_func' | 'place'> & { bookings: Maybe<Array<Maybe<TResolversParentTypes['booking']>>>, bookings_func: Maybe<TResolversParentTypes['count_functions']>, place: Maybe<TResolversParentTypes['place']> };
  accommodation_aggregated: TAccommodationAggregated;
  accommodation_aggregated_count: TAccommodationAggregatedCount;
  accommodation_aggregated_fields: TAccommodationAggregatedFields;
  accommodation_filter: TAccommodationFilter;
  accommodation_mutated: Omit<TAccommodationMutated, 'data'> & { data: Maybe<TResolversParentTypes['accommodation']> };
  author: Omit<TAuthor, 'books' | 'books_func'> & { books: Maybe<Array<Maybe<TResolversParentTypes['author_book']>>>, books_func: Maybe<TResolversParentTypes['count_functions']> };
  author_aggregated: TAuthorAggregated;
  author_aggregated_count: TAuthorAggregatedCount;
  author_aggregated_fields: TAuthorAggregatedFields;
  author_book: Omit<TAuthorBook, 'author_id' | 'book_id'> & { author_id: Maybe<TResolversParentTypes['author']>, book_id: Maybe<TResolversParentTypes['book']> };
  author_book_aggregated: TAuthorBookAggregated;
  author_book_aggregated_count: TAuthorBookAggregatedCount;
  author_book_aggregated_fields: TAuthorBookAggregatedFields;
  author_book_filter: TAuthorBookFilter;
  author_book_mutated: Omit<TAuthorBookMutated, 'data'> & { data: Maybe<TResolversParentTypes['author_book']> };
  author_filter: TAuthorFilter;
  author_mutated: Omit<TAuthorMutated, 'data'> & { data: Maybe<TResolversParentTypes['author']> };
  big_int_filter_operators: TBigIntFilterOperators;
  blog: Omit<TBlog, 'date_created_func' | 'elements' | 'elements_func' | 'technology' | 'technology_func'> & { date_created_func: Maybe<TResolversParentTypes['date_functions']>, elements: Maybe<Array<Maybe<TResolversParentTypes['blog_elements']>>>, elements_func: Maybe<TResolversParentTypes['count_functions']>, technology: Maybe<Array<Maybe<TResolversParentTypes['blog_technology']>>>, technology_func: Maybe<TResolversParentTypes['count_functions']> };
  blog_aggregated: TBlogAggregated;
  blog_aggregated_count: TBlogAggregatedCount;
  blog_aggregated_fields: TBlogAggregatedFields;
  blog_elements: Omit<TBlogElements, 'blog_id' | 'item'> & { blog_id: Maybe<TResolversParentTypes['blog']>, item: Maybe<TResolversParentTypes['blog_elements_item_union']> };
  blog_elements_aggregated: TBlogElementsAggregated;
  blog_elements_aggregated_count: TBlogElementsAggregatedCount;
  blog_elements_aggregated_fields: TBlogElementsAggregatedFields;
  blog_elements_filter: TBlogElementsFilter;
  blog_elements_item_union: TResolversUnionTypes<TResolversParentTypes>['blog_elements_item_union'];
  blog_elements_mutated: Omit<TBlogElementsMutated, 'data'> & { data: Maybe<TResolversParentTypes['blog_elements']> };
  blog_filter: TBlogFilter;
  blog_image: TBlogImage;
  blog_image_aggregated: TBlogImageAggregated;
  blog_image_aggregated_count: TBlogImageAggregatedCount;
  blog_image_aggregated_fields: TBlogImageAggregatedFields;
  blog_image_filter: TBlogImageFilter;
  blog_image_mutated: TBlogImageMutated;
  blog_map: TBlogMap;
  blog_map_aggregated: TBlogMapAggregated;
  blog_map_aggregated_count: TBlogMapAggregatedCount;
  blog_map_aggregated_fields: TBlogMapAggregatedFields;
  blog_map_filter: TBlogMapFilter;
  blog_map_mutated: TBlogMapMutated;
  blog_mutated: Omit<TBlogMutated, 'data'> & { data: Maybe<TResolversParentTypes['blog']> };
  blog_quote: TBlogQuote;
  blog_quote_aggregated: TBlogQuoteAggregated;
  blog_quote_aggregated_count: TBlogQuoteAggregatedCount;
  blog_quote_aggregated_fields: TBlogQuoteAggregatedFields;
  blog_quote_filter: TBlogQuoteFilter;
  blog_quote_mutated: TBlogQuoteMutated;
  blog_technology: Omit<TBlogTechnology, 'blog_id' | 'technology_id'> & { blog_id: Maybe<TResolversParentTypes['blog']>, technology_id: Maybe<TResolversParentTypes['technology']> };
  blog_technology_aggregated: TBlogTechnologyAggregated;
  blog_technology_aggregated_count: TBlogTechnologyAggregatedCount;
  blog_technology_aggregated_fields: TBlogTechnologyAggregatedFields;
  blog_technology_filter: TBlogTechnologyFilter;
  blog_technology_mutated: Omit<TBlogTechnologyMutated, 'data'> & { data: Maybe<TResolversParentTypes['blog_technology']> };
  blog_text: TBlogText;
  blog_text_aggregated: TBlogTextAggregated;
  blog_text_aggregated_count: TBlogTextAggregatedCount;
  blog_text_aggregated_fields: TBlogTextAggregatedFields;
  blog_text_filter: TBlogTextFilter;
  blog_text_mutated: TBlogTextMutated;
  blog_title: TBlogTitle;
  blog_title_aggregated: TBlogTitleAggregated;
  blog_title_aggregated_count: TBlogTitleAggregatedCount;
  blog_title_aggregated_fields: TBlogTitleAggregatedFields;
  blog_title_filter: TBlogTitleFilter;
  blog_title_mutated: TBlogTitleMutated;
  blog_video: TBlogVideo;
  blog_video_aggregated: TBlogVideoAggregated;
  blog_video_aggregated_count: TBlogVideoAggregatedCount;
  blog_video_aggregated_fields: TBlogVideoAggregatedFields;
  blog_video_filter: TBlogVideoFilter;
  blog_video_mutated: TBlogVideoMutated;
  book: Omit<TBook, 'authors' | 'authors_func' | 'book_series' | 'translations' | 'translations_func' | 'year'> & { authors: Maybe<Array<Maybe<TResolversParentTypes['author_book']>>>, authors_func: Maybe<TResolversParentTypes['count_functions']>, book_series: Maybe<TResolversParentTypes['book_series']>, translations: Maybe<Array<Maybe<TResolversParentTypes['book_translations']>>>, translations_func: Maybe<TResolversParentTypes['count_functions']>, year: Maybe<TResolversParentTypes['book_year']> };
  book_aggregated: TBookAggregated;
  book_aggregated_count: TBookAggregatedCount;
  book_aggregated_fields: TBookAggregatedFields;
  book_filter: TBookFilter;
  book_mutated: Omit<TBookMutated, 'data'> & { data: Maybe<TResolversParentTypes['book']> };
  book_series: Omit<TBookSeries, 'books' | 'books_func' | 'translations' | 'translations_func'> & { books: Maybe<Array<Maybe<TResolversParentTypes['book']>>>, books_func: Maybe<TResolversParentTypes['count_functions']>, translations: Maybe<Array<Maybe<TResolversParentTypes['book_series_translations']>>>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  book_series_aggregated: TBookSeriesAggregated;
  book_series_aggregated_count: TBookSeriesAggregatedCount;
  book_series_aggregated_fields: TBookSeriesAggregatedFields;
  book_series_filter: TBookSeriesFilter;
  book_series_mutated: Omit<TBookSeriesMutated, 'data'> & { data: Maybe<TResolversParentTypes['book_series']> };
  book_series_translations: Omit<TBookSeriesTranslations, 'book_series_id'> & { book_series_id: Maybe<TResolversParentTypes['book_series']> };
  book_series_translations_aggregated: TBookSeriesTranslationsAggregated;
  book_series_translations_aggregated_count: TBookSeriesTranslationsAggregatedCount;
  book_series_translations_aggregated_fields: TBookSeriesTranslationsAggregatedFields;
  book_series_translations_filter: TBookSeriesTranslationsFilter;
  book_series_translations_mutated: Omit<TBookSeriesTranslationsMutated, 'data'> & { data: Maybe<TResolversParentTypes['book_series_translations']> };
  book_translations: Omit<TBookTranslations, 'book_id'> & { book_id: Maybe<TResolversParentTypes['book']> };
  book_translations_aggregated: TBookTranslationsAggregated;
  book_translations_aggregated_count: TBookTranslationsAggregatedCount;
  book_translations_aggregated_fields: TBookTranslationsAggregatedFields;
  book_translations_filter: TBookTranslationsFilter;
  book_translations_mutated: Omit<TBookTranslationsMutated, 'data'> & { data: Maybe<TResolversParentTypes['book_translations']> };
  book_year: Omit<TBookYear, 'books' | 'books_func' | 'translations' | 'translations_func'> & { books: Maybe<Array<Maybe<TResolversParentTypes['book']>>>, books_func: Maybe<TResolversParentTypes['count_functions']>, translations: Maybe<Array<Maybe<TResolversParentTypes['book_year_translations']>>>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  book_year_aggregated: TBookYearAggregated;
  book_year_aggregated_count: TBookYearAggregatedCount;
  book_year_aggregated_fields: TBookYearAggregatedFields;
  book_year_filter: TBookYearFilter;
  book_year_mutated: Omit<TBookYearMutated, 'data'> & { data: Maybe<TResolversParentTypes['book_year']> };
  book_year_translations: Omit<TBookYearTranslations, 'book_year_id'> & { book_year_id: Maybe<TResolversParentTypes['book_year']> };
  book_year_translations_aggregated: TBookYearTranslationsAggregated;
  book_year_translations_aggregated_count: TBookYearTranslationsAggregatedCount;
  book_year_translations_aggregated_fields: TBookYearTranslationsAggregatedFields;
  book_year_translations_filter: TBookYearTranslationsFilter;
  book_year_translations_mutated: Omit<TBookYearTranslationsMutated, 'data'> & { data: Maybe<TResolversParentTypes['book_year_translations']> };
  booking: Omit<TBooking, 'accommodation'> & { accommodation: Maybe<TResolversParentTypes['accommodation']> };
  booking_aggregated: TBookingAggregated;
  booking_aggregated_count: TBookingAggregatedCount;
  booking_aggregated_fields: TBookingAggregatedFields;
  booking_filter: TBookingFilter;
  booking_mutated: Omit<TBookingMutated, 'data'> & { data: Maybe<TResolversParentTypes['booking']> };
  boolean_filter_operators: TBooleanFilterOperators;
  count_function_filter_operators: TCountFunctionFilterOperators;
  count_functions: TCountFunctions;
  country: Omit<TCountry, 'place' | 'place_func' | 'translations_func'> & { place: Maybe<Array<Maybe<TResolversParentTypes['place']>>>, place_func: Maybe<TResolversParentTypes['count_functions']>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  country_aggregated: TCountryAggregated;
  country_aggregated_count: TCountryAggregatedCount;
  country_aggregated_fields: TCountryAggregatedFields;
  country_filter: TCountryFilter;
  country_mutated: TCountryMutated;
  country_translations: TCountryTranslations;
  country_translations_aggregated: TCountryTranslationsAggregated;
  country_translations_aggregated_count: TCountryTranslationsAggregatedCount;
  country_translations_aggregated_fields: TCountryTranslationsAggregatedFields;
  country_translations_filter: TCountryTranslationsFilter;
  country_translations_mutated: TCountryTranslationsMutated;
  date_filter_operators: TDateFilterOperators;
  date_function_filter_operators: TDateFunctionFilterOperators;
  date_functions: TDateFunctions;
  datetime_function_filter_operators: TDatetimeFunctionFilterOperators;
  datetime_functions: TDatetimeFunctions;
  directus_files: Omit<TDirectusFiles, 'metadata_func' | 'tags_func' | 'tus_data_func'> & { metadata_func: Maybe<TResolversParentTypes['count_functions']>, tags_func: Maybe<TResolversParentTypes['count_functions']>, tus_data_func: Maybe<TResolversParentTypes['count_functions']> };
  directus_files_filter: TDirectusFilesFilter;
  directus_files_mutated: TDirectusFilesMutated;
  directus_folders: TDirectusFolders;
  directus_folders_filter: TDirectusFoldersFilter;
  directus_folders_mutated: TDirectusFoldersMutated;
  directus_roles: Omit<TDirectusRoles, 'children_func' | 'policies_func' | 'users_func'> & { children_func: Maybe<TResolversParentTypes['count_functions']>, policies_func: Maybe<TResolversParentTypes['count_functions']>, users_func: Maybe<TResolversParentTypes['count_functions']> };
  directus_roles_filter: TDirectusRolesFilter;
  directus_roles_mutated: TDirectusRolesMutated;
  directus_settings: Omit<TDirectusSettings, 'basemaps_func' | 'custom_aspect_ratios_func' | 'module_bar_func' | 'public_registration_email_filter_func' | 'storage_asset_presets_func' | 'theme_dark_overrides_func' | 'theme_light_overrides_func'> & { basemaps_func: Maybe<TResolversParentTypes['count_functions']>, custom_aspect_ratios_func: Maybe<TResolversParentTypes['count_functions']>, module_bar_func: Maybe<TResolversParentTypes['count_functions']>, public_registration_email_filter_func: Maybe<TResolversParentTypes['count_functions']>, storage_asset_presets_func: Maybe<TResolversParentTypes['count_functions']>, theme_dark_overrides_func: Maybe<TResolversParentTypes['count_functions']>, theme_light_overrides_func: Maybe<TResolversParentTypes['count_functions']> };
  directus_settings_mutated: Omit<TDirectusSettingsMutated, 'data'> & { data: Maybe<TResolversParentTypes['directus_settings']> };
  directus_users: Omit<TDirectusUsers, 'auth_data_func' | 'policies_func' | 'tags_func' | 'theme_dark_overrides_func' | 'theme_light_overrides_func'> & { auth_data_func: Maybe<TResolversParentTypes['count_functions']>, policies_func: Maybe<TResolversParentTypes['count_functions']>, tags_func: Maybe<TResolversParentTypes['count_functions']>, theme_dark_overrides_func: Maybe<TResolversParentTypes['count_functions']>, theme_light_overrides_func: Maybe<TResolversParentTypes['count_functions']> };
  directus_users_filter: TDirectusUsersFilter;
  directus_users_mutated: TDirectusUsersMutated;
  geometry_filter_operators: TGeometryFilterOperators;
  hash_filter_operators: THashFilterOperators;
  languages: TLanguages;
  languages_aggregated: TLanguagesAggregated;
  languages_aggregated_count: TLanguagesAggregatedCount;
  languages_filter: TLanguagesFilter;
  languages_mutated: TLanguagesMutated;
  navigation: Omit<TNavigation, 'main_navigation_items' | 'main_navigation_items_func' | 'misc_navigation_items' | 'misc_navigation_items_func' | 'translations' | 'translations_func'> & { main_navigation_items: Maybe<Array<Maybe<TResolversParentTypes['navigation_item']>>>, main_navigation_items_func: Maybe<TResolversParentTypes['count_functions']>, misc_navigation_items: Maybe<Array<Maybe<TResolversParentTypes['navigation_item']>>>, misc_navigation_items_func: Maybe<TResolversParentTypes['count_functions']>, translations: Maybe<Array<Maybe<TResolversParentTypes['navigation_translations']>>>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  navigation_filter: TNavigationFilter;
  navigation_item: Omit<TNavigationItem, 'main_navigation' | 'misc_navigation' | 'translations' | 'translations_func'> & { main_navigation: Maybe<TResolversParentTypes['navigation']>, misc_navigation: Maybe<TResolversParentTypes['navigation']>, translations: Maybe<Array<Maybe<TResolversParentTypes['navigation_item_translations']>>>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  navigation_item_aggregated: TNavigationItemAggregated;
  navigation_item_aggregated_count: TNavigationItemAggregatedCount;
  navigation_item_aggregated_fields: TNavigationItemAggregatedFields;
  navigation_item_filter: TNavigationItemFilter;
  navigation_item_mutated: Omit<TNavigationItemMutated, 'data'> & { data: Maybe<TResolversParentTypes['navigation_item']> };
  navigation_item_translations: Omit<TNavigationItemTranslations, 'navigation_item_id'> & { navigation_item_id: Maybe<TResolversParentTypes['navigation_item']> };
  navigation_item_translations_aggregated: TNavigationItemTranslationsAggregated;
  navigation_item_translations_aggregated_count: TNavigationItemTranslationsAggregatedCount;
  navigation_item_translations_aggregated_fields: TNavigationItemTranslationsAggregatedFields;
  navigation_item_translations_filter: TNavigationItemTranslationsFilter;
  navigation_item_translations_mutated: Omit<TNavigationItemTranslationsMutated, 'data'> & { data: Maybe<TResolversParentTypes['navigation_item_translations']> };
  navigation_mutated: Omit<TNavigationMutated, 'data'> & { data: Maybe<TResolversParentTypes['navigation']> };
  navigation_translations: Omit<TNavigationTranslations, 'navigation_id'> & { navigation_id: Maybe<TResolversParentTypes['navigation']> };
  navigation_translations_aggregated: TNavigationTranslationsAggregated;
  navigation_translations_aggregated_count: TNavigationTranslationsAggregatedCount;
  navigation_translations_aggregated_fields: TNavigationTranslationsAggregatedFields;
  navigation_translations_filter: TNavigationTranslationsFilter;
  navigation_translations_mutated: Omit<TNavigationTranslationsMutated, 'data'> & { data: Maybe<TResolversParentTypes['navigation_translations']> };
  not_found: Omit<TNotFound, 'translations' | 'translations_func'> & { translations: Maybe<Array<Maybe<TResolversParentTypes['not_found_translations']>>>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  not_found_filter: TNotFoundFilter;
  not_found_mutated: Omit<TNotFoundMutated, 'data'> & { data: Maybe<TResolversParentTypes['not_found']> };
  not_found_translations: Omit<TNotFoundTranslations, 'not_found_id'> & { not_found_id: Maybe<TResolversParentTypes['not_found']> };
  not_found_translations_aggregated: TNotFoundTranslationsAggregated;
  not_found_translations_aggregated_count: TNotFoundTranslationsAggregatedCount;
  not_found_translations_aggregated_fields: TNotFoundTranslationsAggregatedFields;
  not_found_translations_filter: TNotFoundTranslationsFilter;
  not_found_translations_mutated: Omit<TNotFoundTranslationsMutated, 'data'> & { data: Maybe<TResolversParentTypes['not_found_translations']> };
  number_filter_operators: TNumberFilterOperators;
  place: Omit<TPlace, 'accommodation' | 'accommodation_func' | 'secret_blog' | 'secret_blog_func' | 'translations' | 'translations_func' | 'transportation'> & { accommodation: Maybe<Array<Maybe<TResolversParentTypes['accommodation']>>>, accommodation_func: Maybe<TResolversParentTypes['count_functions']>, secret_blog: Maybe<Array<Maybe<TResolversParentTypes['secret_blog_place']>>>, secret_blog_func: Maybe<TResolversParentTypes['count_functions']>, translations: Maybe<Array<Maybe<TResolversParentTypes['place_translations']>>>, translations_func: Maybe<TResolversParentTypes['count_functions']>, transportation: Maybe<Array<Maybe<TResolversParentTypes['transportation']>>> };
  place_aggregated: TPlaceAggregated;
  place_aggregated_count: TPlaceAggregatedCount;
  place_aggregated_fields: TPlaceAggregatedFields;
  place_filter: TPlaceFilter;
  place_mutated: Omit<TPlaceMutated, 'data'> & { data: Maybe<TResolversParentTypes['place']> };
  place_translations: Omit<TPlaceTranslations, 'place_id'> & { place_id: Maybe<TResolversParentTypes['place']> };
  place_translations_aggregated: TPlaceTranslationsAggregated;
  place_translations_aggregated_count: TPlaceTranslationsAggregatedCount;
  place_translations_aggregated_fields: TPlaceTranslationsAggregatedFields;
  place_translations_filter: TPlaceTranslationsFilter;
  place_translations_mutated: Omit<TPlaceTranslationsMutated, 'data'> & { data: Maybe<TResolversParentTypes['place_translations']> };
  project: Omit<TProject, 'gallery' | 'gallery_func' | 'technologies' | 'technologies_func' | 'translations' | 'translations_func' | 'work' | 'work_func'> & { gallery: Maybe<Array<Maybe<TResolversParentTypes['project_directus_files']>>>, gallery_func: Maybe<TResolversParentTypes['count_functions']>, technologies: Maybe<Array<Maybe<TResolversParentTypes['project_technology']>>>, technologies_func: Maybe<TResolversParentTypes['count_functions']>, translations: Maybe<Array<Maybe<TResolversParentTypes['project_translations']>>>, translations_func: Maybe<TResolversParentTypes['count_functions']>, work: Maybe<Array<Maybe<TResolversParentTypes['work_project']>>>, work_func: Maybe<TResolversParentTypes['count_functions']> };
  project_aggregated: TProjectAggregated;
  project_aggregated_count: TProjectAggregatedCount;
  project_aggregated_fields: TProjectAggregatedFields;
  project_directus_files: Omit<TProjectDirectusFiles, 'project_id'> & { project_id: Maybe<TResolversParentTypes['project']> };
  project_directus_files_aggregated: TProjectDirectusFilesAggregated;
  project_directus_files_aggregated_count: TProjectDirectusFilesAggregatedCount;
  project_directus_files_aggregated_fields: TProjectDirectusFilesAggregatedFields;
  project_directus_files_filter: TProjectDirectusFilesFilter;
  project_directus_files_mutated: Omit<TProjectDirectusFilesMutated, 'data'> & { data: Maybe<TResolversParentTypes['project_directus_files']> };
  project_filter: TProjectFilter;
  project_mutated: Omit<TProjectMutated, 'data'> & { data: Maybe<TResolversParentTypes['project']> };
  project_technology: Omit<TProjectTechnology, 'project_id' | 'technology_id'> & { project_id: Maybe<TResolversParentTypes['project']>, technology_id: Maybe<TResolversParentTypes['technology']> };
  project_technology_aggregated: TProjectTechnologyAggregated;
  project_technology_aggregated_count: TProjectTechnologyAggregatedCount;
  project_technology_aggregated_fields: TProjectTechnologyAggregatedFields;
  project_technology_filter: TProjectTechnologyFilter;
  project_technology_mutated: Omit<TProjectTechnologyMutated, 'data'> & { data: Maybe<TResolversParentTypes['project_technology']> };
  project_translations: Omit<TProjectTranslations, 'project_id'> & { project_id: Maybe<TResolversParentTypes['project']> };
  project_translations_aggregated: TProjectTranslationsAggregated;
  project_translations_aggregated_count: TProjectTranslationsAggregatedCount;
  project_translations_aggregated_fields: TProjectTranslationsAggregatedFields;
  project_translations_filter: TProjectTranslationsFilter;
  project_translations_mutated: Omit<TProjectTranslationsMutated, 'data'> & { data: Maybe<TResolversParentTypes['project_translations']> };
  reading: TReading;
  reading_mutated: TReadingMutated;
  secret_blog: Omit<TSecretBlog, 'date_created_func' | 'elements' | 'elements_func' | 'place' | 'place_func'> & { date_created_func: Maybe<TResolversParentTypes['date_functions']>, elements: Maybe<Array<Maybe<TResolversParentTypes['secret_blog_elements']>>>, elements_func: Maybe<TResolversParentTypes['count_functions']>, place: Maybe<Array<Maybe<TResolversParentTypes['secret_blog_place']>>>, place_func: Maybe<TResolversParentTypes['count_functions']> };
  secret_blog_aggregated: TSecretBlogAggregated;
  secret_blog_aggregated_count: TSecretBlogAggregatedCount;
  secret_blog_aggregated_fields: TSecretBlogAggregatedFields;
  secret_blog_elements: Omit<TSecretBlogElements, 'item' | 'secret_blog_id'> & { item: Maybe<TResolversParentTypes['secret_blog_elements_item_union']>, secret_blog_id: Maybe<TResolversParentTypes['secret_blog']> };
  secret_blog_elements_aggregated: TSecretBlogElementsAggregated;
  secret_blog_elements_aggregated_count: TSecretBlogElementsAggregatedCount;
  secret_blog_elements_aggregated_fields: TSecretBlogElementsAggregatedFields;
  secret_blog_elements_filter: TSecretBlogElementsFilter;
  secret_blog_elements_item_union: TResolversUnionTypes<TResolversParentTypes>['secret_blog_elements_item_union'];
  secret_blog_elements_mutated: Omit<TSecretBlogElementsMutated, 'data'> & { data: Maybe<TResolversParentTypes['secret_blog_elements']> };
  secret_blog_filter: TSecretBlogFilter;
  secret_blog_mutated: Omit<TSecretBlogMutated, 'data'> & { data: Maybe<TResolversParentTypes['secret_blog']> };
  secret_blog_place: Omit<TSecretBlogPlace, 'place_id' | 'secret_blog_id'> & { place_id: Maybe<TResolversParentTypes['place']>, secret_blog_id: Maybe<TResolversParentTypes['secret_blog']> };
  secret_blog_place_aggregated: TSecretBlogPlaceAggregated;
  secret_blog_place_aggregated_count: TSecretBlogPlaceAggregatedCount;
  secret_blog_place_aggregated_fields: TSecretBlogPlaceAggregatedFields;
  secret_blog_place_filter: TSecretBlogPlaceFilter;
  secret_blog_place_mutated: Omit<TSecretBlogPlaceMutated, 'data'> & { data: Maybe<TResolversParentTypes['secret_blog_place']> };
  string_filter_operators: TStringFilterOperators;
  subscribers: TSubscribers;
  subscribers_aggregated: TSubscribersAggregated;
  subscribers_aggregated_count: TSubscribersAggregatedCount;
  subscribers_aggregated_fields: TSubscribersAggregatedFields;
  subscribers_filter: TSubscribersFilter;
  subscribers_mutated: TSubscribersMutated;
  technology: Omit<TTechnology, 'blog' | 'blog_func' | 'category' | 'children' | 'children_func' | 'id_parent' | 'projects' | 'projects_func' | 'translations' | 'translations_func'> & { blog: Maybe<Array<Maybe<TResolversParentTypes['blog_technology']>>>, blog_func: Maybe<TResolversParentTypes['count_functions']>, category: Maybe<TResolversParentTypes['technology_category']>, children: Maybe<Array<Maybe<TResolversParentTypes['technology']>>>, children_func: Maybe<TResolversParentTypes['count_functions']>, id_parent: Maybe<TResolversParentTypes['technology']>, projects: Maybe<Array<Maybe<TResolversParentTypes['project_technology']>>>, projects_func: Maybe<TResolversParentTypes['count_functions']>, translations: Maybe<Array<Maybe<TResolversParentTypes['technology_translations']>>>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  technology_aggregated: TTechnologyAggregated;
  technology_aggregated_count: TTechnologyAggregatedCount;
  technology_aggregated_fields: TTechnologyAggregatedFields;
  technology_category: Omit<TTechnologyCategory, 'technologies' | 'technologies_func' | 'translations' | 'translations_func'> & { technologies: Maybe<Array<Maybe<TResolversParentTypes['technology']>>>, technologies_func: Maybe<TResolversParentTypes['count_functions']>, translations: Maybe<Array<Maybe<TResolversParentTypes['technology_category_translations']>>>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  technology_category_aggregated: TTechnologyCategoryAggregated;
  technology_category_aggregated_count: TTechnologyCategoryAggregatedCount;
  technology_category_aggregated_fields: TTechnologyCategoryAggregatedFields;
  technology_category_filter: TTechnologyCategoryFilter;
  technology_category_mutated: Omit<TTechnologyCategoryMutated, 'data'> & { data: Maybe<TResolversParentTypes['technology_category']> };
  technology_category_translations: Omit<TTechnologyCategoryTranslations, 'technology_category_id'> & { technology_category_id: Maybe<TResolversParentTypes['technology_category']> };
  technology_category_translations_aggregated: TTechnologyCategoryTranslationsAggregated;
  technology_category_translations_aggregated_count: TTechnologyCategoryTranslationsAggregatedCount;
  technology_category_translations_aggregated_fields: TTechnologyCategoryTranslationsAggregatedFields;
  technology_category_translations_filter: TTechnologyCategoryTranslationsFilter;
  technology_category_translations_mutated: Omit<TTechnologyCategoryTranslationsMutated, 'data'> & { data: Maybe<TResolversParentTypes['technology_category_translations']> };
  technology_filter: TTechnologyFilter;
  technology_mutated: Omit<TTechnologyMutated, 'data'> & { data: Maybe<TResolversParentTypes['technology']> };
  technology_translations: Omit<TTechnologyTranslations, 'technology_id'> & { technology_id: Maybe<TResolversParentTypes['technology']> };
  technology_translations_aggregated: TTechnologyTranslationsAggregated;
  technology_translations_aggregated_count: TTechnologyTranslationsAggregatedCount;
  technology_translations_aggregated_fields: TTechnologyTranslationsAggregatedFields;
  technology_translations_filter: TTechnologyTranslationsFilter;
  technology_translations_mutated: Omit<TTechnologyTranslationsMutated, 'data'> & { data: Maybe<TResolversParentTypes['technology_translations']> };
  transportation: Omit<TTransportation, 'from' | 'to'> & { from: Maybe<TResolversParentTypes['place']>, to: Maybe<TResolversParentTypes['place']> };
  transportation_aggregated: TTransportationAggregated;
  transportation_aggregated_count: TTransportationAggregatedCount;
  transportation_aggregated_fields: TTransportationAggregatedFields;
  transportation_filter: TTransportationFilter;
  transportation_mutated: Omit<TTransportationMutated, 'data'> & { data: Maybe<TResolversParentTypes['transportation']> };
  travel: TTravel;
  travel_mutated: TTravelMutated;
  version_accommodation: Omit<TVersionAccommodation, 'bookings_func'> & { bookings_func: Maybe<TResolversParentTypes['count_functions']> };
  version_author: Omit<TVersionAuthor, 'books_func'> & { books_func: Maybe<TResolversParentTypes['count_functions']> };
  version_author_book: TVersionAuthorBook;
  version_blog: Omit<TVersionBlog, 'date_created_func' | 'elements_func' | 'technology_func'> & { date_created_func: Maybe<TResolversParentTypes['date_functions']>, elements_func: Maybe<TResolversParentTypes['count_functions']>, technology_func: Maybe<TResolversParentTypes['count_functions']> };
  version_blog_elements: TVersionBlogElements;
  version_blog_image: TVersionBlogImage;
  version_blog_map: TVersionBlogMap;
  version_blog_quote: TVersionBlogQuote;
  version_blog_technology: TVersionBlogTechnology;
  version_blog_text: TVersionBlogText;
  version_blog_title: TVersionBlogTitle;
  version_blog_video: TVersionBlogVideo;
  version_book: Omit<TVersionBook, 'authors_func' | 'translations_func'> & { authors_func: Maybe<TResolversParentTypes['count_functions']>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  version_book_series: Omit<TVersionBookSeries, 'books_func' | 'translations_func'> & { books_func: Maybe<TResolversParentTypes['count_functions']>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  version_book_series_translations: TVersionBookSeriesTranslations;
  version_book_translations: TVersionBookTranslations;
  version_book_year: Omit<TVersionBookYear, 'books_func' | 'translations_func'> & { books_func: Maybe<TResolversParentTypes['count_functions']>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  version_book_year_translations: TVersionBookYearTranslations;
  version_booking: TVersionBooking;
  version_country: Omit<TVersionCountry, 'place_func' | 'translations_func'> & { place_func: Maybe<TResolversParentTypes['count_functions']>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  version_country_translations: TVersionCountryTranslations;
  version_languages: TVersionLanguages;
  version_navigation: Omit<TVersionNavigation, 'main_navigation_items_func' | 'misc_navigation_items_func' | 'translations_func'> & { main_navigation_items_func: Maybe<TResolversParentTypes['count_functions']>, misc_navigation_items_func: Maybe<TResolversParentTypes['count_functions']>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  version_navigation_item: Omit<TVersionNavigationItem, 'translations_func'> & { translations_func: Maybe<TResolversParentTypes['count_functions']> };
  version_navigation_item_translations: TVersionNavigationItemTranslations;
  version_navigation_translations: TVersionNavigationTranslations;
  version_not_found: Omit<TVersionNotFound, 'translations_func'> & { translations_func: Maybe<TResolversParentTypes['count_functions']> };
  version_not_found_translations: TVersionNotFoundTranslations;
  version_place: Omit<TVersionPlace, 'accommodation_func' | 'secret_blog_func' | 'translations_func'> & { accommodation_func: Maybe<TResolversParentTypes['count_functions']>, secret_blog_func: Maybe<TResolversParentTypes['count_functions']>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  version_place_translations: TVersionPlaceTranslations;
  version_project: Omit<TVersionProject, 'gallery_func' | 'technologies_func' | 'translations_func' | 'work_func'> & { gallery_func: Maybe<TResolversParentTypes['count_functions']>, technologies_func: Maybe<TResolversParentTypes['count_functions']>, translations_func: Maybe<TResolversParentTypes['count_functions']>, work_func: Maybe<TResolversParentTypes['count_functions']> };
  version_project_directus_files: TVersionProjectDirectusFiles;
  version_project_technology: TVersionProjectTechnology;
  version_project_translations: TVersionProjectTranslations;
  version_reading: TVersionReading;
  version_secret_blog: Omit<TVersionSecretBlog, 'date_created_func' | 'elements_func' | 'place_func'> & { date_created_func: Maybe<TResolversParentTypes['date_functions']>, elements_func: Maybe<TResolversParentTypes['count_functions']>, place_func: Maybe<TResolversParentTypes['count_functions']> };
  version_secret_blog_elements: TVersionSecretBlogElements;
  version_secret_blog_place: TVersionSecretBlogPlace;
  version_subscribers: TVersionSubscribers;
  version_technology: Omit<TVersionTechnology, 'blog_func' | 'children_func' | 'projects_func' | 'translations_func'> & { blog_func: Maybe<TResolversParentTypes['count_functions']>, children_func: Maybe<TResolversParentTypes['count_functions']>, projects_func: Maybe<TResolversParentTypes['count_functions']>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  version_technology_category: Omit<TVersionTechnologyCategory, 'technologies_func' | 'translations_func'> & { technologies_func: Maybe<TResolversParentTypes['count_functions']>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  version_technology_category_translations: TVersionTechnologyCategoryTranslations;
  version_technology_translations: TVersionTechnologyTranslations;
  version_transportation: TVersionTransportation;
  version_travel: TVersionTravel;
  version_website: Omit<TVersionWebsite, 'translations_func'> & { translations_func: Maybe<TResolversParentTypes['count_functions']> };
  version_website_translations: TVersionWebsiteTranslations;
  version_work: Omit<TVersionWork, 'projects_func'> & { projects_func: Maybe<TResolversParentTypes['count_functions']> };
  version_work_project: TVersionWorkProject;
  website: Omit<TWebsite, 'translations' | 'translations_func'> & { translations: Maybe<Array<Maybe<TResolversParentTypes['website_translations']>>>, translations_func: Maybe<TResolversParentTypes['count_functions']> };
  website_filter: TWebsiteFilter;
  website_mutated: Omit<TWebsiteMutated, 'data'> & { data: Maybe<TResolversParentTypes['website']> };
  website_translations: Omit<TWebsiteTranslations, 'website_id'> & { website_id: Maybe<TResolversParentTypes['website']> };
  website_translations_aggregated: TWebsiteTranslationsAggregated;
  website_translations_aggregated_count: TWebsiteTranslationsAggregatedCount;
  website_translations_aggregated_fields: TWebsiteTranslationsAggregatedFields;
  website_translations_filter: TWebsiteTranslationsFilter;
  website_translations_mutated: Omit<TWebsiteTranslationsMutated, 'data'> & { data: Maybe<TResolversParentTypes['website_translations']> };
  work: Omit<TWork, 'projects' | 'projects_func'> & { projects: Maybe<Array<Maybe<TResolversParentTypes['work_project']>>>, projects_func: Maybe<TResolversParentTypes['count_functions']> };
  work_aggregated: TWorkAggregated;
  work_aggregated_count: TWorkAggregatedCount;
  work_aggregated_fields: TWorkAggregatedFields;
  work_filter: TWorkFilter;
  work_mutated: Omit<TWorkMutated, 'data'> & { data: Maybe<TResolversParentTypes['work']> };
  work_project: Omit<TWorkProject, 'project_id' | 'work_id'> & { project_id: Maybe<TResolversParentTypes['project']>, work_id: Maybe<TResolversParentTypes['work']> };
  work_project_aggregated: TWorkProjectAggregated;
  work_project_aggregated_count: TWorkProjectAggregatedCount;
  work_project_aggregated_fields: TWorkProjectAggregatedFields;
  work_project_filter: TWorkProjectFilter;
  work_project_mutated: Omit<TWorkProjectMutated, 'data'> & { data: Maybe<TResolversParentTypes['work_project']> };
};

export interface TDateScalarConfig extends GraphQLScalarTypeConfig<TResolversTypes['Date'], any> {
  name: 'Date';
}

export interface TGraphQlBigIntScalarConfig extends GraphQLScalarTypeConfig<TResolversTypes['GraphQLBigInt'], any> {
  name: 'GraphQLBigInt';
}

export interface TGraphQlGeoJsonScalarConfig extends GraphQLScalarTypeConfig<TResolversTypes['GraphQLGeoJSON'], any> {
  name: 'GraphQLGeoJSON';
}

export interface TGraphQlStringOrFloatScalarConfig extends GraphQLScalarTypeConfig<TResolversTypes['GraphQLStringOrFloat'], any> {
  name: 'GraphQLStringOrFloat';
}

export interface THashScalarConfig extends GraphQLScalarTypeConfig<TResolversTypes['Hash'], any> {
  name: 'Hash';
}

export interface TJsonScalarConfig extends GraphQLScalarTypeConfig<TResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type TQueryResolvers<ContextType = any, ParentType extends TResolversParentTypes['Query'] = TResolversParentTypes['Query']> = {
  accommodation: Resolver<Array<TResolversTypes['accommodation']>, ParentType, ContextType, TQueryAccommodationArgs>;
  accommodation_aggregated: Resolver<Array<TResolversTypes['accommodation_aggregated']>, ParentType, ContextType, TQueryAccommodationAggregatedArgs>;
  accommodation_by_id: Resolver<Maybe<TResolversTypes['accommodation']>, ParentType, ContextType, RequireFields<TQueryAccommodationByIdArgs, 'id'>>;
  accommodation_by_version: Resolver<Maybe<TResolversTypes['version_accommodation']>, ParentType, ContextType, RequireFields<TQueryAccommodationByVersionArgs, 'id' | 'version'>>;
  author: Resolver<Array<TResolversTypes['author']>, ParentType, ContextType, TQueryAuthorArgs>;
  author_aggregated: Resolver<Array<TResolversTypes['author_aggregated']>, ParentType, ContextType, TQueryAuthorAggregatedArgs>;
  author_book: Resolver<Array<TResolversTypes['author_book']>, ParentType, ContextType, TQueryAuthorBookArgs>;
  author_book_aggregated: Resolver<Array<TResolversTypes['author_book_aggregated']>, ParentType, ContextType, TQueryAuthorBookAggregatedArgs>;
  author_book_by_id: Resolver<Maybe<TResolversTypes['author_book']>, ParentType, ContextType, RequireFields<TQueryAuthorBookByIdArgs, 'id'>>;
  author_book_by_version: Resolver<Maybe<TResolversTypes['version_author_book']>, ParentType, ContextType, RequireFields<TQueryAuthorBookByVersionArgs, 'id' | 'version'>>;
  author_by_id: Resolver<Maybe<TResolversTypes['author']>, ParentType, ContextType, RequireFields<TQueryAuthorByIdArgs, 'id'>>;
  author_by_version: Resolver<Maybe<TResolversTypes['version_author']>, ParentType, ContextType, RequireFields<TQueryAuthorByVersionArgs, 'id' | 'version'>>;
  blog: Resolver<Array<TResolversTypes['blog']>, ParentType, ContextType, TQueryBlogArgs>;
  blog_aggregated: Resolver<Array<TResolversTypes['blog_aggregated']>, ParentType, ContextType, TQueryBlogAggregatedArgs>;
  blog_by_id: Resolver<Maybe<TResolversTypes['blog']>, ParentType, ContextType, RequireFields<TQueryBlogByIdArgs, 'id'>>;
  blog_by_version: Resolver<Maybe<TResolversTypes['version_blog']>, ParentType, ContextType, RequireFields<TQueryBlogByVersionArgs, 'id' | 'version'>>;
  blog_elements: Resolver<Array<TResolversTypes['blog_elements']>, ParentType, ContextType, TQueryBlogElementsArgs>;
  blog_elements_aggregated: Resolver<Array<TResolversTypes['blog_elements_aggregated']>, ParentType, ContextType, TQueryBlogElementsAggregatedArgs>;
  blog_elements_by_id: Resolver<Maybe<TResolversTypes['blog_elements']>, ParentType, ContextType, RequireFields<TQueryBlogElementsByIdArgs, 'id'>>;
  blog_elements_by_version: Resolver<Maybe<TResolversTypes['version_blog_elements']>, ParentType, ContextType, RequireFields<TQueryBlogElementsByVersionArgs, 'id' | 'version'>>;
  blog_image: Resolver<Array<TResolversTypes['blog_image']>, ParentType, ContextType, TQueryBlogImageArgs>;
  blog_image_aggregated: Resolver<Array<TResolversTypes['blog_image_aggregated']>, ParentType, ContextType, TQueryBlogImageAggregatedArgs>;
  blog_image_by_id: Resolver<Maybe<TResolversTypes['blog_image']>, ParentType, ContextType, RequireFields<TQueryBlogImageByIdArgs, 'id'>>;
  blog_image_by_version: Resolver<Maybe<TResolversTypes['version_blog_image']>, ParentType, ContextType, RequireFields<TQueryBlogImageByVersionArgs, 'id' | 'version'>>;
  blog_map: Resolver<Array<TResolversTypes['blog_map']>, ParentType, ContextType, TQueryBlogMapArgs>;
  blog_map_aggregated: Resolver<Array<TResolversTypes['blog_map_aggregated']>, ParentType, ContextType, TQueryBlogMapAggregatedArgs>;
  blog_map_by_id: Resolver<Maybe<TResolversTypes['blog_map']>, ParentType, ContextType, RequireFields<TQueryBlogMapByIdArgs, 'id'>>;
  blog_map_by_version: Resolver<Maybe<TResolversTypes['version_blog_map']>, ParentType, ContextType, RequireFields<TQueryBlogMapByVersionArgs, 'id' | 'version'>>;
  blog_quote: Resolver<Array<TResolversTypes['blog_quote']>, ParentType, ContextType, TQueryBlogQuoteArgs>;
  blog_quote_aggregated: Resolver<Array<TResolversTypes['blog_quote_aggregated']>, ParentType, ContextType, TQueryBlogQuoteAggregatedArgs>;
  blog_quote_by_id: Resolver<Maybe<TResolversTypes['blog_quote']>, ParentType, ContextType, RequireFields<TQueryBlogQuoteByIdArgs, 'id'>>;
  blog_quote_by_version: Resolver<Maybe<TResolversTypes['version_blog_quote']>, ParentType, ContextType, RequireFields<TQueryBlogQuoteByVersionArgs, 'id' | 'version'>>;
  blog_technology: Resolver<Array<TResolversTypes['blog_technology']>, ParentType, ContextType, TQueryBlogTechnologyArgs>;
  blog_technology_aggregated: Resolver<Array<TResolversTypes['blog_technology_aggregated']>, ParentType, ContextType, TQueryBlogTechnologyAggregatedArgs>;
  blog_technology_by_id: Resolver<Maybe<TResolversTypes['blog_technology']>, ParentType, ContextType, RequireFields<TQueryBlogTechnologyByIdArgs, 'id'>>;
  blog_technology_by_version: Resolver<Maybe<TResolversTypes['version_blog_technology']>, ParentType, ContextType, RequireFields<TQueryBlogTechnologyByVersionArgs, 'id' | 'version'>>;
  blog_text: Resolver<Array<TResolversTypes['blog_text']>, ParentType, ContextType, TQueryBlogTextArgs>;
  blog_text_aggregated: Resolver<Array<TResolversTypes['blog_text_aggregated']>, ParentType, ContextType, TQueryBlogTextAggregatedArgs>;
  blog_text_by_id: Resolver<Maybe<TResolversTypes['blog_text']>, ParentType, ContextType, RequireFields<TQueryBlogTextByIdArgs, 'id'>>;
  blog_text_by_version: Resolver<Maybe<TResolversTypes['version_blog_text']>, ParentType, ContextType, RequireFields<TQueryBlogTextByVersionArgs, 'id' | 'version'>>;
  blog_title: Resolver<Array<TResolversTypes['blog_title']>, ParentType, ContextType, TQueryBlogTitleArgs>;
  blog_title_aggregated: Resolver<Array<TResolversTypes['blog_title_aggregated']>, ParentType, ContextType, TQueryBlogTitleAggregatedArgs>;
  blog_title_by_id: Resolver<Maybe<TResolversTypes['blog_title']>, ParentType, ContextType, RequireFields<TQueryBlogTitleByIdArgs, 'id'>>;
  blog_title_by_version: Resolver<Maybe<TResolversTypes['version_blog_title']>, ParentType, ContextType, RequireFields<TQueryBlogTitleByVersionArgs, 'id' | 'version'>>;
  blog_video: Resolver<Array<TResolversTypes['blog_video']>, ParentType, ContextType, TQueryBlogVideoArgs>;
  blog_video_aggregated: Resolver<Array<TResolversTypes['blog_video_aggregated']>, ParentType, ContextType, TQueryBlogVideoAggregatedArgs>;
  blog_video_by_id: Resolver<Maybe<TResolversTypes['blog_video']>, ParentType, ContextType, RequireFields<TQueryBlogVideoByIdArgs, 'id'>>;
  blog_video_by_version: Resolver<Maybe<TResolversTypes['version_blog_video']>, ParentType, ContextType, RequireFields<TQueryBlogVideoByVersionArgs, 'id' | 'version'>>;
  book: Resolver<Array<TResolversTypes['book']>, ParentType, ContextType, TQueryBookArgs>;
  book_aggregated: Resolver<Array<TResolversTypes['book_aggregated']>, ParentType, ContextType, TQueryBookAggregatedArgs>;
  book_by_id: Resolver<Maybe<TResolversTypes['book']>, ParentType, ContextType, RequireFields<TQueryBookByIdArgs, 'id'>>;
  book_by_version: Resolver<Maybe<TResolversTypes['version_book']>, ParentType, ContextType, RequireFields<TQueryBookByVersionArgs, 'id' | 'version'>>;
  book_series: Resolver<Array<TResolversTypes['book_series']>, ParentType, ContextType, TQueryBookSeriesArgs>;
  book_series_aggregated: Resolver<Array<TResolversTypes['book_series_aggregated']>, ParentType, ContextType, TQueryBookSeriesAggregatedArgs>;
  book_series_by_id: Resolver<Maybe<TResolversTypes['book_series']>, ParentType, ContextType, RequireFields<TQueryBookSeriesByIdArgs, 'id'>>;
  book_series_by_version: Resolver<Maybe<TResolversTypes['version_book_series']>, ParentType, ContextType, RequireFields<TQueryBookSeriesByVersionArgs, 'id' | 'version'>>;
  book_series_translations: Resolver<Array<TResolversTypes['book_series_translations']>, ParentType, ContextType, TQueryBookSeriesTranslationsArgs>;
  book_series_translations_aggregated: Resolver<Array<TResolversTypes['book_series_translations_aggregated']>, ParentType, ContextType, TQueryBookSeriesTranslationsAggregatedArgs>;
  book_series_translations_by_id: Resolver<Maybe<TResolversTypes['book_series_translations']>, ParentType, ContextType, RequireFields<TQueryBookSeriesTranslationsByIdArgs, 'id'>>;
  book_series_translations_by_version: Resolver<Maybe<TResolversTypes['version_book_series_translations']>, ParentType, ContextType, RequireFields<TQueryBookSeriesTranslationsByVersionArgs, 'id' | 'version'>>;
  book_translations: Resolver<Array<TResolversTypes['book_translations']>, ParentType, ContextType, TQueryBookTranslationsArgs>;
  book_translations_aggregated: Resolver<Array<TResolversTypes['book_translations_aggregated']>, ParentType, ContextType, TQueryBookTranslationsAggregatedArgs>;
  book_translations_by_id: Resolver<Maybe<TResolversTypes['book_translations']>, ParentType, ContextType, RequireFields<TQueryBookTranslationsByIdArgs, 'id'>>;
  book_translations_by_version: Resolver<Maybe<TResolversTypes['version_book_translations']>, ParentType, ContextType, RequireFields<TQueryBookTranslationsByVersionArgs, 'id' | 'version'>>;
  book_year: Resolver<Array<TResolversTypes['book_year']>, ParentType, ContextType, TQueryBookYearArgs>;
  book_year_aggregated: Resolver<Array<TResolversTypes['book_year_aggregated']>, ParentType, ContextType, TQueryBookYearAggregatedArgs>;
  book_year_by_id: Resolver<Maybe<TResolversTypes['book_year']>, ParentType, ContextType, RequireFields<TQueryBookYearByIdArgs, 'id'>>;
  book_year_by_version: Resolver<Maybe<TResolversTypes['version_book_year']>, ParentType, ContextType, RequireFields<TQueryBookYearByVersionArgs, 'id' | 'version'>>;
  book_year_translations: Resolver<Array<TResolversTypes['book_year_translations']>, ParentType, ContextType, TQueryBookYearTranslationsArgs>;
  book_year_translations_aggregated: Resolver<Array<TResolversTypes['book_year_translations_aggregated']>, ParentType, ContextType, TQueryBookYearTranslationsAggregatedArgs>;
  book_year_translations_by_id: Resolver<Maybe<TResolversTypes['book_year_translations']>, ParentType, ContextType, RequireFields<TQueryBookYearTranslationsByIdArgs, 'id'>>;
  book_year_translations_by_version: Resolver<Maybe<TResolversTypes['version_book_year_translations']>, ParentType, ContextType, RequireFields<TQueryBookYearTranslationsByVersionArgs, 'id' | 'version'>>;
  booking: Resolver<Array<TResolversTypes['booking']>, ParentType, ContextType, TQueryBookingArgs>;
  booking_aggregated: Resolver<Array<TResolversTypes['booking_aggregated']>, ParentType, ContextType, TQueryBookingAggregatedArgs>;
  booking_by_id: Resolver<Maybe<TResolversTypes['booking']>, ParentType, ContextType, RequireFields<TQueryBookingByIdArgs, 'id'>>;
  booking_by_version: Resolver<Maybe<TResolversTypes['version_booking']>, ParentType, ContextType, RequireFields<TQueryBookingByVersionArgs, 'id' | 'version'>>;
  country: Resolver<Array<TResolversTypes['country']>, ParentType, ContextType, TQueryCountryArgs>;
  country_aggregated: Resolver<Array<TResolversTypes['country_aggregated']>, ParentType, ContextType, TQueryCountryAggregatedArgs>;
  country_by_id: Resolver<Maybe<TResolversTypes['country']>, ParentType, ContextType, RequireFields<TQueryCountryByIdArgs, 'id'>>;
  country_by_version: Resolver<Maybe<TResolversTypes['version_country']>, ParentType, ContextType, RequireFields<TQueryCountryByVersionArgs, 'id' | 'version'>>;
  country_translations: Resolver<Array<TResolversTypes['country_translations']>, ParentType, ContextType, TQueryCountryTranslationsArgs>;
  country_translations_aggregated: Resolver<Array<TResolversTypes['country_translations_aggregated']>, ParentType, ContextType, TQueryCountryTranslationsAggregatedArgs>;
  country_translations_by_id: Resolver<Maybe<TResolversTypes['country_translations']>, ParentType, ContextType, RequireFields<TQueryCountryTranslationsByIdArgs, 'id'>>;
  country_translations_by_version: Resolver<Maybe<TResolversTypes['version_country_translations']>, ParentType, ContextType, RequireFields<TQueryCountryTranslationsByVersionArgs, 'id' | 'version'>>;
  languages: Resolver<Array<TResolversTypes['languages']>, ParentType, ContextType, TQueryLanguagesArgs>;
  languages_aggregated: Resolver<Array<TResolversTypes['languages_aggregated']>, ParentType, ContextType, TQueryLanguagesAggregatedArgs>;
  languages_by_id: Resolver<Maybe<TResolversTypes['languages']>, ParentType, ContextType, RequireFields<TQueryLanguagesByIdArgs, 'id'>>;
  languages_by_version: Resolver<Maybe<TResolversTypes['version_languages']>, ParentType, ContextType, RequireFields<TQueryLanguagesByVersionArgs, 'id' | 'version'>>;
  navigation: Resolver<Maybe<TResolversTypes['navigation']>, ParentType, ContextType, TQueryNavigationArgs>;
  navigation_by_version: Resolver<Maybe<TResolversTypes['version_navigation']>, ParentType, ContextType, RequireFields<TQueryNavigationByVersionArgs, 'version'>>;
  navigation_item: Resolver<Array<TResolversTypes['navigation_item']>, ParentType, ContextType, TQueryNavigationItemArgs>;
  navigation_item_aggregated: Resolver<Array<TResolversTypes['navigation_item_aggregated']>, ParentType, ContextType, TQueryNavigationItemAggregatedArgs>;
  navigation_item_by_id: Resolver<Maybe<TResolversTypes['navigation_item']>, ParentType, ContextType, RequireFields<TQueryNavigationItemByIdArgs, 'id'>>;
  navigation_item_by_version: Resolver<Maybe<TResolversTypes['version_navigation_item']>, ParentType, ContextType, RequireFields<TQueryNavigationItemByVersionArgs, 'id' | 'version'>>;
  navigation_item_translations: Resolver<Array<TResolversTypes['navigation_item_translations']>, ParentType, ContextType, TQueryNavigationItemTranslationsArgs>;
  navigation_item_translations_aggregated: Resolver<Array<TResolversTypes['navigation_item_translations_aggregated']>, ParentType, ContextType, TQueryNavigationItemTranslationsAggregatedArgs>;
  navigation_item_translations_by_id: Resolver<Maybe<TResolversTypes['navigation_item_translations']>, ParentType, ContextType, RequireFields<TQueryNavigationItemTranslationsByIdArgs, 'id'>>;
  navigation_item_translations_by_version: Resolver<Maybe<TResolversTypes['version_navigation_item_translations']>, ParentType, ContextType, RequireFields<TQueryNavigationItemTranslationsByVersionArgs, 'id' | 'version'>>;
  navigation_translations: Resolver<Array<TResolversTypes['navigation_translations']>, ParentType, ContextType, TQueryNavigationTranslationsArgs>;
  navigation_translations_aggregated: Resolver<Array<TResolversTypes['navigation_translations_aggregated']>, ParentType, ContextType, TQueryNavigationTranslationsAggregatedArgs>;
  navigation_translations_by_id: Resolver<Maybe<TResolversTypes['navigation_translations']>, ParentType, ContextType, RequireFields<TQueryNavigationTranslationsByIdArgs, 'id'>>;
  navigation_translations_by_version: Resolver<Maybe<TResolversTypes['version_navigation_translations']>, ParentType, ContextType, RequireFields<TQueryNavigationTranslationsByVersionArgs, 'id' | 'version'>>;
  not_found: Resolver<Maybe<TResolversTypes['not_found']>, ParentType, ContextType, TQueryNotFoundArgs>;
  not_found_by_version: Resolver<Maybe<TResolversTypes['version_not_found']>, ParentType, ContextType, RequireFields<TQueryNotFoundByVersionArgs, 'version'>>;
  not_found_translations: Resolver<Array<TResolversTypes['not_found_translations']>, ParentType, ContextType, TQueryNotFoundTranslationsArgs>;
  not_found_translations_aggregated: Resolver<Array<TResolversTypes['not_found_translations_aggregated']>, ParentType, ContextType, TQueryNotFoundTranslationsAggregatedArgs>;
  not_found_translations_by_id: Resolver<Maybe<TResolversTypes['not_found_translations']>, ParentType, ContextType, RequireFields<TQueryNotFoundTranslationsByIdArgs, 'id'>>;
  not_found_translations_by_version: Resolver<Maybe<TResolversTypes['version_not_found_translations']>, ParentType, ContextType, RequireFields<TQueryNotFoundTranslationsByVersionArgs, 'id' | 'version'>>;
  place: Resolver<Array<TResolversTypes['place']>, ParentType, ContextType, TQueryPlaceArgs>;
  place_aggregated: Resolver<Array<TResolversTypes['place_aggregated']>, ParentType, ContextType, TQueryPlaceAggregatedArgs>;
  place_by_id: Resolver<Maybe<TResolversTypes['place']>, ParentType, ContextType, RequireFields<TQueryPlaceByIdArgs, 'id'>>;
  place_by_version: Resolver<Maybe<TResolversTypes['version_place']>, ParentType, ContextType, RequireFields<TQueryPlaceByVersionArgs, 'id' | 'version'>>;
  place_translations: Resolver<Array<TResolversTypes['place_translations']>, ParentType, ContextType, TQueryPlaceTranslationsArgs>;
  place_translations_aggregated: Resolver<Array<TResolversTypes['place_translations_aggregated']>, ParentType, ContextType, TQueryPlaceTranslationsAggregatedArgs>;
  place_translations_by_id: Resolver<Maybe<TResolversTypes['place_translations']>, ParentType, ContextType, RequireFields<TQueryPlaceTranslationsByIdArgs, 'id'>>;
  place_translations_by_version: Resolver<Maybe<TResolversTypes['version_place_translations']>, ParentType, ContextType, RequireFields<TQueryPlaceTranslationsByVersionArgs, 'id' | 'version'>>;
  project: Resolver<Array<TResolversTypes['project']>, ParentType, ContextType, TQueryProjectArgs>;
  project_aggregated: Resolver<Array<TResolversTypes['project_aggregated']>, ParentType, ContextType, TQueryProjectAggregatedArgs>;
  project_by_id: Resolver<Maybe<TResolversTypes['project']>, ParentType, ContextType, RequireFields<TQueryProjectByIdArgs, 'id'>>;
  project_by_version: Resolver<Maybe<TResolversTypes['version_project']>, ParentType, ContextType, RequireFields<TQueryProjectByVersionArgs, 'id' | 'version'>>;
  project_directus_files: Resolver<Array<TResolversTypes['project_directus_files']>, ParentType, ContextType, TQueryProjectDirectusFilesArgs>;
  project_directus_files_aggregated: Resolver<Array<TResolversTypes['project_directus_files_aggregated']>, ParentType, ContextType, TQueryProjectDirectusFilesAggregatedArgs>;
  project_directus_files_by_id: Resolver<Maybe<TResolversTypes['project_directus_files']>, ParentType, ContextType, RequireFields<TQueryProjectDirectusFilesByIdArgs, 'id'>>;
  project_directus_files_by_version: Resolver<Maybe<TResolversTypes['version_project_directus_files']>, ParentType, ContextType, RequireFields<TQueryProjectDirectusFilesByVersionArgs, 'id' | 'version'>>;
  project_technology: Resolver<Array<TResolversTypes['project_technology']>, ParentType, ContextType, TQueryProjectTechnologyArgs>;
  project_technology_aggregated: Resolver<Array<TResolversTypes['project_technology_aggregated']>, ParentType, ContextType, TQueryProjectTechnologyAggregatedArgs>;
  project_technology_by_id: Resolver<Maybe<TResolversTypes['project_technology']>, ParentType, ContextType, RequireFields<TQueryProjectTechnologyByIdArgs, 'id'>>;
  project_technology_by_version: Resolver<Maybe<TResolversTypes['version_project_technology']>, ParentType, ContextType, RequireFields<TQueryProjectTechnologyByVersionArgs, 'id' | 'version'>>;
  project_translations: Resolver<Array<TResolversTypes['project_translations']>, ParentType, ContextType, TQueryProjectTranslationsArgs>;
  project_translations_aggregated: Resolver<Array<TResolversTypes['project_translations_aggregated']>, ParentType, ContextType, TQueryProjectTranslationsAggregatedArgs>;
  project_translations_by_id: Resolver<Maybe<TResolversTypes['project_translations']>, ParentType, ContextType, RequireFields<TQueryProjectTranslationsByIdArgs, 'id'>>;
  project_translations_by_version: Resolver<Maybe<TResolversTypes['version_project_translations']>, ParentType, ContextType, RequireFields<TQueryProjectTranslationsByVersionArgs, 'id' | 'version'>>;
  reading: Resolver<Maybe<TResolversTypes['reading']>, ParentType, ContextType, TQueryReadingArgs>;
  reading_by_version: Resolver<Maybe<TResolversTypes['version_reading']>, ParentType, ContextType, RequireFields<TQueryReadingByVersionArgs, 'version'>>;
  secret_blog: Resolver<Array<TResolversTypes['secret_blog']>, ParentType, ContextType, TQuerySecretBlogArgs>;
  secret_blog_aggregated: Resolver<Array<TResolversTypes['secret_blog_aggregated']>, ParentType, ContextType, TQuerySecretBlogAggregatedArgs>;
  secret_blog_by_id: Resolver<Maybe<TResolversTypes['secret_blog']>, ParentType, ContextType, RequireFields<TQuerySecretBlogByIdArgs, 'id'>>;
  secret_blog_by_version: Resolver<Maybe<TResolversTypes['version_secret_blog']>, ParentType, ContextType, RequireFields<TQuerySecretBlogByVersionArgs, 'id' | 'version'>>;
  secret_blog_elements: Resolver<Array<TResolversTypes['secret_blog_elements']>, ParentType, ContextType, TQuerySecretBlogElementsArgs>;
  secret_blog_elements_aggregated: Resolver<Array<TResolversTypes['secret_blog_elements_aggregated']>, ParentType, ContextType, TQuerySecretBlogElementsAggregatedArgs>;
  secret_blog_elements_by_id: Resolver<Maybe<TResolversTypes['secret_blog_elements']>, ParentType, ContextType, RequireFields<TQuerySecretBlogElementsByIdArgs, 'id'>>;
  secret_blog_elements_by_version: Resolver<Maybe<TResolversTypes['version_secret_blog_elements']>, ParentType, ContextType, RequireFields<TQuerySecretBlogElementsByVersionArgs, 'id' | 'version'>>;
  secret_blog_place: Resolver<Array<TResolversTypes['secret_blog_place']>, ParentType, ContextType, TQuerySecretBlogPlaceArgs>;
  secret_blog_place_aggregated: Resolver<Array<TResolversTypes['secret_blog_place_aggregated']>, ParentType, ContextType, TQuerySecretBlogPlaceAggregatedArgs>;
  secret_blog_place_by_id: Resolver<Maybe<TResolversTypes['secret_blog_place']>, ParentType, ContextType, RequireFields<TQuerySecretBlogPlaceByIdArgs, 'id'>>;
  secret_blog_place_by_version: Resolver<Maybe<TResolversTypes['version_secret_blog_place']>, ParentType, ContextType, RequireFields<TQuerySecretBlogPlaceByVersionArgs, 'id' | 'version'>>;
  subscribers: Resolver<Array<TResolversTypes['subscribers']>, ParentType, ContextType, TQuerySubscribersArgs>;
  subscribers_aggregated: Resolver<Array<TResolversTypes['subscribers_aggregated']>, ParentType, ContextType, TQuerySubscribersAggregatedArgs>;
  subscribers_by_id: Resolver<Maybe<TResolversTypes['subscribers']>, ParentType, ContextType, RequireFields<TQuerySubscribersByIdArgs, 'id'>>;
  subscribers_by_version: Resolver<Maybe<TResolversTypes['version_subscribers']>, ParentType, ContextType, RequireFields<TQuerySubscribersByVersionArgs, 'id' | 'version'>>;
  technology: Resolver<Array<TResolversTypes['technology']>, ParentType, ContextType, TQueryTechnologyArgs>;
  technology_aggregated: Resolver<Array<TResolversTypes['technology_aggregated']>, ParentType, ContextType, TQueryTechnologyAggregatedArgs>;
  technology_by_id: Resolver<Maybe<TResolversTypes['technology']>, ParentType, ContextType, RequireFields<TQueryTechnologyByIdArgs, 'id'>>;
  technology_by_version: Resolver<Maybe<TResolversTypes['version_technology']>, ParentType, ContextType, RequireFields<TQueryTechnologyByVersionArgs, 'id' | 'version'>>;
  technology_category: Resolver<Array<TResolversTypes['technology_category']>, ParentType, ContextType, TQueryTechnologyCategoryArgs>;
  technology_category_aggregated: Resolver<Array<TResolversTypes['technology_category_aggregated']>, ParentType, ContextType, TQueryTechnologyCategoryAggregatedArgs>;
  technology_category_by_id: Resolver<Maybe<TResolversTypes['technology_category']>, ParentType, ContextType, RequireFields<TQueryTechnologyCategoryByIdArgs, 'id'>>;
  technology_category_by_version: Resolver<Maybe<TResolversTypes['version_technology_category']>, ParentType, ContextType, RequireFields<TQueryTechnologyCategoryByVersionArgs, 'id' | 'version'>>;
  technology_category_translations: Resolver<Array<TResolversTypes['technology_category_translations']>, ParentType, ContextType, TQueryTechnologyCategoryTranslationsArgs>;
  technology_category_translations_aggregated: Resolver<Array<TResolversTypes['technology_category_translations_aggregated']>, ParentType, ContextType, TQueryTechnologyCategoryTranslationsAggregatedArgs>;
  technology_category_translations_by_id: Resolver<Maybe<TResolversTypes['technology_category_translations']>, ParentType, ContextType, RequireFields<TQueryTechnologyCategoryTranslationsByIdArgs, 'id'>>;
  technology_category_translations_by_version: Resolver<Maybe<TResolversTypes['version_technology_category_translations']>, ParentType, ContextType, RequireFields<TQueryTechnologyCategoryTranslationsByVersionArgs, 'id' | 'version'>>;
  technology_translations: Resolver<Array<TResolversTypes['technology_translations']>, ParentType, ContextType, TQueryTechnologyTranslationsArgs>;
  technology_translations_aggregated: Resolver<Array<TResolversTypes['technology_translations_aggregated']>, ParentType, ContextType, TQueryTechnologyTranslationsAggregatedArgs>;
  technology_translations_by_id: Resolver<Maybe<TResolversTypes['technology_translations']>, ParentType, ContextType, RequireFields<TQueryTechnologyTranslationsByIdArgs, 'id'>>;
  technology_translations_by_version: Resolver<Maybe<TResolversTypes['version_technology_translations']>, ParentType, ContextType, RequireFields<TQueryTechnologyTranslationsByVersionArgs, 'id' | 'version'>>;
  transportation: Resolver<Array<TResolversTypes['transportation']>, ParentType, ContextType, TQueryTransportationArgs>;
  transportation_aggregated: Resolver<Array<TResolversTypes['transportation_aggregated']>, ParentType, ContextType, TQueryTransportationAggregatedArgs>;
  transportation_by_id: Resolver<Maybe<TResolversTypes['transportation']>, ParentType, ContextType, RequireFields<TQueryTransportationByIdArgs, 'id'>>;
  transportation_by_version: Resolver<Maybe<TResolversTypes['version_transportation']>, ParentType, ContextType, RequireFields<TQueryTransportationByVersionArgs, 'id' | 'version'>>;
  travel: Resolver<Maybe<TResolversTypes['travel']>, ParentType, ContextType, TQueryTravelArgs>;
  travel_by_version: Resolver<Maybe<TResolversTypes['version_travel']>, ParentType, ContextType, RequireFields<TQueryTravelByVersionArgs, 'version'>>;
  website: Resolver<Maybe<TResolversTypes['website']>, ParentType, ContextType, TQueryWebsiteArgs>;
  website_by_version: Resolver<Maybe<TResolversTypes['version_website']>, ParentType, ContextType, RequireFields<TQueryWebsiteByVersionArgs, 'version'>>;
  website_translations: Resolver<Array<TResolversTypes['website_translations']>, ParentType, ContextType, TQueryWebsiteTranslationsArgs>;
  website_translations_aggregated: Resolver<Array<TResolversTypes['website_translations_aggregated']>, ParentType, ContextType, TQueryWebsiteTranslationsAggregatedArgs>;
  website_translations_by_id: Resolver<Maybe<TResolversTypes['website_translations']>, ParentType, ContextType, RequireFields<TQueryWebsiteTranslationsByIdArgs, 'id'>>;
  website_translations_by_version: Resolver<Maybe<TResolversTypes['version_website_translations']>, ParentType, ContextType, RequireFields<TQueryWebsiteTranslationsByVersionArgs, 'id' | 'version'>>;
  work: Resolver<Array<TResolversTypes['work']>, ParentType, ContextType, TQueryWorkArgs>;
  work_aggregated: Resolver<Array<TResolversTypes['work_aggregated']>, ParentType, ContextType, TQueryWorkAggregatedArgs>;
  work_by_id: Resolver<Maybe<TResolversTypes['work']>, ParentType, ContextType, RequireFields<TQueryWorkByIdArgs, 'id'>>;
  work_by_version: Resolver<Maybe<TResolversTypes['version_work']>, ParentType, ContextType, RequireFields<TQueryWorkByVersionArgs, 'id' | 'version'>>;
  work_project: Resolver<Array<TResolversTypes['work_project']>, ParentType, ContextType, TQueryWorkProjectArgs>;
  work_project_aggregated: Resolver<Array<TResolversTypes['work_project_aggregated']>, ParentType, ContextType, TQueryWorkProjectAggregatedArgs>;
  work_project_by_id: Resolver<Maybe<TResolversTypes['work_project']>, ParentType, ContextType, RequireFields<TQueryWorkProjectByIdArgs, 'id'>>;
  work_project_by_version: Resolver<Maybe<TResolversTypes['version_work_project']>, ParentType, ContextType, RequireFields<TQueryWorkProjectByVersionArgs, 'id' | 'version'>>;
};

export type TSubscriptionResolvers<ContextType = any, ParentType extends TResolversParentTypes['Subscription'] = TResolversParentTypes['Subscription']> = {
  accommodation_mutated: SubscriptionResolver<Maybe<TResolversTypes['accommodation_mutated']>, "accommodation_mutated", ParentType, ContextType, TSubscriptionAccommodationMutatedArgs>;
  author_book_mutated: SubscriptionResolver<Maybe<TResolversTypes['author_book_mutated']>, "author_book_mutated", ParentType, ContextType, TSubscriptionAuthorBookMutatedArgs>;
  author_mutated: SubscriptionResolver<Maybe<TResolversTypes['author_mutated']>, "author_mutated", ParentType, ContextType, TSubscriptionAuthorMutatedArgs>;
  blog_elements_mutated: SubscriptionResolver<Maybe<TResolversTypes['blog_elements_mutated']>, "blog_elements_mutated", ParentType, ContextType, TSubscriptionBlogElementsMutatedArgs>;
  blog_image_mutated: SubscriptionResolver<Maybe<TResolversTypes['blog_image_mutated']>, "blog_image_mutated", ParentType, ContextType, TSubscriptionBlogImageMutatedArgs>;
  blog_map_mutated: SubscriptionResolver<Maybe<TResolversTypes['blog_map_mutated']>, "blog_map_mutated", ParentType, ContextType, TSubscriptionBlogMapMutatedArgs>;
  blog_mutated: SubscriptionResolver<Maybe<TResolversTypes['blog_mutated']>, "blog_mutated", ParentType, ContextType, TSubscriptionBlogMutatedArgs>;
  blog_quote_mutated: SubscriptionResolver<Maybe<TResolversTypes['blog_quote_mutated']>, "blog_quote_mutated", ParentType, ContextType, TSubscriptionBlogQuoteMutatedArgs>;
  blog_technology_mutated: SubscriptionResolver<Maybe<TResolversTypes['blog_technology_mutated']>, "blog_technology_mutated", ParentType, ContextType, TSubscriptionBlogTechnologyMutatedArgs>;
  blog_text_mutated: SubscriptionResolver<Maybe<TResolversTypes['blog_text_mutated']>, "blog_text_mutated", ParentType, ContextType, TSubscriptionBlogTextMutatedArgs>;
  blog_title_mutated: SubscriptionResolver<Maybe<TResolversTypes['blog_title_mutated']>, "blog_title_mutated", ParentType, ContextType, TSubscriptionBlogTitleMutatedArgs>;
  blog_video_mutated: SubscriptionResolver<Maybe<TResolversTypes['blog_video_mutated']>, "blog_video_mutated", ParentType, ContextType, TSubscriptionBlogVideoMutatedArgs>;
  book_mutated: SubscriptionResolver<Maybe<TResolversTypes['book_mutated']>, "book_mutated", ParentType, ContextType, TSubscriptionBookMutatedArgs>;
  book_series_mutated: SubscriptionResolver<Maybe<TResolversTypes['book_series_mutated']>, "book_series_mutated", ParentType, ContextType, TSubscriptionBookSeriesMutatedArgs>;
  book_series_translations_mutated: SubscriptionResolver<Maybe<TResolversTypes['book_series_translations_mutated']>, "book_series_translations_mutated", ParentType, ContextType, TSubscriptionBookSeriesTranslationsMutatedArgs>;
  book_translations_mutated: SubscriptionResolver<Maybe<TResolversTypes['book_translations_mutated']>, "book_translations_mutated", ParentType, ContextType, TSubscriptionBookTranslationsMutatedArgs>;
  book_year_mutated: SubscriptionResolver<Maybe<TResolversTypes['book_year_mutated']>, "book_year_mutated", ParentType, ContextType, TSubscriptionBookYearMutatedArgs>;
  book_year_translations_mutated: SubscriptionResolver<Maybe<TResolversTypes['book_year_translations_mutated']>, "book_year_translations_mutated", ParentType, ContextType, TSubscriptionBookYearTranslationsMutatedArgs>;
  booking_mutated: SubscriptionResolver<Maybe<TResolversTypes['booking_mutated']>, "booking_mutated", ParentType, ContextType, TSubscriptionBookingMutatedArgs>;
  country_mutated: SubscriptionResolver<Maybe<TResolversTypes['country_mutated']>, "country_mutated", ParentType, ContextType, TSubscriptionCountryMutatedArgs>;
  country_translations_mutated: SubscriptionResolver<Maybe<TResolversTypes['country_translations_mutated']>, "country_translations_mutated", ParentType, ContextType, TSubscriptionCountryTranslationsMutatedArgs>;
  directus_files_mutated: SubscriptionResolver<Maybe<TResolversTypes['directus_files_mutated']>, "directus_files_mutated", ParentType, ContextType, TSubscriptionDirectusFilesMutatedArgs>;
  directus_folders_mutated: SubscriptionResolver<Maybe<TResolversTypes['directus_folders_mutated']>, "directus_folders_mutated", ParentType, ContextType, TSubscriptionDirectusFoldersMutatedArgs>;
  directus_roles_mutated: SubscriptionResolver<Maybe<TResolversTypes['directus_roles_mutated']>, "directus_roles_mutated", ParentType, ContextType, TSubscriptionDirectusRolesMutatedArgs>;
  directus_settings_mutated: SubscriptionResolver<Maybe<TResolversTypes['directus_settings_mutated']>, "directus_settings_mutated", ParentType, ContextType, TSubscriptionDirectusSettingsMutatedArgs>;
  directus_users_mutated: SubscriptionResolver<Maybe<TResolversTypes['directus_users_mutated']>, "directus_users_mutated", ParentType, ContextType, TSubscriptionDirectusUsersMutatedArgs>;
  languages_mutated: SubscriptionResolver<Maybe<TResolversTypes['languages_mutated']>, "languages_mutated", ParentType, ContextType, TSubscriptionLanguagesMutatedArgs>;
  navigation_item_mutated: SubscriptionResolver<Maybe<TResolversTypes['navigation_item_mutated']>, "navigation_item_mutated", ParentType, ContextType, TSubscriptionNavigationItemMutatedArgs>;
  navigation_item_translations_mutated: SubscriptionResolver<Maybe<TResolversTypes['navigation_item_translations_mutated']>, "navigation_item_translations_mutated", ParentType, ContextType, TSubscriptionNavigationItemTranslationsMutatedArgs>;
  navigation_mutated: SubscriptionResolver<Maybe<TResolversTypes['navigation_mutated']>, "navigation_mutated", ParentType, ContextType, TSubscriptionNavigationMutatedArgs>;
  navigation_translations_mutated: SubscriptionResolver<Maybe<TResolversTypes['navigation_translations_mutated']>, "navigation_translations_mutated", ParentType, ContextType, TSubscriptionNavigationTranslationsMutatedArgs>;
  not_found_mutated: SubscriptionResolver<Maybe<TResolversTypes['not_found_mutated']>, "not_found_mutated", ParentType, ContextType, TSubscriptionNotFoundMutatedArgs>;
  not_found_translations_mutated: SubscriptionResolver<Maybe<TResolversTypes['not_found_translations_mutated']>, "not_found_translations_mutated", ParentType, ContextType, TSubscriptionNotFoundTranslationsMutatedArgs>;
  place_mutated: SubscriptionResolver<Maybe<TResolversTypes['place_mutated']>, "place_mutated", ParentType, ContextType, TSubscriptionPlaceMutatedArgs>;
  place_translations_mutated: SubscriptionResolver<Maybe<TResolversTypes['place_translations_mutated']>, "place_translations_mutated", ParentType, ContextType, TSubscriptionPlaceTranslationsMutatedArgs>;
  project_directus_files_mutated: SubscriptionResolver<Maybe<TResolversTypes['project_directus_files_mutated']>, "project_directus_files_mutated", ParentType, ContextType, TSubscriptionProjectDirectusFilesMutatedArgs>;
  project_mutated: SubscriptionResolver<Maybe<TResolversTypes['project_mutated']>, "project_mutated", ParentType, ContextType, TSubscriptionProjectMutatedArgs>;
  project_technology_mutated: SubscriptionResolver<Maybe<TResolversTypes['project_technology_mutated']>, "project_technology_mutated", ParentType, ContextType, TSubscriptionProjectTechnologyMutatedArgs>;
  project_translations_mutated: SubscriptionResolver<Maybe<TResolversTypes['project_translations_mutated']>, "project_translations_mutated", ParentType, ContextType, TSubscriptionProjectTranslationsMutatedArgs>;
  reading_mutated: SubscriptionResolver<Maybe<TResolversTypes['reading_mutated']>, "reading_mutated", ParentType, ContextType, TSubscriptionReadingMutatedArgs>;
  secret_blog_elements_mutated: SubscriptionResolver<Maybe<TResolversTypes['secret_blog_elements_mutated']>, "secret_blog_elements_mutated", ParentType, ContextType, TSubscriptionSecretBlogElementsMutatedArgs>;
  secret_blog_mutated: SubscriptionResolver<Maybe<TResolversTypes['secret_blog_mutated']>, "secret_blog_mutated", ParentType, ContextType, TSubscriptionSecretBlogMutatedArgs>;
  secret_blog_place_mutated: SubscriptionResolver<Maybe<TResolversTypes['secret_blog_place_mutated']>, "secret_blog_place_mutated", ParentType, ContextType, TSubscriptionSecretBlogPlaceMutatedArgs>;
  subscribers_mutated: SubscriptionResolver<Maybe<TResolversTypes['subscribers_mutated']>, "subscribers_mutated", ParentType, ContextType, TSubscriptionSubscribersMutatedArgs>;
  technology_category_mutated: SubscriptionResolver<Maybe<TResolversTypes['technology_category_mutated']>, "technology_category_mutated", ParentType, ContextType, TSubscriptionTechnologyCategoryMutatedArgs>;
  technology_category_translations_mutated: SubscriptionResolver<Maybe<TResolversTypes['technology_category_translations_mutated']>, "technology_category_translations_mutated", ParentType, ContextType, TSubscriptionTechnologyCategoryTranslationsMutatedArgs>;
  technology_mutated: SubscriptionResolver<Maybe<TResolversTypes['technology_mutated']>, "technology_mutated", ParentType, ContextType, TSubscriptionTechnologyMutatedArgs>;
  technology_translations_mutated: SubscriptionResolver<Maybe<TResolversTypes['technology_translations_mutated']>, "technology_translations_mutated", ParentType, ContextType, TSubscriptionTechnologyTranslationsMutatedArgs>;
  transportation_mutated: SubscriptionResolver<Maybe<TResolversTypes['transportation_mutated']>, "transportation_mutated", ParentType, ContextType, TSubscriptionTransportationMutatedArgs>;
  travel_mutated: SubscriptionResolver<Maybe<TResolversTypes['travel_mutated']>, "travel_mutated", ParentType, ContextType, TSubscriptionTravelMutatedArgs>;
  website_mutated: SubscriptionResolver<Maybe<TResolversTypes['website_mutated']>, "website_mutated", ParentType, ContextType, TSubscriptionWebsiteMutatedArgs>;
  website_translations_mutated: SubscriptionResolver<Maybe<TResolversTypes['website_translations_mutated']>, "website_translations_mutated", ParentType, ContextType, TSubscriptionWebsiteTranslationsMutatedArgs>;
  work_mutated: SubscriptionResolver<Maybe<TResolversTypes['work_mutated']>, "work_mutated", ParentType, ContextType, TSubscriptionWorkMutatedArgs>;
  work_project_mutated: SubscriptionResolver<Maybe<TResolversTypes['work_project_mutated']>, "work_project_mutated", ParentType, ContextType, TSubscriptionWorkProjectMutatedArgs>;
};

export type TAccommodationResolvers<ContextType = any, ParentType extends TResolversParentTypes['accommodation'] = TResolversParentTypes['accommodation']> = {
  bookings: Resolver<Maybe<Array<Maybe<TResolversTypes['booking']>>>, ParentType, ContextType, TAccommodationBookingsArgs>;
  bookings_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  place: Resolver<Maybe<TResolversTypes['place']>, ParentType, ContextType, TAccommodationPlaceArgs>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAccommodationAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['accommodation_aggregated'] = TResolversParentTypes['accommodation_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['accommodation_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['accommodation_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['accommodation_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['accommodation_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['accommodation_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['accommodation_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['accommodation_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['accommodation_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAccommodationAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['accommodation_aggregated_count'] = TResolversParentTypes['accommodation_aggregated_count']> = {
  bookings: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  place: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAccommodationAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['accommodation_aggregated_fields'] = TResolversParentTypes['accommodation_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  place: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAccommodationMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['accommodation_mutated'] = TResolversParentTypes['accommodation_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['accommodation']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthorResolvers<ContextType = any, ParentType extends TResolversParentTypes['author'] = TResolversParentTypes['author']> = {
  books: Resolver<Maybe<Array<Maybe<TResolversTypes['author_book']>>>, ParentType, ContextType, TAuthorBooksArgs>;
  books_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthorAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['author_aggregated'] = TResolversParentTypes['author_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['author_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['author_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['author_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['author_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['author_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['author_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['author_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['author_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthorAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['author_aggregated_count'] = TResolversParentTypes['author_aggregated_count']> = {
  books: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthorAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['author_aggregated_fields'] = TResolversParentTypes['author_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthorBookResolvers<ContextType = any, ParentType extends TResolversParentTypes['author_book'] = TResolversParentTypes['author_book']> = {
  author_id: Resolver<Maybe<TResolversTypes['author']>, ParentType, ContextType, TAuthorBookAuthorIdArgs>;
  book_id: Resolver<Maybe<TResolversTypes['book']>, ParentType, ContextType, TAuthorBookBookIdArgs>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthorBookAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['author_book_aggregated'] = TResolversParentTypes['author_book_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['author_book_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['author_book_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['author_book_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['author_book_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['author_book_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['author_book_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['author_book_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['author_book_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthorBookAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['author_book_aggregated_count'] = TResolversParentTypes['author_book_aggregated_count']> = {
  author_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  book_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthorBookAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['author_book_aggregated_fields'] = TResolversParentTypes['author_book_aggregated_fields']> = {
  author_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  book_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthorBookMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['author_book_mutated'] = TResolversParentTypes['author_book_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['author_book']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TAuthorMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['author_mutated'] = TResolversParentTypes['author_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['author']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog'] = TResolversParentTypes['blog']> = {
  date_created: Resolver<Maybe<TResolversTypes['Date']>, ParentType, ContextType>;
  date_created_func: Resolver<Maybe<TResolversTypes['date_functions']>, ParentType, ContextType>;
  elements: Resolver<Maybe<Array<Maybe<TResolversTypes['blog_elements']>>>, ParentType, ContextType, TBlogElementsArgs>;
  elements_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  slug: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  status: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  teaser_text: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  technology: Resolver<Maybe<Array<Maybe<TResolversTypes['blog_technology']>>>, ParentType, ContextType, TBlogTechnologyArgs>;
  technology_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_aggregated'] = TResolversParentTypes['blog_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['blog_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['blog_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['blog_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['blog_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['blog_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['blog_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['blog_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['blog_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_aggregated_count'] = TResolversParentTypes['blog_aggregated_count']> = {
  date_created: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  elements: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  slug: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  status: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  teaser_text: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  technology: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_aggregated_fields'] = TResolversParentTypes['blog_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogElementsResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_elements'] = TResolversParentTypes['blog_elements']> = {
  blog_id: Resolver<Maybe<TResolversTypes['blog']>, ParentType, ContextType, TBlogElementsBlogIdArgs>;
  collection: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  item: Resolver<Maybe<TResolversTypes['blog_elements_item_union']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogElementsAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_elements_aggregated'] = TResolversParentTypes['blog_elements_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['blog_elements_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['blog_elements_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['blog_elements_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['blog_elements_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['blog_elements_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['blog_elements_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['blog_elements_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['blog_elements_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogElementsAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_elements_aggregated_count'] = TResolversParentTypes['blog_elements_aggregated_count']> = {
  blog_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  collection: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  item: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogElementsAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_elements_aggregated_fields'] = TResolversParentTypes['blog_elements_aggregated_fields']> = {
  blog_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogElementsItemUnionResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_elements_item_union'] = TResolversParentTypes['blog_elements_item_union']> = {
  __resolveType: TypeResolveFn<'blog_image' | 'blog_map' | 'blog_quote' | 'blog_text' | 'blog_title' | 'blog_video', ParentType, ContextType>;
};

export type TBlogElementsMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_elements_mutated'] = TResolversParentTypes['blog_elements_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['blog_elements']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogImageResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_image'] = TResolversParentTypes['blog_image']> = {
  caption: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  image: Resolver<Maybe<TResolversTypes['directus_files']>, ParentType, ContextType, TBlogImageImageArgs>;
  invert: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogImageAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_image_aggregated'] = TResolversParentTypes['blog_image_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['blog_image_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['blog_image_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['blog_image_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['blog_image_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['blog_image_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['blog_image_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['blog_image_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['blog_image_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogImageAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_image_aggregated_count'] = TResolversParentTypes['blog_image_aggregated_count']> = {
  caption: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  image: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  invert: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogImageAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_image_aggregated_fields'] = TResolversParentTypes['blog_image_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogImageMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_image_mutated'] = TResolversParentTypes['blog_image_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['blog_image']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogMapResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_map'] = TResolversParentTypes['blog_map']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogMapAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_map_aggregated'] = TResolversParentTypes['blog_map_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['blog_map_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['blog_map_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['blog_map_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['blog_map_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['blog_map_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['blog_map_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['blog_map_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['blog_map_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogMapAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_map_aggregated_count'] = TResolversParentTypes['blog_map_aggregated_count']> = {
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogMapAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_map_aggregated_fields'] = TResolversParentTypes['blog_map_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogMapMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_map_mutated'] = TResolversParentTypes['blog_map_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['blog_map']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_mutated'] = TResolversParentTypes['blog_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['blog']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogQuoteResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_quote'] = TResolversParentTypes['blog_quote']> = {
  author: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  text: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  url: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogQuoteAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_quote_aggregated'] = TResolversParentTypes['blog_quote_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['blog_quote_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['blog_quote_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['blog_quote_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['blog_quote_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['blog_quote_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['blog_quote_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['blog_quote_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['blog_quote_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogQuoteAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_quote_aggregated_count'] = TResolversParentTypes['blog_quote_aggregated_count']> = {
  author: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  text: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  url: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogQuoteAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_quote_aggregated_fields'] = TResolversParentTypes['blog_quote_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogQuoteMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_quote_mutated'] = TResolversParentTypes['blog_quote_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['blog_quote']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogTechnologyResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_technology'] = TResolversParentTypes['blog_technology']> = {
  blog_id: Resolver<Maybe<TResolversTypes['blog']>, ParentType, ContextType, TBlogTechnologyBlogIdArgs>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  technology_id: Resolver<Maybe<TResolversTypes['technology']>, ParentType, ContextType, TBlogTechnologyTechnologyIdArgs>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogTechnologyAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_technology_aggregated'] = TResolversParentTypes['blog_technology_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['blog_technology_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['blog_technology_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['blog_technology_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['blog_technology_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['blog_technology_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['blog_technology_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['blog_technology_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['blog_technology_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogTechnologyAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_technology_aggregated_count'] = TResolversParentTypes['blog_technology_aggregated_count']> = {
  blog_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  technology_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogTechnologyAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_technology_aggregated_fields'] = TResolversParentTypes['blog_technology_aggregated_fields']> = {
  blog_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  technology_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogTechnologyMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_technology_mutated'] = TResolversParentTypes['blog_technology_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['blog_technology']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogTextResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_text'] = TResolversParentTypes['blog_text']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  text: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  word_count: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogTextAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_text_aggregated'] = TResolversParentTypes['blog_text_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['blog_text_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['blog_text_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['blog_text_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['blog_text_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['blog_text_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['blog_text_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['blog_text_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['blog_text_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogTextAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_text_aggregated_count'] = TResolversParentTypes['blog_text_aggregated_count']> = {
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  text: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  word_count: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogTextAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_text_aggregated_fields'] = TResolversParentTypes['blog_text_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogTextMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_text_mutated'] = TResolversParentTypes['blog_text_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['blog_text']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogTitleResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_title'] = TResolversParentTypes['blog_title']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  level: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  tag: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogTitleAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_title_aggregated'] = TResolversParentTypes['blog_title_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['blog_title_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['blog_title_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['blog_title_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['blog_title_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['blog_title_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['blog_title_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['blog_title_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['blog_title_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogTitleAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_title_aggregated_count'] = TResolversParentTypes['blog_title_aggregated_count']> = {
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  level: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  tag: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogTitleAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_title_aggregated_fields'] = TResolversParentTypes['blog_title_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogTitleMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_title_mutated'] = TResolversParentTypes['blog_title_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['blog_title']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogVideoResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_video'] = TResolversParentTypes['blog_video']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  url: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogVideoAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_video_aggregated'] = TResolversParentTypes['blog_video_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['blog_video_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['blog_video_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['blog_video_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['blog_video_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['blog_video_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['blog_video_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['blog_video_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['blog_video_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogVideoAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_video_aggregated_count'] = TResolversParentTypes['blog_video_aggregated_count']> = {
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  url: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogVideoAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_video_aggregated_fields'] = TResolversParentTypes['blog_video_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBlogVideoMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['blog_video_mutated'] = TResolversParentTypes['blog_video_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['blog_video']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookResolvers<ContextType = any, ParentType extends TResolversParentTypes['book'] = TResolversParentTypes['book']> = {
  authors: Resolver<Maybe<Array<Maybe<TResolversTypes['author_book']>>>, ParentType, ContextType, TBookAuthorsArgs>;
  authors_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  book_series: Resolver<Maybe<TResolversTypes['book_series']>, ParentType, ContextType, TBookBookSeriesArgs>;
  category: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  internal: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  language: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  number_in_series: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  number_in_year: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  pages: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  positions: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  translations: Resolver<Maybe<Array<Maybe<TResolversTypes['book_translations']>>>, ParentType, ContextType, TBookTranslationsArgs>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  words: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  year: Resolver<Maybe<TResolversTypes['book_year']>, ParentType, ContextType, TBookYearArgs>;
  year_published: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_aggregated'] = TResolversParentTypes['book_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['book_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['book_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['book_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['book_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['book_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['book_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['book_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['book_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_aggregated_count'] = TResolversParentTypes['book_aggregated_count']> = {
  authors: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  book_series: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  category: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  internal: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  language: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  number_in_series: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  number_in_year: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  pages: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  positions: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  words: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  year: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  year_published: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_aggregated_fields'] = TResolversParentTypes['book_aggregated_fields']> = {
  book_series: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  number_in_series: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  number_in_year: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  pages: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  positions: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  words: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  year: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_mutated'] = TResolversParentTypes['book_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['book']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookSeriesResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_series'] = TResolversParentTypes['book_series']> = {
  books: Resolver<Maybe<Array<Maybe<TResolversTypes['book']>>>, ParentType, ContextType, TBookSeriesBooksArgs>;
  books_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  internal: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  translations: Resolver<Maybe<Array<Maybe<TResolversTypes['book_series_translations']>>>, ParentType, ContextType, TBookSeriesTranslationsArgs>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookSeriesAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_series_aggregated'] = TResolversParentTypes['book_series_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['book_series_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['book_series_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['book_series_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['book_series_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['book_series_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['book_series_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['book_series_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['book_series_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookSeriesAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_series_aggregated_count'] = TResolversParentTypes['book_series_aggregated_count']> = {
  books: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  internal: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookSeriesAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_series_aggregated_fields'] = TResolversParentTypes['book_series_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookSeriesMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_series_mutated'] = TResolversParentTypes['book_series_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['book_series']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookSeriesTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_series_translations'] = TResolversParentTypes['book_series_translations']> = {
  book_series_id: Resolver<Maybe<TResolversTypes['book_series']>, ParentType, ContextType, TBookSeriesTranslationsBookSeriesIdArgs>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['languages']>, ParentType, ContextType, TBookSeriesTranslationsLanguagesCodeArgs>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookSeriesTranslationsAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_series_translations_aggregated'] = TResolversParentTypes['book_series_translations_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['book_series_translations_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['book_series_translations_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['book_series_translations_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['book_series_translations_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['book_series_translations_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['book_series_translations_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['book_series_translations_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['book_series_translations_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookSeriesTranslationsAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_series_translations_aggregated_count'] = TResolversParentTypes['book_series_translations_aggregated_count']> = {
  book_series_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookSeriesTranslationsAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_series_translations_aggregated_fields'] = TResolversParentTypes['book_series_translations_aggregated_fields']> = {
  book_series_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookSeriesTranslationsMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_series_translations_mutated'] = TResolversParentTypes['book_series_translations_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['book_series_translations']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_translations'] = TResolversParentTypes['book_translations']> = {
  book_id: Resolver<Maybe<TResolversTypes['book']>, ParentType, ContextType, TBookTranslationsBookIdArgs>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['languages']>, ParentType, ContextType, TBookTranslationsLanguagesCodeArgs>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookTranslationsAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_translations_aggregated'] = TResolversParentTypes['book_translations_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['book_translations_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['book_translations_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['book_translations_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['book_translations_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['book_translations_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['book_translations_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['book_translations_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['book_translations_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookTranslationsAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_translations_aggregated_count'] = TResolversParentTypes['book_translations_aggregated_count']> = {
  book_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookTranslationsAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_translations_aggregated_fields'] = TResolversParentTypes['book_translations_aggregated_fields']> = {
  book_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookTranslationsMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_translations_mutated'] = TResolversParentTypes['book_translations_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['book_translations']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookYearResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_year'] = TResolversParentTypes['book_year']> = {
  books: Resolver<Maybe<Array<Maybe<TResolversTypes['book']>>>, ParentType, ContextType, TBookYearBooksArgs>;
  books_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  internal: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  translations: Resolver<Maybe<Array<Maybe<TResolversTypes['book_year_translations']>>>, ParentType, ContextType, TBookYearTranslationsArgs>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookYearAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_year_aggregated'] = TResolversParentTypes['book_year_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['book_year_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['book_year_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['book_year_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['book_year_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['book_year_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['book_year_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['book_year_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['book_year_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookYearAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_year_aggregated_count'] = TResolversParentTypes['book_year_aggregated_count']> = {
  books: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  internal: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookYearAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_year_aggregated_fields'] = TResolversParentTypes['book_year_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookYearMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_year_mutated'] = TResolversParentTypes['book_year_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['book_year']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookYearTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_year_translations'] = TResolversParentTypes['book_year_translations']> = {
  book_year_id: Resolver<Maybe<TResolversTypes['book_year']>, ParentType, ContextType, TBookYearTranslationsBookYearIdArgs>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['languages']>, ParentType, ContextType, TBookYearTranslationsLanguagesCodeArgs>;
  name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookYearTranslationsAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_year_translations_aggregated'] = TResolversParentTypes['book_year_translations_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['book_year_translations_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['book_year_translations_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['book_year_translations_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['book_year_translations_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['book_year_translations_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['book_year_translations_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['book_year_translations_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['book_year_translations_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookYearTranslationsAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_year_translations_aggregated_count'] = TResolversParentTypes['book_year_translations_aggregated_count']> = {
  book_year_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookYearTranslationsAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_year_translations_aggregated_fields'] = TResolversParentTypes['book_year_translations_aggregated_fields']> = {
  book_year_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookYearTranslationsMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['book_year_translations_mutated'] = TResolversParentTypes['book_year_translations_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['book_year_translations']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookingResolvers<ContextType = any, ParentType extends TResolversParentTypes['booking'] = TResolversParentTypes['booking']> = {
  accommodation: Resolver<Maybe<TResolversTypes['accommodation']>, ParentType, ContextType, TBookingAccommodationArgs>;
  arrival: Resolver<Maybe<TResolversTypes['Date']>, ParentType, ContextType>;
  arrival_func: Resolver<Maybe<TResolversTypes['datetime_functions']>, ParentType, ContextType>;
  booking: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  departure: Resolver<Maybe<TResolversTypes['Date']>, ParentType, ContextType>;
  departure_func: Resolver<Maybe<TResolversTypes['datetime_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  price_per_night: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  type: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookingAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['booking_aggregated'] = TResolversParentTypes['booking_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['booking_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['booking_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['booking_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['booking_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['booking_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['booking_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['booking_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['booking_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookingAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['booking_aggregated_count'] = TResolversParentTypes['booking_aggregated_count']> = {
  accommodation: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  arrival: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  booking: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  departure: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  price_per_night: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  type: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookingAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['booking_aggregated_fields'] = TResolversParentTypes['booking_aggregated_fields']> = {
  accommodation: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  price_per_night: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TBookingMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['booking_mutated'] = TResolversParentTypes['booking_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['booking']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TCountFunctionsResolvers<ContextType = any, ParentType extends TResolversParentTypes['count_functions'] = TResolversParentTypes['count_functions']> = {
  count: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TCountryResolvers<ContextType = any, ParentType extends TResolversParentTypes['country'] = TResolversParentTypes['country']> = {
  alpha3: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  currency_code: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  internal: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  place: Resolver<Maybe<Array<Maybe<TResolversTypes['place']>>>, ParentType, ContextType, TCountryPlaceArgs>;
  place_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  translations: Resolver<Maybe<Array<Maybe<TResolversTypes['country_translations']>>>, ParentType, ContextType, TCountryTranslationsArgs>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TCountryAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['country_aggregated'] = TResolversParentTypes['country_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['country_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['country_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['country_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['country_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['country_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['country_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['country_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['country_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TCountryAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['country_aggregated_count'] = TResolversParentTypes['country_aggregated_count']> = {
  alpha3: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  currency_code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  internal: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  place: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TCountryAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['country_aggregated_fields'] = TResolversParentTypes['country_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TCountryMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['country_mutated'] = TResolversParentTypes['country_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['country']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TCountryTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['country_translations'] = TResolversParentTypes['country_translations']> = {
  capital: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  country_id: Resolver<Maybe<TResolversTypes['country']>, ParentType, ContextType, TCountryTranslationsCountryIdArgs>;
  currency: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['languages']>, ParentType, ContextType, TCountryTranslationsLanguagesCodeArgs>;
  name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TCountryTranslationsAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['country_translations_aggregated'] = TResolversParentTypes['country_translations_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['country_translations_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['country_translations_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['country_translations_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['country_translations_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['country_translations_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['country_translations_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['country_translations_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['country_translations_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TCountryTranslationsAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['country_translations_aggregated_count'] = TResolversParentTypes['country_translations_aggregated_count']> = {
  capital: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  country_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  currency: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TCountryTranslationsAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['country_translations_aggregated_fields'] = TResolversParentTypes['country_translations_aggregated_fields']> = {
  country_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TCountryTranslationsMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['country_translations_mutated'] = TResolversParentTypes['country_translations_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['country_translations']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TDateFunctionsResolvers<ContextType = any, ParentType extends TResolversParentTypes['date_functions'] = TResolversParentTypes['date_functions']> = {
  day: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  month: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  week: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  weekday: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  year: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TDatetimeFunctionsResolvers<ContextType = any, ParentType extends TResolversParentTypes['datetime_functions'] = TResolversParentTypes['datetime_functions']> = {
  day: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  hour: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  minute: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  month: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  second: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  week: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  weekday: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  year: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TDirectusFilesResolvers<ContextType = any, ParentType extends TResolversParentTypes['directus_files'] = TResolversParentTypes['directus_files']> = {
  charset: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  created_on: Resolver<Maybe<TResolversTypes['Date']>, ParentType, ContextType>;
  created_on_func: Resolver<Maybe<TResolversTypes['datetime_functions']>, ParentType, ContextType>;
  description: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  duration: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  embed: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  filename_disk: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  filename_download: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  filesize: Resolver<Maybe<TResolversTypes['GraphQLBigInt']>, ParentType, ContextType>;
  focal_point_x: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  focal_point_y: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  folder: Resolver<Maybe<TResolversTypes['directus_folders']>, ParentType, ContextType, TDirectusFilesFolderArgs>;
  height: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  location: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  metadata: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  metadata_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  modified_by: Resolver<Maybe<TResolversTypes['directus_users']>, ParentType, ContextType, TDirectusFilesModifiedByArgs>;
  modified_on: Resolver<Maybe<TResolversTypes['Date']>, ParentType, ContextType>;
  modified_on_func: Resolver<Maybe<TResolversTypes['datetime_functions']>, ParentType, ContextType>;
  storage: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  tags: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  tags_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  tus_data: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  tus_data_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  tus_id: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  type: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  uploaded_by: Resolver<Maybe<TResolversTypes['directus_users']>, ParentType, ContextType, TDirectusFilesUploadedByArgs>;
  uploaded_on: Resolver<Maybe<TResolversTypes['Date']>, ParentType, ContextType>;
  uploaded_on_func: Resolver<Maybe<TResolversTypes['datetime_functions']>, ParentType, ContextType>;
  width: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TDirectusFilesMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['directus_files_mutated'] = TResolversParentTypes['directus_files_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['directus_files']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TDirectusFoldersResolvers<ContextType = any, ParentType extends TResolversParentTypes['directus_folders'] = TResolversParentTypes['directus_folders']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  parent: Resolver<Maybe<TResolversTypes['directus_folders']>, ParentType, ContextType, TDirectusFoldersParentArgs>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TDirectusFoldersMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['directus_folders_mutated'] = TResolversParentTypes['directus_folders_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['directus_folders']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TDirectusRolesResolvers<ContextType = any, ParentType extends TResolversParentTypes['directus_roles'] = TResolversParentTypes['directus_roles']> = {
  children: Resolver<Maybe<Array<Maybe<TResolversTypes['directus_roles']>>>, ParentType, ContextType, TDirectusRolesChildrenArgs>;
  children_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  description: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  icon: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  parent: Resolver<Maybe<TResolversTypes['directus_roles']>, ParentType, ContextType, TDirectusRolesParentArgs>;
  policies: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  policies_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  users: Resolver<Maybe<Array<Maybe<TResolversTypes['directus_users']>>>, ParentType, ContextType, TDirectusRolesUsersArgs>;
  users_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TDirectusRolesMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['directus_roles_mutated'] = TResolversParentTypes['directus_roles_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['directus_roles']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TDirectusSettingsResolvers<ContextType = any, ParentType extends TResolversParentTypes['directus_settings'] = TResolversParentTypes['directus_settings']> = {
  auth_login_attempts: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  auth_password_policy: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  basemaps: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  basemaps_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  custom_aspect_ratios: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  custom_aspect_ratios_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  custom_css: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  default_appearance: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  default_language: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  default_theme_dark: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  default_theme_light: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  mapbox_key: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  module_bar: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  module_bar_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  project_color: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  project_descriptor: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  project_logo: Resolver<Maybe<TResolversTypes['directus_files']>, ParentType, ContextType, TDirectusSettingsProjectLogoArgs>;
  project_name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  project_url: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  public_background: Resolver<Maybe<TResolversTypes['directus_files']>, ParentType, ContextType, TDirectusSettingsPublicBackgroundArgs>;
  public_favicon: Resolver<Maybe<TResolversTypes['directus_files']>, ParentType, ContextType, TDirectusSettingsPublicFaviconArgs>;
  public_foreground: Resolver<Maybe<TResolversTypes['directus_files']>, ParentType, ContextType, TDirectusSettingsPublicForegroundArgs>;
  public_note: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  public_registration: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  public_registration_email_filter: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  public_registration_email_filter_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  public_registration_role: Resolver<Maybe<TResolversTypes['directus_roles']>, ParentType, ContextType, TDirectusSettingsPublicRegistrationRoleArgs>;
  public_registration_verify_email: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  report_bug_url: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  report_error_url: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  report_feature_url: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  storage_asset_presets: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  storage_asset_presets_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  storage_asset_transform: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  storage_default_folder: Resolver<Maybe<TResolversTypes['directus_folders']>, ParentType, ContextType, TDirectusSettingsStorageDefaultFolderArgs>;
  theme_dark_overrides: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  theme_dark_overrides_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  theme_light_overrides: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  theme_light_overrides_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TDirectusSettingsMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['directus_settings_mutated'] = TResolversParentTypes['directus_settings_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['directus_settings']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TDirectusUsersResolvers<ContextType = any, ParentType extends TResolversParentTypes['directus_users'] = TResolversParentTypes['directus_users']> = {
  appearance: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  auth_data: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  auth_data_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  avatar: Resolver<Maybe<TResolversTypes['directus_files']>, ParentType, ContextType, TDirectusUsersAvatarArgs>;
  description: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  email: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  email_notifications: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  external_identifier: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  first_name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  language: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  last_access: Resolver<Maybe<TResolversTypes['Date']>, ParentType, ContextType>;
  last_access_func: Resolver<Maybe<TResolversTypes['datetime_functions']>, ParentType, ContextType>;
  last_name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  last_page: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  location: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  password: Resolver<Maybe<TResolversTypes['Hash']>, ParentType, ContextType>;
  policies: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  policies_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  provider: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  role: Resolver<Maybe<TResolversTypes['directus_roles']>, ParentType, ContextType, TDirectusUsersRoleArgs>;
  status: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  tags: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  tags_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  tfa_secret: Resolver<Maybe<TResolversTypes['Hash']>, ParentType, ContextType>;
  theme_dark: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  theme_dark_overrides: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  theme_dark_overrides_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  theme_light: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  theme_light_overrides: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  theme_light_overrides_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  token: Resolver<Maybe<TResolversTypes['Hash']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TDirectusUsersMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['directus_users_mutated'] = TResolversParentTypes['directus_users_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['directus_users']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TLanguagesResolvers<ContextType = any, ParentType extends TResolversParentTypes['languages'] = TResolversParentTypes['languages']> = {
  abbreviation: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  code: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TLanguagesAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['languages_aggregated'] = TResolversParentTypes['languages_aggregated']> = {
  count: Resolver<Maybe<TResolversTypes['languages_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['languages_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TLanguagesAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['languages_aggregated_count'] = TResolversParentTypes['languages_aggregated_count']> = {
  abbreviation: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TLanguagesMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['languages_mutated'] = TResolversParentTypes['languages_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['languages']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation'] = TResolversParentTypes['navigation']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  image: Resolver<Maybe<TResolversTypes['directus_files']>, ParentType, ContextType, TNavigationImageArgs>;
  main_navigation_items: Resolver<Maybe<Array<Maybe<TResolversTypes['navigation_item']>>>, ParentType, ContextType, TNavigationMainNavigationItemsArgs>;
  main_navigation_items_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  misc_navigation_items: Resolver<Maybe<Array<Maybe<TResolversTypes['navigation_item']>>>, ParentType, ContextType, TNavigationMiscNavigationItemsArgs>;
  misc_navigation_items_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  translations: Resolver<Maybe<Array<Maybe<TResolversTypes['navigation_translations']>>>, ParentType, ContextType, TNavigationTranslationsArgs>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationItemResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_item'] = TResolversParentTypes['navigation_item']> = {
  active: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  icon: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  line: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  main_navigation: Resolver<Maybe<TResolversTypes['navigation']>, ParentType, ContextType, TNavigationItemMainNavigationArgs>;
  misc_navigation: Resolver<Maybe<TResolversTypes['navigation']>, ParentType, ContextType, TNavigationItemMiscNavigationArgs>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  translations: Resolver<Maybe<Array<Maybe<TResolversTypes['navigation_item_translations']>>>, ParentType, ContextType, TNavigationItemTranslationsArgs>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  url: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationItemAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_item_aggregated'] = TResolversParentTypes['navigation_item_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['navigation_item_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['navigation_item_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['navigation_item_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['navigation_item_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['navigation_item_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['navigation_item_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['navigation_item_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['navigation_item_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationItemAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_item_aggregated_count'] = TResolversParentTypes['navigation_item_aggregated_count']> = {
  active: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  icon: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  line: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  main_navigation: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  misc_navigation: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  url: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationItemAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_item_aggregated_fields'] = TResolversParentTypes['navigation_item_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  main_navigation: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  misc_navigation: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationItemMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_item_mutated'] = TResolversParentTypes['navigation_item_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['navigation_item']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationItemTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_item_translations'] = TResolversParentTypes['navigation_item_translations']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  label: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['languages']>, ParentType, ContextType, TNavigationItemTranslationsLanguagesCodeArgs>;
  navigation_item_id: Resolver<Maybe<TResolversTypes['navigation_item']>, ParentType, ContextType, TNavigationItemTranslationsNavigationItemIdArgs>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationItemTranslationsAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_item_translations_aggregated'] = TResolversParentTypes['navigation_item_translations_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['navigation_item_translations_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['navigation_item_translations_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['navigation_item_translations_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['navigation_item_translations_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['navigation_item_translations_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['navigation_item_translations_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['navigation_item_translations_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['navigation_item_translations_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationItemTranslationsAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_item_translations_aggregated_count'] = TResolversParentTypes['navigation_item_translations_aggregated_count']> = {
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  label: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  navigation_item_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationItemTranslationsAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_item_translations_aggregated_fields'] = TResolversParentTypes['navigation_item_translations_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  navigation_item_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationItemTranslationsMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_item_translations_mutated'] = TResolversParentTypes['navigation_item_translations_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['navigation_item_translations']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_mutated'] = TResolversParentTypes['navigation_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['navigation']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_translations'] = TResolversParentTypes['navigation_translations']> = {
  contact: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  cv: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  dark: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  language: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['languages']>, ParentType, ContextType, TNavigationTranslationsLanguagesCodeArgs>;
  navigation_id: Resolver<Maybe<TResolversTypes['navigation']>, ParentType, ContextType, TNavigationTranslationsNavigationIdArgs>;
  search: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationTranslationsAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_translations_aggregated'] = TResolversParentTypes['navigation_translations_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['navigation_translations_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['navigation_translations_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['navigation_translations_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['navigation_translations_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['navigation_translations_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['navigation_translations_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['navigation_translations_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['navigation_translations_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationTranslationsAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_translations_aggregated_count'] = TResolversParentTypes['navigation_translations_aggregated_count']> = {
  contact: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  cv: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  dark: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  language: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  navigation_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  search: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationTranslationsAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_translations_aggregated_fields'] = TResolversParentTypes['navigation_translations_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  navigation_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNavigationTranslationsMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['navigation_translations_mutated'] = TResolversParentTypes['navigation_translations_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['navigation_translations']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNotFoundResolvers<ContextType = any, ParentType extends TResolversParentTypes['not_found'] = TResolversParentTypes['not_found']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  translations: Resolver<Maybe<Array<Maybe<TResolversTypes['not_found_translations']>>>, ParentType, ContextType, TNotFoundTranslationsArgs>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNotFoundMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['not_found_mutated'] = TResolversParentTypes['not_found_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['not_found']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNotFoundTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['not_found_translations'] = TResolversParentTypes['not_found_translations']> = {
  button: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['languages']>, ParentType, ContextType, TNotFoundTranslationsLanguagesCodeArgs>;
  navigation: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  not_found_id: Resolver<Maybe<TResolversTypes['not_found']>, ParentType, ContextType, TNotFoundTranslationsNotFoundIdArgs>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNotFoundTranslationsAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['not_found_translations_aggregated'] = TResolversParentTypes['not_found_translations_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['not_found_translations_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['not_found_translations_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['not_found_translations_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['not_found_translations_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['not_found_translations_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['not_found_translations_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['not_found_translations_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['not_found_translations_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNotFoundTranslationsAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['not_found_translations_aggregated_count'] = TResolversParentTypes['not_found_translations_aggregated_count']> = {
  button: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  navigation: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  not_found_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNotFoundTranslationsAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['not_found_translations_aggregated_fields'] = TResolversParentTypes['not_found_translations_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  not_found_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TNotFoundTranslationsMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['not_found_translations_mutated'] = TResolversParentTypes['not_found_translations_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['not_found_translations']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TPlaceResolvers<ContextType = any, ParentType extends TResolversParentTypes['place'] = TResolversParentTypes['place']> = {
  accommodation: Resolver<Maybe<Array<Maybe<TResolversTypes['accommodation']>>>, ParentType, ContextType, TPlaceAccommodationArgs>;
  accommodation_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  album: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  country: Resolver<Maybe<TResolversTypes['country']>, ParentType, ContextType, TPlaceCountryArgs>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  internal: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  location: Resolver<Maybe<TResolversTypes['GraphQLGeoJSON']>, ParentType, ContextType>;
  secret_blog: Resolver<Maybe<Array<Maybe<TResolversTypes['secret_blog_place']>>>, ParentType, ContextType, TPlaceSecretBlogArgs>;
  secret_blog_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  translations: Resolver<Maybe<Array<Maybe<TResolversTypes['place_translations']>>>, ParentType, ContextType, TPlaceTranslationsArgs>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  transportation: Resolver<Maybe<Array<Maybe<TResolversTypes['transportation']>>>, ParentType, ContextType, TPlaceTransportationArgs>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TPlaceAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['place_aggregated'] = TResolversParentTypes['place_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['place_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['place_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['place_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['place_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['place_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['place_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['place_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['place_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TPlaceAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['place_aggregated_count'] = TResolversParentTypes['place_aggregated_count']> = {
  accommodation: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  album: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  country: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  internal: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  location: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  secret_blog: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TPlaceAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['place_aggregated_fields'] = TResolversParentTypes['place_aggregated_fields']> = {
  country: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TPlaceMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['place_mutated'] = TResolversParentTypes['place_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['place']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TPlaceTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['place_translations'] = TResolversParentTypes['place_translations']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['languages']>, ParentType, ContextType, TPlaceTranslationsLanguagesCodeArgs>;
  name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  place_id: Resolver<Maybe<TResolversTypes['place']>, ParentType, ContextType, TPlaceTranslationsPlaceIdArgs>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TPlaceTranslationsAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['place_translations_aggregated'] = TResolversParentTypes['place_translations_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['place_translations_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['place_translations_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['place_translations_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['place_translations_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['place_translations_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['place_translations_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['place_translations_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['place_translations_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TPlaceTranslationsAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['place_translations_aggregated_count'] = TResolversParentTypes['place_translations_aggregated_count']> = {
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  place_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TPlaceTranslationsAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['place_translations_aggregated_fields'] = TResolversParentTypes['place_translations_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  place_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TPlaceTranslationsMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['place_translations_mutated'] = TResolversParentTypes['place_translations_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['place_translations']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectResolvers<ContextType = any, ParentType extends TResolversParentTypes['project'] = TResolversParentTypes['project']> = {
  color: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  gallery: Resolver<Maybe<Array<Maybe<TResolversTypes['project_directus_files']>>>, ParentType, ContextType, TProjectGalleryArgs>;
  gallery_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  slug: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  technologies: Resolver<Maybe<Array<Maybe<TResolversTypes['project_technology']>>>, ParentType, ContextType, TProjectTechnologiesArgs>;
  technologies_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  translations: Resolver<Maybe<Array<Maybe<TResolversTypes['project_translations']>>>, ParentType, ContextType, TProjectTranslationsArgs>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  url: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  work: Resolver<Maybe<Array<Maybe<TResolversTypes['work_project']>>>, ParentType, ContextType, TProjectWorkArgs>;
  work_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_aggregated'] = TResolversParentTypes['project_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['project_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['project_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['project_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['project_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['project_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['project_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['project_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['project_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_aggregated_count'] = TResolversParentTypes['project_aggregated_count']> = {
  color: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  gallery: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  slug: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  technologies: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  url: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  work: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_aggregated_fields'] = TResolversParentTypes['project_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectDirectusFilesResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_directus_files'] = TResolversParentTypes['project_directus_files']> = {
  directus_files_id: Resolver<Maybe<TResolversTypes['directus_files']>, ParentType, ContextType, TProjectDirectusFilesDirectusFilesIdArgs>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  project_id: Resolver<Maybe<TResolversTypes['project']>, ParentType, ContextType, TProjectDirectusFilesProjectIdArgs>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectDirectusFilesAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_directus_files_aggregated'] = TResolversParentTypes['project_directus_files_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['project_directus_files_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['project_directus_files_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['project_directus_files_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['project_directus_files_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['project_directus_files_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['project_directus_files_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['project_directus_files_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['project_directus_files_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectDirectusFilesAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_directus_files_aggregated_count'] = TResolversParentTypes['project_directus_files_aggregated_count']> = {
  directus_files_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  project_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectDirectusFilesAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_directus_files_aggregated_fields'] = TResolversParentTypes['project_directus_files_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  project_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectDirectusFilesMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_directus_files_mutated'] = TResolversParentTypes['project_directus_files_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['project_directus_files']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_mutated'] = TResolversParentTypes['project_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['project']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectTechnologyResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_technology'] = TResolversParentTypes['project_technology']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  project_id: Resolver<Maybe<TResolversTypes['project']>, ParentType, ContextType, TProjectTechnologyProjectIdArgs>;
  secondary: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  technology_id: Resolver<Maybe<TResolversTypes['technology']>, ParentType, ContextType, TProjectTechnologyTechnologyIdArgs>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectTechnologyAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_technology_aggregated'] = TResolversParentTypes['project_technology_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['project_technology_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['project_technology_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['project_technology_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['project_technology_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['project_technology_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['project_technology_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['project_technology_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['project_technology_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectTechnologyAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_technology_aggregated_count'] = TResolversParentTypes['project_technology_aggregated_count']> = {
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  project_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  secondary: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  technology_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectTechnologyAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_technology_aggregated_fields'] = TResolversParentTypes['project_technology_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  project_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  technology_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectTechnologyMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_technology_mutated'] = TResolversParentTypes['project_technology_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['project_technology']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_translations'] = TResolversParentTypes['project_translations']> = {
  description: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['languages']>, ParentType, ContextType, TProjectTranslationsLanguagesCodeArgs>;
  project_id: Resolver<Maybe<TResolversTypes['project']>, ParentType, ContextType, TProjectTranslationsProjectIdArgs>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectTranslationsAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_translations_aggregated'] = TResolversParentTypes['project_translations_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['project_translations_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['project_translations_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['project_translations_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['project_translations_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['project_translations_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['project_translations_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['project_translations_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['project_translations_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectTranslationsAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_translations_aggregated_count'] = TResolversParentTypes['project_translations_aggregated_count']> = {
  description: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  project_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectTranslationsAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_translations_aggregated_fields'] = TResolversParentTypes['project_translations_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  project_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TProjectTranslationsMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['project_translations_mutated'] = TResolversParentTypes['project_translations_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['project_translations']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TReadingResolvers<ContextType = any, ParentType extends TResolversParentTypes['reading'] = TResolversParentTypes['reading']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TReadingMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['reading_mutated'] = TResolversParentTypes['reading_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['reading']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSecretBlogResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog'] = TResolversParentTypes['secret_blog']> = {
  date_created: Resolver<Maybe<TResolversTypes['Date']>, ParentType, ContextType>;
  date_created_func: Resolver<Maybe<TResolversTypes['date_functions']>, ParentType, ContextType>;
  elements: Resolver<Maybe<Array<Maybe<TResolversTypes['secret_blog_elements']>>>, ParentType, ContextType, TSecretBlogElementsArgs>;
  elements_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  image: Resolver<Maybe<TResolversTypes['directus_files']>, ParentType, ContextType, TSecretBlogImageArgs>;
  place: Resolver<Maybe<Array<Maybe<TResolversTypes['secret_blog_place']>>>, ParentType, ContextType, TSecretBlogPlaceArgs>;
  place_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  slug: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  status: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  title: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSecretBlogAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog_aggregated'] = TResolversParentTypes['secret_blog_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['secret_blog_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['secret_blog_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['secret_blog_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['secret_blog_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['secret_blog_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['secret_blog_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['secret_blog_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['secret_blog_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSecretBlogAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog_aggregated_count'] = TResolversParentTypes['secret_blog_aggregated_count']> = {
  date_created: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  elements: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  image: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  place: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  slug: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  status: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSecretBlogAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog_aggregated_fields'] = TResolversParentTypes['secret_blog_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSecretBlogElementsResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog_elements'] = TResolversParentTypes['secret_blog_elements']> = {
  collection: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  item: Resolver<Maybe<TResolversTypes['secret_blog_elements_item_union']>, ParentType, ContextType>;
  secret_blog_id: Resolver<Maybe<TResolversTypes['secret_blog']>, ParentType, ContextType, TSecretBlogElementsSecretBlogIdArgs>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSecretBlogElementsAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog_elements_aggregated'] = TResolversParentTypes['secret_blog_elements_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['secret_blog_elements_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['secret_blog_elements_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['secret_blog_elements_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['secret_blog_elements_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['secret_blog_elements_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['secret_blog_elements_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['secret_blog_elements_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['secret_blog_elements_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSecretBlogElementsAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog_elements_aggregated_count'] = TResolversParentTypes['secret_blog_elements_aggregated_count']> = {
  collection: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  item: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  secret_blog_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSecretBlogElementsAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog_elements_aggregated_fields'] = TResolversParentTypes['secret_blog_elements_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  secret_blog_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSecretBlogElementsItemUnionResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog_elements_item_union'] = TResolversParentTypes['secret_blog_elements_item_union']> = {
  __resolveType: TypeResolveFn<'blog_image' | 'blog_map' | 'blog_quote' | 'blog_text' | 'blog_title' | 'blog_video', ParentType, ContextType>;
};

export type TSecretBlogElementsMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog_elements_mutated'] = TResolversParentTypes['secret_blog_elements_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['secret_blog_elements']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSecretBlogMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog_mutated'] = TResolversParentTypes['secret_blog_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['secret_blog']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSecretBlogPlaceResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog_place'] = TResolversParentTypes['secret_blog_place']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  place_id: Resolver<Maybe<TResolversTypes['place']>, ParentType, ContextType, TSecretBlogPlacePlaceIdArgs>;
  secret_blog_id: Resolver<Maybe<TResolversTypes['secret_blog']>, ParentType, ContextType, TSecretBlogPlaceSecretBlogIdArgs>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSecretBlogPlaceAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog_place_aggregated'] = TResolversParentTypes['secret_blog_place_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['secret_blog_place_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['secret_blog_place_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['secret_blog_place_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['secret_blog_place_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['secret_blog_place_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['secret_blog_place_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['secret_blog_place_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['secret_blog_place_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSecretBlogPlaceAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog_place_aggregated_count'] = TResolversParentTypes['secret_blog_place_aggregated_count']> = {
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  place_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  secret_blog_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSecretBlogPlaceAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog_place_aggregated_fields'] = TResolversParentTypes['secret_blog_place_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  place_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  secret_blog_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSecretBlogPlaceMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['secret_blog_place_mutated'] = TResolversParentTypes['secret_blog_place_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['secret_blog_place']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSubscribersResolvers<ContextType = any, ParentType extends TResolversParentTypes['subscribers'] = TResolversParentTypes['subscribers']> = {
  date_created: Resolver<Maybe<TResolversTypes['Date']>, ParentType, ContextType>;
  date_created_func: Resolver<Maybe<TResolversTypes['datetime_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  mail: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  status: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSubscribersAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['subscribers_aggregated'] = TResolversParentTypes['subscribers_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['subscribers_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['subscribers_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['subscribers_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['subscribers_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['subscribers_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['subscribers_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['subscribers_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['subscribers_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSubscribersAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['subscribers_aggregated_count'] = TResolversParentTypes['subscribers_aggregated_count']> = {
  date_created: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  mail: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  status: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSubscribersAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['subscribers_aggregated_fields'] = TResolversParentTypes['subscribers_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TSubscribersMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['subscribers_mutated'] = TResolversParentTypes['subscribers_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['subscribers']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology'] = TResolversParentTypes['technology']> = {
  blog: Resolver<Maybe<Array<Maybe<TResolversTypes['blog_technology']>>>, ParentType, ContextType, TTechnologyBlogArgs>;
  blog_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  category: Resolver<Maybe<TResolversTypes['technology_category']>, ParentType, ContextType, TTechnologyCategoryArgs>;
  children: Resolver<Maybe<Array<Maybe<TResolversTypes['technology']>>>, ParentType, ContextType, TTechnologyChildrenArgs>;
  children_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  children_sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  id_parent: Resolver<Maybe<TResolversTypes['technology']>, ParentType, ContextType, TTechnologyIdParentArgs>;
  label: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  list: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  preferred: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  projects: Resolver<Maybe<Array<Maybe<TResolversTypes['project_technology']>>>, ParentType, ContextType, TTechnologyProjectsArgs>;
  projects_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  translations: Resolver<Maybe<Array<Maybe<TResolversTypes['technology_translations']>>>, ParentType, ContextType, TTechnologyTranslationsArgs>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_aggregated'] = TResolversParentTypes['technology_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['technology_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['technology_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['technology_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['technology_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['technology_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['technology_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['technology_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['technology_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_aggregated_count'] = TResolversParentTypes['technology_aggregated_count']> = {
  blog: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  category: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  children: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  children_sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id_parent: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  label: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  list: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  preferred: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  projects: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_aggregated_fields'] = TResolversParentTypes['technology_aggregated_fields']> = {
  category: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  children_sort: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  id_parent: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyCategoryResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_category'] = TResolversParentTypes['technology_category']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  label: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  technologies: Resolver<Maybe<Array<Maybe<TResolversTypes['technology']>>>, ParentType, ContextType, TTechnologyCategoryTechnologiesArgs>;
  technologies_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  translations: Resolver<Maybe<Array<Maybe<TResolversTypes['technology_category_translations']>>>, ParentType, ContextType, TTechnologyCategoryTranslationsArgs>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyCategoryAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_category_aggregated'] = TResolversParentTypes['technology_category_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['technology_category_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['technology_category_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['technology_category_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['technology_category_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['technology_category_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['technology_category_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['technology_category_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['technology_category_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyCategoryAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_category_aggregated_count'] = TResolversParentTypes['technology_category_aggregated_count']> = {
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  label: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  technologies: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyCategoryAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_category_aggregated_fields'] = TResolversParentTypes['technology_category_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyCategoryMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_category_mutated'] = TResolversParentTypes['technology_category_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['technology_category']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyCategoryTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_category_translations'] = TResolversParentTypes['technology_category_translations']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['languages']>, ParentType, ContextType, TTechnologyCategoryTranslationsLanguagesCodeArgs>;
  technology_category_id: Resolver<Maybe<TResolversTypes['technology_category']>, ParentType, ContextType, TTechnologyCategoryTranslationsTechnologyCategoryIdArgs>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyCategoryTranslationsAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_category_translations_aggregated'] = TResolversParentTypes['technology_category_translations_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['technology_category_translations_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['technology_category_translations_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['technology_category_translations_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['technology_category_translations_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['technology_category_translations_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['technology_category_translations_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['technology_category_translations_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['technology_category_translations_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyCategoryTranslationsAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_category_translations_aggregated_count'] = TResolversParentTypes['technology_category_translations_aggregated_count']> = {
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  technology_category_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyCategoryTranslationsAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_category_translations_aggregated_fields'] = TResolversParentTypes['technology_category_translations_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  technology_category_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyCategoryTranslationsMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_category_translations_mutated'] = TResolversParentTypes['technology_category_translations_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['technology_category_translations']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_mutated'] = TResolversParentTypes['technology_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['technology']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_translations'] = TResolversParentTypes['technology_translations']> = {
  description: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['languages']>, ParentType, ContextType, TTechnologyTranslationsLanguagesCodeArgs>;
  technology_id: Resolver<Maybe<TResolversTypes['technology']>, ParentType, ContextType, TTechnologyTranslationsTechnologyIdArgs>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyTranslationsAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_translations_aggregated'] = TResolversParentTypes['technology_translations_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['technology_translations_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['technology_translations_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['technology_translations_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['technology_translations_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['technology_translations_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['technology_translations_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['technology_translations_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['technology_translations_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyTranslationsAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_translations_aggregated_count'] = TResolversParentTypes['technology_translations_aggregated_count']> = {
  description: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  technology_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyTranslationsAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_translations_aggregated_fields'] = TResolversParentTypes['technology_translations_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  technology_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTechnologyTranslationsMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['technology_translations_mutated'] = TResolversParentTypes['technology_translations_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['technology_translations']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTransportationResolvers<ContextType = any, ParentType extends TResolversParentTypes['transportation'] = TResolversParentTypes['transportation']> = {
  arrival: Resolver<TResolversTypes['Date'], ParentType, ContextType>;
  arrival_airport_code: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  arrival_func: Resolver<Maybe<TResolversTypes['datetime_functions']>, ParentType, ContextType>;
  company: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  crosspacific: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  departure: Resolver<TResolversTypes['Date'], ParentType, ContextType>;
  departure_airport_code: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  departure_func: Resolver<Maybe<TResolversTypes['datetime_functions']>, ParentType, ContextType>;
  from: Resolver<Maybe<TResolversTypes['place']>, ParentType, ContextType, TTransportationFromArgs>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  number: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  price: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  show_time: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  to: Resolver<Maybe<TResolversTypes['place']>, ParentType, ContextType, TTransportationToArgs>;
  type: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  vessel: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTransportationAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['transportation_aggregated'] = TResolversParentTypes['transportation_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['transportation_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['transportation_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['transportation_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['transportation_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['transportation_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['transportation_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['transportation_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['transportation_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTransportationAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['transportation_aggregated_count'] = TResolversParentTypes['transportation_aggregated_count']> = {
  arrival: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  arrival_airport_code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  company: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  crosspacific: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  departure: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  departure_airport_code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  from: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  number: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  price: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  show_time: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  to: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  type: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  vessel: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTransportationAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['transportation_aggregated_fields'] = TResolversParentTypes['transportation_aggregated_fields']> = {
  from: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  price: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  to: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTransportationMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['transportation_mutated'] = TResolversParentTypes['transportation_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['transportation']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTravelResolvers<ContextType = any, ParentType extends TResolversParentTypes['travel'] = TResolversParentTypes['travel']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TTravelMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['travel_mutated'] = TResolversParentTypes['travel_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['travel']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionAccommodationResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_accommodation'] = TResolversParentTypes['version_accommodation']> = {
  bookings: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  bookings_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  place: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionAuthorResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_author'] = TResolversParentTypes['version_author']> = {
  books: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  books_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionAuthorBookResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_author_book'] = TResolversParentTypes['version_author_book']> = {
  author_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  book_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBlogResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_blog'] = TResolversParentTypes['version_blog']> = {
  date_created: Resolver<Maybe<TResolversTypes['Date']>, ParentType, ContextType>;
  date_created_func: Resolver<Maybe<TResolversTypes['date_functions']>, ParentType, ContextType>;
  elements: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  elements_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  slug: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  status: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  teaser_text: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  technology: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  technology_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBlogElementsResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_blog_elements'] = TResolversParentTypes['version_blog_elements']> = {
  blog_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  collection: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  item: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBlogImageResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_blog_image'] = TResolversParentTypes['version_blog_image']> = {
  caption: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  image: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  invert: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBlogMapResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_blog_map'] = TResolversParentTypes['version_blog_map']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBlogQuoteResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_blog_quote'] = TResolversParentTypes['version_blog_quote']> = {
  author: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  text: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  url: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBlogTechnologyResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_blog_technology'] = TResolversParentTypes['version_blog_technology']> = {
  blog_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  technology_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBlogTextResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_blog_text'] = TResolversParentTypes['version_blog_text']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  text: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  word_count: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBlogTitleResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_blog_title'] = TResolversParentTypes['version_blog_title']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  level: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  tag: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBlogVideoResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_blog_video'] = TResolversParentTypes['version_blog_video']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  url: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBookResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_book'] = TResolversParentTypes['version_book']> = {
  authors: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  authors_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  book_series: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  category: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  internal: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  language: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  number_in_series: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  number_in_year: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  pages: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  positions: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  words: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  year: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  year_published: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBookSeriesResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_book_series'] = TResolversParentTypes['version_book_series']> = {
  books: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  books_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  internal: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBookSeriesTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_book_series_translations'] = TResolversParentTypes['version_book_series_translations']> = {
  book_series_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBookTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_book_translations'] = TResolversParentTypes['version_book_translations']> = {
  book_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBookYearResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_book_year'] = TResolversParentTypes['version_book_year']> = {
  books: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  books_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  internal: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBookYearTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_book_year_translations'] = TResolversParentTypes['version_book_year_translations']> = {
  book_year_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionBookingResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_booking'] = TResolversParentTypes['version_booking']> = {
  accommodation: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  arrival: Resolver<Maybe<TResolversTypes['Date']>, ParentType, ContextType>;
  arrival_func: Resolver<Maybe<TResolversTypes['datetime_functions']>, ParentType, ContextType>;
  booking: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  departure: Resolver<Maybe<TResolversTypes['Date']>, ParentType, ContextType>;
  departure_func: Resolver<Maybe<TResolversTypes['datetime_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  price_per_night: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  type: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionCountryResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_country'] = TResolversParentTypes['version_country']> = {
  alpha3: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  currency_code: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  internal: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  place: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  place_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionCountryTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_country_translations'] = TResolversParentTypes['version_country_translations']> = {
  capital: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  country_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  currency: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionLanguagesResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_languages'] = TResolversParentTypes['version_languages']> = {
  abbreviation: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  code: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionNavigationResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_navigation'] = TResolversParentTypes['version_navigation']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  image: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  main_navigation_items: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  main_navigation_items_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  misc_navigation_items: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  misc_navigation_items_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionNavigationItemResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_navigation_item'] = TResolversParentTypes['version_navigation_item']> = {
  active: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  icon: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  line: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  main_navigation: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  misc_navigation: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  url: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionNavigationItemTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_navigation_item_translations'] = TResolversParentTypes['version_navigation_item_translations']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  label: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  navigation_item_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionNavigationTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_navigation_translations'] = TResolversParentTypes['version_navigation_translations']> = {
  contact: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  cv: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  dark: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  language: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  navigation_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  search: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionNotFoundResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_not_found'] = TResolversParentTypes['version_not_found']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionNotFoundTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_not_found_translations'] = TResolversParentTypes['version_not_found_translations']> = {
  button: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  navigation: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  not_found_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionPlaceResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_place'] = TResolversParentTypes['version_place']> = {
  accommodation: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  accommodation_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  album: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  country: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  internal: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  location: Resolver<Maybe<TResolversTypes['GraphQLGeoJSON']>, ParentType, ContextType>;
  secret_blog: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  secret_blog_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  transportation: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionPlaceTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_place_translations'] = TResolversParentTypes['version_place_translations']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  place_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionProjectResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_project'] = TResolversParentTypes['version_project']> = {
  color: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  gallery: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  gallery_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  slug: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  technologies: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  technologies_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  url: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  work: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  work_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionProjectDirectusFilesResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_project_directus_files'] = TResolversParentTypes['version_project_directus_files']> = {
  directus_files_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  project_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionProjectTechnologyResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_project_technology'] = TResolversParentTypes['version_project_technology']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  project_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  secondary: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  technology_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionProjectTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_project_translations'] = TResolversParentTypes['version_project_translations']> = {
  description: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  project_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionReadingResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_reading'] = TResolversParentTypes['version_reading']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionSecretBlogResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_secret_blog'] = TResolversParentTypes['version_secret_blog']> = {
  date_created: Resolver<Maybe<TResolversTypes['Date']>, ParentType, ContextType>;
  date_created_func: Resolver<Maybe<TResolversTypes['date_functions']>, ParentType, ContextType>;
  elements: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  elements_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  image: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  place: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  place_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  slug: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  status: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  title: Resolver<TResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionSecretBlogElementsResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_secret_blog_elements'] = TResolversParentTypes['version_secret_blog_elements']> = {
  collection: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  item: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  secret_blog_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionSecretBlogPlaceResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_secret_blog_place'] = TResolversParentTypes['version_secret_blog_place']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  place_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  secret_blog_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionSubscribersResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_subscribers'] = TResolversParentTypes['version_subscribers']> = {
  date_created: Resolver<Maybe<TResolversTypes['Date']>, ParentType, ContextType>;
  date_created_func: Resolver<Maybe<TResolversTypes['datetime_functions']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  mail: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  status: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionTechnologyResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_technology'] = TResolversParentTypes['version_technology']> = {
  blog: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  blog_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  category: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  children: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  children_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  children_sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  id_parent: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  label: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  list: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  preferred: Resolver<Maybe<TResolversTypes['Boolean']>, ParentType, ContextType>;
  projects: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  projects_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionTechnologyCategoryResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_technology_category'] = TResolversParentTypes['version_technology_category']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  label: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  technologies: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  technologies_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionTechnologyCategoryTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_technology_category_translations'] = TResolversParentTypes['version_technology_category_translations']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  technology_category_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionTechnologyTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_technology_translations'] = TResolversParentTypes['version_technology_translations']> = {
  description: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  technology_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionTransportationResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_transportation'] = TResolversParentTypes['version_transportation']> = {
  arrival: Resolver<TResolversTypes['Date'], ParentType, ContextType>;
  arrival_airport_code: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  arrival_func: Resolver<Maybe<TResolversTypes['datetime_functions']>, ParentType, ContextType>;
  company: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  crosspacific: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  departure: Resolver<TResolversTypes['Date'], ParentType, ContextType>;
  departure_airport_code: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  departure_func: Resolver<Maybe<TResolversTypes['datetime_functions']>, ParentType, ContextType>;
  from: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  number: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  price: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  show_time: Resolver<TResolversTypes['Boolean'], ParentType, ContextType>;
  to: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  type: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  vessel: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionTravelResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_travel'] = TResolversParentTypes['version_travel']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionWebsiteResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_website'] = TResolversParentTypes['version_website']> = {
  dev_blog_image: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  home_image: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  translations: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  travel_blog_image: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionWebsiteTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_website_translations'] = TResolversParentTypes['version_website_translations']> = {
  home_text: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  home_title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  website_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionWorkResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_work'] = TResolversParentTypes['version_work']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  projects: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  projects_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TVersionWorkProjectResolvers<ContextType = any, ParentType extends TResolversParentTypes['version_work_project'] = TResolversParentTypes['version_work_project']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  project_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  work_id: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWebsiteResolvers<ContextType = any, ParentType extends TResolversParentTypes['website'] = TResolversParentTypes['website']> = {
  dev_blog_image: Resolver<Maybe<TResolversTypes['directus_files']>, ParentType, ContextType, TWebsiteDevBlogImageArgs>;
  home_image: Resolver<Maybe<TResolversTypes['directus_files']>, ParentType, ContextType, TWebsiteHomeImageArgs>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  translations: Resolver<Maybe<Array<Maybe<TResolversTypes['website_translations']>>>, ParentType, ContextType, TWebsiteTranslationsArgs>;
  translations_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  travel_blog_image: Resolver<Maybe<TResolversTypes['directus_files']>, ParentType, ContextType, TWebsiteTravelBlogImageArgs>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWebsiteMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['website_mutated'] = TResolversParentTypes['website_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['website']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWebsiteTranslationsResolvers<ContextType = any, ParentType extends TResolversParentTypes['website_translations'] = TResolversParentTypes['website_translations']> = {
  home_text: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  home_title: Resolver<Maybe<TResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['languages']>, ParentType, ContextType, TWebsiteTranslationsLanguagesCodeArgs>;
  website_id: Resolver<Maybe<TResolversTypes['website']>, ParentType, ContextType, TWebsiteTranslationsWebsiteIdArgs>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWebsiteTranslationsAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['website_translations_aggregated'] = TResolversParentTypes['website_translations_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['website_translations_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['website_translations_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['website_translations_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['website_translations_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['website_translations_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['website_translations_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['website_translations_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['website_translations_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWebsiteTranslationsAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['website_translations_aggregated_count'] = TResolversParentTypes['website_translations_aggregated_count']> = {
  home_text: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  home_title: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  languages_code: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  website_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWebsiteTranslationsAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['website_translations_aggregated_fields'] = TResolversParentTypes['website_translations_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  website_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWebsiteTranslationsMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['website_translations_mutated'] = TResolversParentTypes['website_translations_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['website_translations']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWorkResolvers<ContextType = any, ParentType extends TResolversParentTypes['work'] = TResolversParentTypes['work']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  projects: Resolver<Maybe<Array<Maybe<TResolversTypes['work_project']>>>, ParentType, ContextType, TWorkProjectsArgs>;
  projects_func: Resolver<Maybe<TResolversTypes['count_functions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWorkAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['work_aggregated'] = TResolversParentTypes['work_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['work_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['work_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['work_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['work_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['work_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['work_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['work_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['work_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWorkAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['work_aggregated_count'] = TResolversParentTypes['work_aggregated_count']> = {
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  projects: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWorkAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['work_aggregated_fields'] = TResolversParentTypes['work_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWorkMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['work_mutated'] = TResolversParentTypes['work_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['work']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWorkProjectResolvers<ContextType = any, ParentType extends TResolversParentTypes['work_project'] = TResolversParentTypes['work_project']> = {
  id: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  project_id: Resolver<Maybe<TResolversTypes['project']>, ParentType, ContextType, TWorkProjectProjectIdArgs>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  work_id: Resolver<Maybe<TResolversTypes['work']>, ParentType, ContextType, TWorkProjectWorkIdArgs>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWorkProjectAggregatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['work_project_aggregated'] = TResolversParentTypes['work_project_aggregated']> = {
  avg: Resolver<Maybe<TResolversTypes['work_project_aggregated_fields']>, ParentType, ContextType>;
  avgDistinct: Resolver<Maybe<TResolversTypes['work_project_aggregated_fields']>, ParentType, ContextType>;
  count: Resolver<Maybe<TResolversTypes['work_project_aggregated_count']>, ParentType, ContextType>;
  countAll: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  countDistinct: Resolver<Maybe<TResolversTypes['work_project_aggregated_count']>, ParentType, ContextType>;
  group: Resolver<Maybe<TResolversTypes['JSON']>, ParentType, ContextType>;
  max: Resolver<Maybe<TResolversTypes['work_project_aggregated_fields']>, ParentType, ContextType>;
  min: Resolver<Maybe<TResolversTypes['work_project_aggregated_fields']>, ParentType, ContextType>;
  sum: Resolver<Maybe<TResolversTypes['work_project_aggregated_fields']>, ParentType, ContextType>;
  sumDistinct: Resolver<Maybe<TResolversTypes['work_project_aggregated_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWorkProjectAggregatedCountResolvers<ContextType = any, ParentType extends TResolversParentTypes['work_project_aggregated_count'] = TResolversParentTypes['work_project_aggregated_count']> = {
  id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  project_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  work_id: Resolver<Maybe<TResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWorkProjectAggregatedFieldsResolvers<ContextType = any, ParentType extends TResolversParentTypes['work_project_aggregated_fields'] = TResolversParentTypes['work_project_aggregated_fields']> = {
  id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  project_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  sort: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  work_id: Resolver<Maybe<TResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TWorkProjectMutatedResolvers<ContextType = any, ParentType extends TResolversParentTypes['work_project_mutated'] = TResolversParentTypes['work_project_mutated']> = {
  data: Resolver<Maybe<TResolversTypes['work_project']>, ParentType, ContextType>;
  event: Resolver<Maybe<TResolversTypes['EventEnum']>, ParentType, ContextType>;
  key: Resolver<TResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TResolvers<ContextType = any> = {
  Date: GraphQLScalarType;
  GraphQLBigInt: GraphQLScalarType;
  GraphQLGeoJSON: GraphQLScalarType;
  GraphQLStringOrFloat: GraphQLScalarType;
  Hash: GraphQLScalarType;
  JSON: GraphQLScalarType;
  Query: TQueryResolvers<ContextType>;
  Subscription: TSubscriptionResolvers<ContextType>;
  accommodation: TAccommodationResolvers<ContextType>;
  accommodation_aggregated: TAccommodationAggregatedResolvers<ContextType>;
  accommodation_aggregated_count: TAccommodationAggregatedCountResolvers<ContextType>;
  accommodation_aggregated_fields: TAccommodationAggregatedFieldsResolvers<ContextType>;
  accommodation_mutated: TAccommodationMutatedResolvers<ContextType>;
  author: TAuthorResolvers<ContextType>;
  author_aggregated: TAuthorAggregatedResolvers<ContextType>;
  author_aggregated_count: TAuthorAggregatedCountResolvers<ContextType>;
  author_aggregated_fields: TAuthorAggregatedFieldsResolvers<ContextType>;
  author_book: TAuthorBookResolvers<ContextType>;
  author_book_aggregated: TAuthorBookAggregatedResolvers<ContextType>;
  author_book_aggregated_count: TAuthorBookAggregatedCountResolvers<ContextType>;
  author_book_aggregated_fields: TAuthorBookAggregatedFieldsResolvers<ContextType>;
  author_book_mutated: TAuthorBookMutatedResolvers<ContextType>;
  author_mutated: TAuthorMutatedResolvers<ContextType>;
  blog: TBlogResolvers<ContextType>;
  blog_aggregated: TBlogAggregatedResolvers<ContextType>;
  blog_aggregated_count: TBlogAggregatedCountResolvers<ContextType>;
  blog_aggregated_fields: TBlogAggregatedFieldsResolvers<ContextType>;
  blog_elements: TBlogElementsResolvers<ContextType>;
  blog_elements_aggregated: TBlogElementsAggregatedResolvers<ContextType>;
  blog_elements_aggregated_count: TBlogElementsAggregatedCountResolvers<ContextType>;
  blog_elements_aggregated_fields: TBlogElementsAggregatedFieldsResolvers<ContextType>;
  blog_elements_item_union: TBlogElementsItemUnionResolvers<ContextType>;
  blog_elements_mutated: TBlogElementsMutatedResolvers<ContextType>;
  blog_image: TBlogImageResolvers<ContextType>;
  blog_image_aggregated: TBlogImageAggregatedResolvers<ContextType>;
  blog_image_aggregated_count: TBlogImageAggregatedCountResolvers<ContextType>;
  blog_image_aggregated_fields: TBlogImageAggregatedFieldsResolvers<ContextType>;
  blog_image_mutated: TBlogImageMutatedResolvers<ContextType>;
  blog_map: TBlogMapResolvers<ContextType>;
  blog_map_aggregated: TBlogMapAggregatedResolvers<ContextType>;
  blog_map_aggregated_count: TBlogMapAggregatedCountResolvers<ContextType>;
  blog_map_aggregated_fields: TBlogMapAggregatedFieldsResolvers<ContextType>;
  blog_map_mutated: TBlogMapMutatedResolvers<ContextType>;
  blog_mutated: TBlogMutatedResolvers<ContextType>;
  blog_quote: TBlogQuoteResolvers<ContextType>;
  blog_quote_aggregated: TBlogQuoteAggregatedResolvers<ContextType>;
  blog_quote_aggregated_count: TBlogQuoteAggregatedCountResolvers<ContextType>;
  blog_quote_aggregated_fields: TBlogQuoteAggregatedFieldsResolvers<ContextType>;
  blog_quote_mutated: TBlogQuoteMutatedResolvers<ContextType>;
  blog_technology: TBlogTechnologyResolvers<ContextType>;
  blog_technology_aggregated: TBlogTechnologyAggregatedResolvers<ContextType>;
  blog_technology_aggregated_count: TBlogTechnologyAggregatedCountResolvers<ContextType>;
  blog_technology_aggregated_fields: TBlogTechnologyAggregatedFieldsResolvers<ContextType>;
  blog_technology_mutated: TBlogTechnologyMutatedResolvers<ContextType>;
  blog_text: TBlogTextResolvers<ContextType>;
  blog_text_aggregated: TBlogTextAggregatedResolvers<ContextType>;
  blog_text_aggregated_count: TBlogTextAggregatedCountResolvers<ContextType>;
  blog_text_aggregated_fields: TBlogTextAggregatedFieldsResolvers<ContextType>;
  blog_text_mutated: TBlogTextMutatedResolvers<ContextType>;
  blog_title: TBlogTitleResolvers<ContextType>;
  blog_title_aggregated: TBlogTitleAggregatedResolvers<ContextType>;
  blog_title_aggregated_count: TBlogTitleAggregatedCountResolvers<ContextType>;
  blog_title_aggregated_fields: TBlogTitleAggregatedFieldsResolvers<ContextType>;
  blog_title_mutated: TBlogTitleMutatedResolvers<ContextType>;
  blog_video: TBlogVideoResolvers<ContextType>;
  blog_video_aggregated: TBlogVideoAggregatedResolvers<ContextType>;
  blog_video_aggregated_count: TBlogVideoAggregatedCountResolvers<ContextType>;
  blog_video_aggregated_fields: TBlogVideoAggregatedFieldsResolvers<ContextType>;
  blog_video_mutated: TBlogVideoMutatedResolvers<ContextType>;
  book: TBookResolvers<ContextType>;
  book_aggregated: TBookAggregatedResolvers<ContextType>;
  book_aggregated_count: TBookAggregatedCountResolvers<ContextType>;
  book_aggregated_fields: TBookAggregatedFieldsResolvers<ContextType>;
  book_mutated: TBookMutatedResolvers<ContextType>;
  book_series: TBookSeriesResolvers<ContextType>;
  book_series_aggregated: TBookSeriesAggregatedResolvers<ContextType>;
  book_series_aggregated_count: TBookSeriesAggregatedCountResolvers<ContextType>;
  book_series_aggregated_fields: TBookSeriesAggregatedFieldsResolvers<ContextType>;
  book_series_mutated: TBookSeriesMutatedResolvers<ContextType>;
  book_series_translations: TBookSeriesTranslationsResolvers<ContextType>;
  book_series_translations_aggregated: TBookSeriesTranslationsAggregatedResolvers<ContextType>;
  book_series_translations_aggregated_count: TBookSeriesTranslationsAggregatedCountResolvers<ContextType>;
  book_series_translations_aggregated_fields: TBookSeriesTranslationsAggregatedFieldsResolvers<ContextType>;
  book_series_translations_mutated: TBookSeriesTranslationsMutatedResolvers<ContextType>;
  book_translations: TBookTranslationsResolvers<ContextType>;
  book_translations_aggregated: TBookTranslationsAggregatedResolvers<ContextType>;
  book_translations_aggregated_count: TBookTranslationsAggregatedCountResolvers<ContextType>;
  book_translations_aggregated_fields: TBookTranslationsAggregatedFieldsResolvers<ContextType>;
  book_translations_mutated: TBookTranslationsMutatedResolvers<ContextType>;
  book_year: TBookYearResolvers<ContextType>;
  book_year_aggregated: TBookYearAggregatedResolvers<ContextType>;
  book_year_aggregated_count: TBookYearAggregatedCountResolvers<ContextType>;
  book_year_aggregated_fields: TBookYearAggregatedFieldsResolvers<ContextType>;
  book_year_mutated: TBookYearMutatedResolvers<ContextType>;
  book_year_translations: TBookYearTranslationsResolvers<ContextType>;
  book_year_translations_aggregated: TBookYearTranslationsAggregatedResolvers<ContextType>;
  book_year_translations_aggregated_count: TBookYearTranslationsAggregatedCountResolvers<ContextType>;
  book_year_translations_aggregated_fields: TBookYearTranslationsAggregatedFieldsResolvers<ContextType>;
  book_year_translations_mutated: TBookYearTranslationsMutatedResolvers<ContextType>;
  booking: TBookingResolvers<ContextType>;
  booking_aggregated: TBookingAggregatedResolvers<ContextType>;
  booking_aggregated_count: TBookingAggregatedCountResolvers<ContextType>;
  booking_aggregated_fields: TBookingAggregatedFieldsResolvers<ContextType>;
  booking_mutated: TBookingMutatedResolvers<ContextType>;
  count_functions: TCountFunctionsResolvers<ContextType>;
  country: TCountryResolvers<ContextType>;
  country_aggregated: TCountryAggregatedResolvers<ContextType>;
  country_aggregated_count: TCountryAggregatedCountResolvers<ContextType>;
  country_aggregated_fields: TCountryAggregatedFieldsResolvers<ContextType>;
  country_mutated: TCountryMutatedResolvers<ContextType>;
  country_translations: TCountryTranslationsResolvers<ContextType>;
  country_translations_aggregated: TCountryTranslationsAggregatedResolvers<ContextType>;
  country_translations_aggregated_count: TCountryTranslationsAggregatedCountResolvers<ContextType>;
  country_translations_aggregated_fields: TCountryTranslationsAggregatedFieldsResolvers<ContextType>;
  country_translations_mutated: TCountryTranslationsMutatedResolvers<ContextType>;
  date_functions: TDateFunctionsResolvers<ContextType>;
  datetime_functions: TDatetimeFunctionsResolvers<ContextType>;
  directus_files: TDirectusFilesResolvers<ContextType>;
  directus_files_mutated: TDirectusFilesMutatedResolvers<ContextType>;
  directus_folders: TDirectusFoldersResolvers<ContextType>;
  directus_folders_mutated: TDirectusFoldersMutatedResolvers<ContextType>;
  directus_roles: TDirectusRolesResolvers<ContextType>;
  directus_roles_mutated: TDirectusRolesMutatedResolvers<ContextType>;
  directus_settings: TDirectusSettingsResolvers<ContextType>;
  directus_settings_mutated: TDirectusSettingsMutatedResolvers<ContextType>;
  directus_users: TDirectusUsersResolvers<ContextType>;
  directus_users_mutated: TDirectusUsersMutatedResolvers<ContextType>;
  languages: TLanguagesResolvers<ContextType>;
  languages_aggregated: TLanguagesAggregatedResolvers<ContextType>;
  languages_aggregated_count: TLanguagesAggregatedCountResolvers<ContextType>;
  languages_mutated: TLanguagesMutatedResolvers<ContextType>;
  navigation: TNavigationResolvers<ContextType>;
  navigation_item: TNavigationItemResolvers<ContextType>;
  navigation_item_aggregated: TNavigationItemAggregatedResolvers<ContextType>;
  navigation_item_aggregated_count: TNavigationItemAggregatedCountResolvers<ContextType>;
  navigation_item_aggregated_fields: TNavigationItemAggregatedFieldsResolvers<ContextType>;
  navigation_item_mutated: TNavigationItemMutatedResolvers<ContextType>;
  navigation_item_translations: TNavigationItemTranslationsResolvers<ContextType>;
  navigation_item_translations_aggregated: TNavigationItemTranslationsAggregatedResolvers<ContextType>;
  navigation_item_translations_aggregated_count: TNavigationItemTranslationsAggregatedCountResolvers<ContextType>;
  navigation_item_translations_aggregated_fields: TNavigationItemTranslationsAggregatedFieldsResolvers<ContextType>;
  navigation_item_translations_mutated: TNavigationItemTranslationsMutatedResolvers<ContextType>;
  navigation_mutated: TNavigationMutatedResolvers<ContextType>;
  navigation_translations: TNavigationTranslationsResolvers<ContextType>;
  navigation_translations_aggregated: TNavigationTranslationsAggregatedResolvers<ContextType>;
  navigation_translations_aggregated_count: TNavigationTranslationsAggregatedCountResolvers<ContextType>;
  navigation_translations_aggregated_fields: TNavigationTranslationsAggregatedFieldsResolvers<ContextType>;
  navigation_translations_mutated: TNavigationTranslationsMutatedResolvers<ContextType>;
  not_found: TNotFoundResolvers<ContextType>;
  not_found_mutated: TNotFoundMutatedResolvers<ContextType>;
  not_found_translations: TNotFoundTranslationsResolvers<ContextType>;
  not_found_translations_aggregated: TNotFoundTranslationsAggregatedResolvers<ContextType>;
  not_found_translations_aggregated_count: TNotFoundTranslationsAggregatedCountResolvers<ContextType>;
  not_found_translations_aggregated_fields: TNotFoundTranslationsAggregatedFieldsResolvers<ContextType>;
  not_found_translations_mutated: TNotFoundTranslationsMutatedResolvers<ContextType>;
  place: TPlaceResolvers<ContextType>;
  place_aggregated: TPlaceAggregatedResolvers<ContextType>;
  place_aggregated_count: TPlaceAggregatedCountResolvers<ContextType>;
  place_aggregated_fields: TPlaceAggregatedFieldsResolvers<ContextType>;
  place_mutated: TPlaceMutatedResolvers<ContextType>;
  place_translations: TPlaceTranslationsResolvers<ContextType>;
  place_translations_aggregated: TPlaceTranslationsAggregatedResolvers<ContextType>;
  place_translations_aggregated_count: TPlaceTranslationsAggregatedCountResolvers<ContextType>;
  place_translations_aggregated_fields: TPlaceTranslationsAggregatedFieldsResolvers<ContextType>;
  place_translations_mutated: TPlaceTranslationsMutatedResolvers<ContextType>;
  project: TProjectResolvers<ContextType>;
  project_aggregated: TProjectAggregatedResolvers<ContextType>;
  project_aggregated_count: TProjectAggregatedCountResolvers<ContextType>;
  project_aggregated_fields: TProjectAggregatedFieldsResolvers<ContextType>;
  project_directus_files: TProjectDirectusFilesResolvers<ContextType>;
  project_directus_files_aggregated: TProjectDirectusFilesAggregatedResolvers<ContextType>;
  project_directus_files_aggregated_count: TProjectDirectusFilesAggregatedCountResolvers<ContextType>;
  project_directus_files_aggregated_fields: TProjectDirectusFilesAggregatedFieldsResolvers<ContextType>;
  project_directus_files_mutated: TProjectDirectusFilesMutatedResolvers<ContextType>;
  project_mutated: TProjectMutatedResolvers<ContextType>;
  project_technology: TProjectTechnologyResolvers<ContextType>;
  project_technology_aggregated: TProjectTechnologyAggregatedResolvers<ContextType>;
  project_technology_aggregated_count: TProjectTechnologyAggregatedCountResolvers<ContextType>;
  project_technology_aggregated_fields: TProjectTechnologyAggregatedFieldsResolvers<ContextType>;
  project_technology_mutated: TProjectTechnologyMutatedResolvers<ContextType>;
  project_translations: TProjectTranslationsResolvers<ContextType>;
  project_translations_aggregated: TProjectTranslationsAggregatedResolvers<ContextType>;
  project_translations_aggregated_count: TProjectTranslationsAggregatedCountResolvers<ContextType>;
  project_translations_aggregated_fields: TProjectTranslationsAggregatedFieldsResolvers<ContextType>;
  project_translations_mutated: TProjectTranslationsMutatedResolvers<ContextType>;
  reading: TReadingResolvers<ContextType>;
  reading_mutated: TReadingMutatedResolvers<ContextType>;
  secret_blog: TSecretBlogResolvers<ContextType>;
  secret_blog_aggregated: TSecretBlogAggregatedResolvers<ContextType>;
  secret_blog_aggregated_count: TSecretBlogAggregatedCountResolvers<ContextType>;
  secret_blog_aggregated_fields: TSecretBlogAggregatedFieldsResolvers<ContextType>;
  secret_blog_elements: TSecretBlogElementsResolvers<ContextType>;
  secret_blog_elements_aggregated: TSecretBlogElementsAggregatedResolvers<ContextType>;
  secret_blog_elements_aggregated_count: TSecretBlogElementsAggregatedCountResolvers<ContextType>;
  secret_blog_elements_aggregated_fields: TSecretBlogElementsAggregatedFieldsResolvers<ContextType>;
  secret_blog_elements_item_union: TSecretBlogElementsItemUnionResolvers<ContextType>;
  secret_blog_elements_mutated: TSecretBlogElementsMutatedResolvers<ContextType>;
  secret_blog_mutated: TSecretBlogMutatedResolvers<ContextType>;
  secret_blog_place: TSecretBlogPlaceResolvers<ContextType>;
  secret_blog_place_aggregated: TSecretBlogPlaceAggregatedResolvers<ContextType>;
  secret_blog_place_aggregated_count: TSecretBlogPlaceAggregatedCountResolvers<ContextType>;
  secret_blog_place_aggregated_fields: TSecretBlogPlaceAggregatedFieldsResolvers<ContextType>;
  secret_blog_place_mutated: TSecretBlogPlaceMutatedResolvers<ContextType>;
  subscribers: TSubscribersResolvers<ContextType>;
  subscribers_aggregated: TSubscribersAggregatedResolvers<ContextType>;
  subscribers_aggregated_count: TSubscribersAggregatedCountResolvers<ContextType>;
  subscribers_aggregated_fields: TSubscribersAggregatedFieldsResolvers<ContextType>;
  subscribers_mutated: TSubscribersMutatedResolvers<ContextType>;
  technology: TTechnologyResolvers<ContextType>;
  technology_aggregated: TTechnologyAggregatedResolvers<ContextType>;
  technology_aggregated_count: TTechnologyAggregatedCountResolvers<ContextType>;
  technology_aggregated_fields: TTechnologyAggregatedFieldsResolvers<ContextType>;
  technology_category: TTechnologyCategoryResolvers<ContextType>;
  technology_category_aggregated: TTechnologyCategoryAggregatedResolvers<ContextType>;
  technology_category_aggregated_count: TTechnologyCategoryAggregatedCountResolvers<ContextType>;
  technology_category_aggregated_fields: TTechnologyCategoryAggregatedFieldsResolvers<ContextType>;
  technology_category_mutated: TTechnologyCategoryMutatedResolvers<ContextType>;
  technology_category_translations: TTechnologyCategoryTranslationsResolvers<ContextType>;
  technology_category_translations_aggregated: TTechnologyCategoryTranslationsAggregatedResolvers<ContextType>;
  technology_category_translations_aggregated_count: TTechnologyCategoryTranslationsAggregatedCountResolvers<ContextType>;
  technology_category_translations_aggregated_fields: TTechnologyCategoryTranslationsAggregatedFieldsResolvers<ContextType>;
  technology_category_translations_mutated: TTechnologyCategoryTranslationsMutatedResolvers<ContextType>;
  technology_mutated: TTechnologyMutatedResolvers<ContextType>;
  technology_translations: TTechnologyTranslationsResolvers<ContextType>;
  technology_translations_aggregated: TTechnologyTranslationsAggregatedResolvers<ContextType>;
  technology_translations_aggregated_count: TTechnologyTranslationsAggregatedCountResolvers<ContextType>;
  technology_translations_aggregated_fields: TTechnologyTranslationsAggregatedFieldsResolvers<ContextType>;
  technology_translations_mutated: TTechnologyTranslationsMutatedResolvers<ContextType>;
  transportation: TTransportationResolvers<ContextType>;
  transportation_aggregated: TTransportationAggregatedResolvers<ContextType>;
  transportation_aggregated_count: TTransportationAggregatedCountResolvers<ContextType>;
  transportation_aggregated_fields: TTransportationAggregatedFieldsResolvers<ContextType>;
  transportation_mutated: TTransportationMutatedResolvers<ContextType>;
  travel: TTravelResolvers<ContextType>;
  travel_mutated: TTravelMutatedResolvers<ContextType>;
  version_accommodation: TVersionAccommodationResolvers<ContextType>;
  version_author: TVersionAuthorResolvers<ContextType>;
  version_author_book: TVersionAuthorBookResolvers<ContextType>;
  version_blog: TVersionBlogResolvers<ContextType>;
  version_blog_elements: TVersionBlogElementsResolvers<ContextType>;
  version_blog_image: TVersionBlogImageResolvers<ContextType>;
  version_blog_map: TVersionBlogMapResolvers<ContextType>;
  version_blog_quote: TVersionBlogQuoteResolvers<ContextType>;
  version_blog_technology: TVersionBlogTechnologyResolvers<ContextType>;
  version_blog_text: TVersionBlogTextResolvers<ContextType>;
  version_blog_title: TVersionBlogTitleResolvers<ContextType>;
  version_blog_video: TVersionBlogVideoResolvers<ContextType>;
  version_book: TVersionBookResolvers<ContextType>;
  version_book_series: TVersionBookSeriesResolvers<ContextType>;
  version_book_series_translations: TVersionBookSeriesTranslationsResolvers<ContextType>;
  version_book_translations: TVersionBookTranslationsResolvers<ContextType>;
  version_book_year: TVersionBookYearResolvers<ContextType>;
  version_book_year_translations: TVersionBookYearTranslationsResolvers<ContextType>;
  version_booking: TVersionBookingResolvers<ContextType>;
  version_country: TVersionCountryResolvers<ContextType>;
  version_country_translations: TVersionCountryTranslationsResolvers<ContextType>;
  version_languages: TVersionLanguagesResolvers<ContextType>;
  version_navigation: TVersionNavigationResolvers<ContextType>;
  version_navigation_item: TVersionNavigationItemResolvers<ContextType>;
  version_navigation_item_translations: TVersionNavigationItemTranslationsResolvers<ContextType>;
  version_navigation_translations: TVersionNavigationTranslationsResolvers<ContextType>;
  version_not_found: TVersionNotFoundResolvers<ContextType>;
  version_not_found_translations: TVersionNotFoundTranslationsResolvers<ContextType>;
  version_place: TVersionPlaceResolvers<ContextType>;
  version_place_translations: TVersionPlaceTranslationsResolvers<ContextType>;
  version_project: TVersionProjectResolvers<ContextType>;
  version_project_directus_files: TVersionProjectDirectusFilesResolvers<ContextType>;
  version_project_technology: TVersionProjectTechnologyResolvers<ContextType>;
  version_project_translations: TVersionProjectTranslationsResolvers<ContextType>;
  version_reading: TVersionReadingResolvers<ContextType>;
  version_secret_blog: TVersionSecretBlogResolvers<ContextType>;
  version_secret_blog_elements: TVersionSecretBlogElementsResolvers<ContextType>;
  version_secret_blog_place: TVersionSecretBlogPlaceResolvers<ContextType>;
  version_subscribers: TVersionSubscribersResolvers<ContextType>;
  version_technology: TVersionTechnologyResolvers<ContextType>;
  version_technology_category: TVersionTechnologyCategoryResolvers<ContextType>;
  version_technology_category_translations: TVersionTechnologyCategoryTranslationsResolvers<ContextType>;
  version_technology_translations: TVersionTechnologyTranslationsResolvers<ContextType>;
  version_transportation: TVersionTransportationResolvers<ContextType>;
  version_travel: TVersionTravelResolvers<ContextType>;
  version_website: TVersionWebsiteResolvers<ContextType>;
  version_website_translations: TVersionWebsiteTranslationsResolvers<ContextType>;
  version_work: TVersionWorkResolvers<ContextType>;
  version_work_project: TVersionWorkProjectResolvers<ContextType>;
  website: TWebsiteResolvers<ContextType>;
  website_mutated: TWebsiteMutatedResolvers<ContextType>;
  website_translations: TWebsiteTranslationsResolvers<ContextType>;
  website_translations_aggregated: TWebsiteTranslationsAggregatedResolvers<ContextType>;
  website_translations_aggregated_count: TWebsiteTranslationsAggregatedCountResolvers<ContextType>;
  website_translations_aggregated_fields: TWebsiteTranslationsAggregatedFieldsResolvers<ContextType>;
  website_translations_mutated: TWebsiteTranslationsMutatedResolvers<ContextType>;
  work: TWorkResolvers<ContextType>;
  work_aggregated: TWorkAggregatedResolvers<ContextType>;
  work_aggregated_count: TWorkAggregatedCountResolvers<ContextType>;
  work_aggregated_fields: TWorkAggregatedFieldsResolvers<ContextType>;
  work_mutated: TWorkMutatedResolvers<ContextType>;
  work_project: TWorkProjectResolvers<ContextType>;
  work_project_aggregated: TWorkProjectAggregatedResolvers<ContextType>;
  work_project_aggregated_count: TWorkProjectAggregatedCountResolvers<ContextType>;
  work_project_aggregated_fields: TWorkProjectAggregatedFieldsResolvers<ContextType>;
  work_project_mutated: TWorkProjectMutatedResolvers<ContextType>;
};


export type TFProject = (
  { __typename?: 'project' }
  & Pick<TProject, 'id' | 'url' | 'color' | 'title'>
  & { translations: Maybe<Array<Maybe<(
    { __typename?: 'project_translations' }
    & Pick<TProjectTranslations, 'id' | 'description'>
    & { languages_code: Maybe<(
      { __typename?: 'languages' }
      & Pick<TLanguages, 'abbreviation'>
    )> }
  )>>>, technologies: Maybe<Array<Maybe<(
    { __typename?: 'project_technology' }
    & Pick<TProjectTechnology, 'id' | 'secondary'>
    & { technology_id: Maybe<(
      { __typename?: 'technology' }
      & Pick<TTechnology, 'label'>
      & { translations: Maybe<Array<Maybe<(
        { __typename?: 'technology_translations' }
        & Pick<TTechnologyTranslations, 'id' | 'description'>
        & { languages_code: Maybe<(
          { __typename?: 'languages' }
          & Pick<TLanguages, 'abbreviation'>
        )> }
      )>>>, category: Maybe<(
        { __typename?: 'technology_category' }
        & Pick<TTechnologyCategory, 'id'>
        & { translations: Maybe<Array<Maybe<(
          { __typename?: 'technology_category_translations' }
          & Pick<TTechnologyCategoryTranslations, 'id' | 'title'>
          & { languages_code: Maybe<(
            { __typename?: 'languages' }
            & Pick<TLanguages, 'abbreviation'>
          )> }
        )>>> }
      )> }
    )> }
  )>>>, gallery: Maybe<Array<Maybe<(
    { __typename?: 'project_directus_files' }
    & Pick<TProjectDirectusFiles, 'id'>
    & { directus_files_id: Maybe<(
      { __typename?: 'directus_files' }
      & Pick<TDirectusFiles, 'filename_disk' | 'description'>
    )> }
  )>>> }
);

export type TFTechnology = (
  { __typename?: 'technology' }
  & Pick<TTechnology, 'label'>
  & { translations: Maybe<Array<Maybe<(
    { __typename?: 'technology_translations' }
    & Pick<TTechnologyTranslations, 'id' | 'description'>
    & { languages_code: Maybe<(
      { __typename?: 'languages' }
      & Pick<TLanguages, 'abbreviation'>
    )> }
  )>>>, category: Maybe<(
    { __typename?: 'technology_category' }
    & Pick<TTechnologyCategory, 'id'>
    & { translations: Maybe<Array<Maybe<(
      { __typename?: 'technology_category_translations' }
      & Pick<TTechnologyCategoryTranslations, 'id' | 'title'>
      & { languages_code: Maybe<(
        { __typename?: 'languages' }
        & Pick<TLanguages, 'abbreviation'>
      )> }
    )>>> }
  )> }
);

export type TQDevArticleVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type TQDevArticle = (
  { __typename?: 'Query' }
  & { blog: Array<(
    { __typename?: 'blog' }
    & Pick<TBlog, 'id' | 'status' | 'title' | 'date_created' | 'slug'>
    & { elements: Maybe<Array<Maybe<(
      { __typename?: 'blog_elements' }
      & Pick<TBlogElements, 'collection'>
      & { item: Maybe<(
        { __typename?: 'blog_image' }
        & Pick<TBlogImage, 'id' | 'caption' | 'invert'>
        & { image: Maybe<(
          { __typename?: 'directus_files' }
          & Pick<TDirectusFiles, 'id' | 'filename_disk' | 'width' | 'height' | 'type'>
        )> }
      ) | (
        { __typename?: 'blog_map' }
        & Pick<TBlogMap, 'id'>
      ) | (
        { __typename?: 'blog_quote' }
        & Pick<TBlogQuote, 'id' | 'text' | 'author' | 'url'>
      ) | (
        { __typename?: 'blog_text' }
        & Pick<TBlogText, 'word_count' | 'text' | 'id'>
      ) | (
        { __typename?: 'blog_title' }
        & Pick<TBlogTitle, 'title' | 'level' | 'tag' | 'id'>
      ) | (
        { __typename?: 'blog_video' }
        & Pick<TBlogVideo, 'id' | 'url'>
      )> }
    )>>> }
  )> }
);

export type TQDevArticlesVariables = Exact<{ [key: string]: never; }>;


export type TQDevArticles = (
  { __typename?: 'Query' }
  & { blog: Array<(
    { __typename?: 'blog' }
    & Pick<TBlog, 'id' | 'status' | 'title' | 'teaser_text' | 'date_created' | 'slug'>
    & { technology: Maybe<Array<Maybe<(
      { __typename?: 'blog_technology' }
      & Pick<TBlogTechnology, 'id'>
      & { technology_id: Maybe<(
        { __typename?: 'technology' }
        & Pick<TTechnology, 'label'>
        & { translations: Maybe<Array<Maybe<(
          { __typename?: 'technology_translations' }
          & Pick<TTechnologyTranslations, 'id' | 'description'>
          & { languages_code: Maybe<(
            { __typename?: 'languages' }
            & Pick<TLanguages, 'abbreviation'>
          )> }
        )>>>, category: Maybe<(
          { __typename?: 'technology_category' }
          & Pick<TTechnologyCategory, 'id'>
          & { translations: Maybe<Array<Maybe<(
            { __typename?: 'technology_category_translations' }
            & Pick<TTechnologyCategoryTranslations, 'id' | 'title'>
            & { languages_code: Maybe<(
              { __typename?: 'languages' }
              & Pick<TLanguages, 'abbreviation'>
            )> }
          )>>> }
        )> }
      )> }
    )>>>, elements: Maybe<Array<Maybe<(
      { __typename?: 'blog_elements' }
      & Pick<TBlogElements, 'collection'>
      & { item: Maybe<{ __typename?: 'blog_image' } | { __typename?: 'blog_map' } | { __typename?: 'blog_quote' } | (
        { __typename?: 'blog_text' }
        & Pick<TBlogText, 'word_count' | 'id'>
      ) | { __typename?: 'blog_title' } | { __typename?: 'blog_video' }> }
    )>>> }
  )> }
);

export type TQDevPrevNextArticlesVariables = Exact<{
  date: Scalars['String']['input'];
}>;


export type TQDevPrevNextArticles = (
  { __typename?: 'Query' }
  & { previous: Array<(
    { __typename?: 'blog' }
    & Pick<TBlog, 'id' | 'title' | 'slug'>
  )>, next: Array<(
    { __typename?: 'blog' }
    & Pick<TBlog, 'id' | 'title' | 'slug'>
  )> }
);

export type TQMapVariables = Exact<{ [key: string]: never; }>;


export type TQMap = (
  { __typename?: 'Query' }
  & { place: Array<(
    { __typename?: 'place' }
    & Pick<TPlace, 'id' | 'location'>
    & { translations: Maybe<Array<Maybe<(
      { __typename?: 'place_translations' }
      & Pick<TPlaceTranslations, 'id' | 'name'>
      & { languages_code: Maybe<(
        { __typename?: 'languages' }
        & Pick<TLanguages, 'abbreviation'>
      )> }
    )>>>, country: Maybe<(
      { __typename?: 'country' }
      & Pick<TCountry, 'id' | 'currency_code' | 'alpha3'>
      & { translations: Maybe<Array<Maybe<(
        { __typename?: 'country_translations' }
        & Pick<TCountryTranslations, 'id' | 'name' | 'currency'>
        & { languages_code: Maybe<(
          { __typename?: 'languages' }
          & Pick<TLanguages, 'abbreviation'>
        )> }
      )>>> }
    )> }
  )>, transportation: Array<(
    { __typename?: 'transportation' }
    & Pick<TTransportation, 'id' | 'type' | 'company' | 'number' | 'vessel' | 'departure_airport_code' | 'arrival_airport_code' | 'departure' | 'arrival' | 'crosspacific' | 'show_time'>
    & { from: Maybe<(
      { __typename?: 'place' }
      & Pick<TPlace, 'id' | 'location'>
      & { translations: Maybe<Array<Maybe<(
        { __typename?: 'place_translations' }
        & Pick<TPlaceTranslations, 'id' | 'name'>
      )>>> }
    )>, to: Maybe<(
      { __typename?: 'place' }
      & Pick<TPlace, 'id' | 'location'>
      & { translations: Maybe<Array<Maybe<(
        { __typename?: 'place_translations' }
        & Pick<TPlaceTranslations, 'id' | 'name'>
      )>>> }
    )> }
  )> }
);

export type TQNavigationVariables = Exact<{ [key: string]: never; }>;


export type TQNavigation = (
  { __typename?: 'Query' }
  & { navigation: Maybe<(
    { __typename?: 'navigation' }
    & Pick<TNavigation, 'id'>
    & { main_navigation_items: Maybe<Array<Maybe<(
      { __typename?: 'navigation_item' }
      & Pick<TNavigationItem, 'id' | 'url' | 'icon' | 'line'>
      & { translations: Maybe<Array<Maybe<(
        { __typename?: 'navigation_item_translations' }
        & Pick<TNavigationItemTranslations, 'id' | 'label' | 'title'>
        & { languages_code: Maybe<(
          { __typename?: 'languages' }
          & Pick<TLanguages, 'abbreviation'>
        )> }
      )>>> }
    )>>>, misc_navigation_items: Maybe<Array<Maybe<(
      { __typename?: 'navigation_item' }
      & Pick<TNavigationItem, 'id' | 'url' | 'icon' | 'line'>
      & { translations: Maybe<Array<Maybe<(
        { __typename?: 'navigation_item_translations' }
        & Pick<TNavigationItemTranslations, 'id' | 'label' | 'title'>
        & { languages_code: Maybe<(
          { __typename?: 'languages' }
          & Pick<TLanguages, 'abbreviation'>
        )> }
      )>>> }
    )>>> }
  )> }
);

export type TQProjectsVariables = Exact<{ [key: string]: never; }>;


export type TQProjects = (
  { __typename?: 'Query' }
  & { work: Array<(
    { __typename?: 'work' }
    & Pick<TWork, 'id'>
    & { projects: Maybe<Array<Maybe<(
      { __typename?: 'work_project' }
      & Pick<TWorkProject, 'id'>
      & { project_id: Maybe<(
        { __typename?: 'project' }
        & Pick<TProject, 'id' | 'url' | 'color' | 'title'>
        & { translations: Maybe<Array<Maybe<(
          { __typename?: 'project_translations' }
          & Pick<TProjectTranslations, 'id' | 'description'>
          & { languages_code: Maybe<(
            { __typename?: 'languages' }
            & Pick<TLanguages, 'abbreviation'>
          )> }
        )>>>, technologies: Maybe<Array<Maybe<(
          { __typename?: 'project_technology' }
          & Pick<TProjectTechnology, 'id' | 'secondary'>
          & { technology_id: Maybe<(
            { __typename?: 'technology' }
            & Pick<TTechnology, 'label'>
            & { translations: Maybe<Array<Maybe<(
              { __typename?: 'technology_translations' }
              & Pick<TTechnologyTranslations, 'id' | 'description'>
              & { languages_code: Maybe<(
                { __typename?: 'languages' }
                & Pick<TLanguages, 'abbreviation'>
              )> }
            )>>>, category: Maybe<(
              { __typename?: 'technology_category' }
              & Pick<TTechnologyCategory, 'id'>
              & { translations: Maybe<Array<Maybe<(
                { __typename?: 'technology_category_translations' }
                & Pick<TTechnologyCategoryTranslations, 'id' | 'title'>
                & { languages_code: Maybe<(
                  { __typename?: 'languages' }
                  & Pick<TLanguages, 'abbreviation'>
                )> }
              )>>> }
            )> }
          )> }
        )>>>, gallery: Maybe<Array<Maybe<(
          { __typename?: 'project_directus_files' }
          & Pick<TProjectDirectusFiles, 'id'>
          & { directus_files_id: Maybe<(
            { __typename?: 'directus_files' }
            & Pick<TDirectusFiles, 'filename_disk' | 'description'>
          )> }
        )>>> }
      )> }
    )>>> }
  )> }
);

export type TQRootVariables = Exact<{ [key: string]: never; }>;


export type TQRoot = (
  { __typename?: 'Query' }
  & { website: Maybe<(
    { __typename?: 'website' }
    & { travel_blog_image: Maybe<(
      { __typename?: 'directus_files' }
      & Pick<TDirectusFiles, 'id' | 'filename_disk' | 'filename_download'>
    )>, dev_blog_image: Maybe<(
      { __typename?: 'directus_files' }
      & Pick<TDirectusFiles, 'id' | 'filename_disk' | 'filename_download'>
    )>, home_image: Maybe<(
      { __typename?: 'directus_files' }
      & Pick<TDirectusFiles, 'id' | 'filename_disk' | 'filename_download'>
    )>, translations: Maybe<Array<Maybe<(
      { __typename?: 'website_translations' }
      & Pick<TWebsiteTranslations, 'id' | 'home_title' | 'home_text'>
      & { languages_code: Maybe<(
        { __typename?: 'languages' }
        & Pick<TLanguages, 'abbreviation'>
      )> }
    )>>> }
  )>, secret_blog_aggregated: Array<(
    { __typename?: 'secret_blog_aggregated' }
    & { count: Maybe<(
      { __typename?: 'secret_blog_aggregated_count' }
      & Pick<TSecretBlogAggregatedCount, 'id'>
    )> }
  )>, blog_aggregated: Array<(
    { __typename?: 'blog_aggregated' }
    & { count: Maybe<(
      { __typename?: 'blog_aggregated_count' }
      & Pick<TBlogAggregatedCount, 'id'>
    )> }
  )> }
);

export type TQSkillsVariables = Exact<{ [key: string]: never; }>;


export type TQSkills = (
  { __typename?: 'Query' }
  & { technology_category: Array<(
    { __typename?: 'technology_category' }
    & Pick<TTechnologyCategory, 'id' | 'label'>
    & { translations: Maybe<Array<Maybe<(
      { __typename?: 'technology_category_translations' }
      & Pick<TTechnologyCategoryTranslations, 'id' | 'title'>
      & { languages_code: Maybe<(
        { __typename?: 'languages' }
        & Pick<TLanguages, 'abbreviation'>
      )> }
    )>>>, technologies: Maybe<Array<Maybe<(
      { __typename?: 'technology' }
      & Pick<TTechnology, 'id' | 'list' | 'label' | 'preferred'>
      & { translations: Maybe<Array<Maybe<(
        { __typename?: 'technology_translations' }
        & Pick<TTechnologyTranslations, 'id' | 'description'>
        & { languages_code: Maybe<(
          { __typename?: 'languages' }
          & Pick<TLanguages, 'abbreviation'>
        )> }
      )>>>, children: Maybe<Array<Maybe<(
        { __typename?: 'technology' }
        & Pick<TTechnology, 'id' | 'list' | 'label' | 'preferred'>
        & { translations: Maybe<Array<Maybe<(
          { __typename?: 'technology_translations' }
          & Pick<TTechnologyTranslations, 'id' | 'description'>
          & { languages_code: Maybe<(
            { __typename?: 'languages' }
            & Pick<TLanguages, 'abbreviation'>
          )> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type TQStatisticsVariables = Exact<{ [key: string]: never; }>;


export type TQStatistics = (
  { __typename?: 'Query' }
  & { perCountry: Array<(
    { __typename?: 'country' }
    & { translations: Maybe<Array<Maybe<(
      { __typename?: 'country_translations' }
      & Pick<TCountryTranslations, 'name'>
    )>>>, places: Maybe<(
      { __typename?: 'count_functions' }
      & Pick<TCountFunctions, 'count'>
    )> }
  )>, perPlace: Array<(
    { __typename?: 'place' }
    & { translations: Maybe<Array<Maybe<(
      { __typename?: 'place_translations' }
      & Pick<TPlaceTranslations, 'name'>
    )>>>, accommodations: Maybe<(
      { __typename?: 'count_functions' }
      & Pick<TCountFunctions, 'count'>
    )> }
  )>, timesToPlace: Array<(
    { __typename?: 'transportation_aggregated' }
    & Pick<TTransportationAggregated, 'group'>
    & { count: Maybe<(
      { __typename?: 'transportation_aggregated_count' }
      & Pick<TTransportationAggregatedCount, 'id'>
    )> }
  )>, furthestLat: Array<(
    { __typename?: 'place' }
    & Pick<TPlace, 'location'>
  )> }
);

export type TQAccommodationTypeVariables = Exact<{ [key: string]: never; }>;


export type TQAccommodationType = (
  { __typename?: 'Query' }
  & { accommodationType: Array<(
    { __typename?: 'booking_aggregated' }
    & Pick<TBookingAggregated, 'group'>
    & { count: Maybe<(
      { __typename?: 'booking_aggregated_count' }
      & Pick<TBookingAggregatedCount, 'id'>
    )> }
  )> }
);

export type TQBookingMethodVariables = Exact<{ [key: string]: never; }>;


export type TQBookingMethod = (
  { __typename?: 'Query' }
  & { bookingMethod: Array<(
    { __typename?: 'booking_aggregated' }
    & Pick<TBookingAggregated, 'group'>
    & { count: Maybe<(
      { __typename?: 'booking_aggregated_count' }
      & Pick<TBookingAggregatedCount, 'id'>
    )> }
  )> }
);

export type TQTimePerPlaceVariables = Exact<{ [key: string]: never; }>;


export type TQTimePerPlace = (
  { __typename?: 'Query' }
  & { timePerCountryAndPlace: Array<(
    { __typename?: 'transportation' }
    & Pick<TTransportation, 'arrival' | 'departure'>
    & { from: Maybe<(
      { __typename?: 'place' }
      & Pick<TPlace, 'id'>
      & { country: Maybe<(
        { __typename?: 'country' }
        & Pick<TCountry, 'id'>
      )> }
    )>, to: Maybe<(
      { __typename?: 'place' }
      & Pick<TPlace, 'id'>
      & { country: Maybe<(
        { __typename?: 'country' }
        & Pick<TCountry, 'id'>
      )> }
    )> }
  )>, country: Array<(
    { __typename?: 'country' }
    & Pick<TCountry, 'id'>
    & { translations: Maybe<Array<Maybe<(
      { __typename?: 'country_translations' }
      & Pick<TCountryTranslations, 'id' | 'name'>
      & { languages_code: Maybe<(
        { __typename?: 'languages' }
        & Pick<TLanguages, 'abbreviation'>
      )> }
    )>>> }
  )>, place: Array<(
    { __typename?: 'place' }
    & Pick<TPlace, 'id'>
    & { country: Maybe<(
      { __typename?: 'country' }
      & Pick<TCountry, 'id'>
    )>, translations: Maybe<Array<Maybe<(
      { __typename?: 'place_translations' }
      & Pick<TPlaceTranslations, 'id' | 'name'>
      & { languages_code: Maybe<(
        { __typename?: 'languages' }
        & Pick<TLanguages, 'abbreviation'>
      )> }
    )>>> }
  )> }
);

export type TQTotalsVariables = Exact<{ [key: string]: never; }>;


export type TQTotals = (
  { __typename?: 'Query' }
  & { totalCountries: Array<(
    { __typename?: 'country_aggregated' }
    & { count: Maybe<(
      { __typename?: 'country_aggregated_count' }
      & Pick<TCountryAggregatedCount, 'id'>
    )> }
  )>, totalPlaces: Array<(
    { __typename?: 'place_aggregated' }
    & { count: Maybe<(
      { __typename?: 'place_aggregated_count' }
      & Pick<TPlaceAggregatedCount, 'id'>
    )> }
  )>, totalAccommodations: Array<(
    { __typename?: 'accommodation_aggregated' }
    & { count: Maybe<(
      { __typename?: 'accommodation_aggregated_count' }
      & Pick<TAccommodationAggregatedCount, 'id'>
    )> }
  )>, totalBookings: Array<(
    { __typename?: 'booking_aggregated' }
    & { count: Maybe<(
      { __typename?: 'booking_aggregated_count' }
      & Pick<TBookingAggregatedCount, 'id'>
    )> }
  )> }
);

export type TQTransportationTypesVariables = Exact<{ [key: string]: never; }>;


export type TQTransportationTypes = (
  { __typename?: 'Query' }
  & { transportationTypes: Array<(
    { __typename?: 'transportation_aggregated' }
    & Pick<TTransportationAggregated, 'group'>
    & { count: Maybe<(
      { __typename?: 'transportation_aggregated_count' }
      & Pick<TTransportationAggregatedCount, 'id'>
    )> }
  )> }
);

export type TQTravelArticleVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type TQTravelArticle = (
  { __typename?: 'Query' }
  & { secret_blog: Array<(
    { __typename?: 'secret_blog' }
    & Pick<TSecretBlog, 'id' | 'title' | 'date_created' | 'slug'>
    & { image: Maybe<(
      { __typename?: 'directus_files' }
      & Pick<TDirectusFiles, 'id' | 'filename_disk'>
    )>, place: Maybe<Array<Maybe<(
      { __typename?: 'secret_blog_place' }
      & Pick<TSecretBlogPlace, 'id'>
      & { place_id: Maybe<(
        { __typename?: 'place' }
        & Pick<TPlace, 'id'>
        & { translations: Maybe<Array<Maybe<(
          { __typename?: 'place_translations' }
          & Pick<TPlaceTranslations, 'id' | 'name'>
          & { languages_code: Maybe<(
            { __typename?: 'languages' }
            & Pick<TLanguages, 'abbreviation'>
          )> }
        )>>>, country: Maybe<(
          { __typename?: 'country' }
          & Pick<TCountry, 'id'>
          & { translations: Maybe<Array<Maybe<(
            { __typename?: 'country_translations' }
            & Pick<TCountryTranslations, 'id' | 'name'>
            & { languages_code: Maybe<(
              { __typename?: 'languages' }
              & Pick<TLanguages, 'abbreviation'>
            )> }
          )>>> }
        )> }
      )> }
    )>>>, elements: Maybe<Array<Maybe<(
      { __typename?: 'secret_blog_elements' }
      & Pick<TSecretBlogElements, 'collection'>
      & { item: Maybe<(
        { __typename?: 'blog_image' }
        & Pick<TBlogImage, 'id' | 'caption' | 'invert'>
        & { image: Maybe<(
          { __typename?: 'directus_files' }
          & Pick<TDirectusFiles, 'id' | 'filename_disk' | 'width' | 'height' | 'type'>
        )> }
      ) | (
        { __typename?: 'blog_map' }
        & Pick<TBlogMap, 'id'>
      ) | (
        { __typename?: 'blog_quote' }
        & Pick<TBlogQuote, 'id' | 'text' | 'author' | 'url'>
      ) | (
        { __typename?: 'blog_text' }
        & Pick<TBlogText, 'word_count' | 'text' | 'id'>
      ) | (
        { __typename?: 'blog_title' }
        & Pick<TBlogTitle, 'title' | 'level' | 'tag' | 'id'>
      ) | (
        { __typename?: 'blog_video' }
        & Pick<TBlogVideo, 'id' | 'url'>
      )> }
    )>>> }
  )> }
);

export type TQTravelArticlesVariables = Exact<{ [key: string]: never; }>;


export type TQTravelArticles = (
  { __typename?: 'Query' }
  & { secret_blog: Array<(
    { __typename?: 'secret_blog' }
    & Pick<TSecretBlog, 'id' | 'status' | 'title' | 'date_created' | 'slug'>
    & { image: Maybe<(
      { __typename?: 'directus_files' }
      & Pick<TDirectusFiles, 'id' | 'filename_disk' | 'filename_download'>
    )>, place: Maybe<Array<Maybe<(
      { __typename?: 'secret_blog_place' }
      & Pick<TSecretBlogPlace, 'id'>
      & { place_id: Maybe<(
        { __typename?: 'place' }
        & Pick<TPlace, 'id'>
        & { country: Maybe<(
          { __typename?: 'country' }
          & Pick<TCountry, 'id'>
          & { translations: Maybe<Array<Maybe<(
            { __typename?: 'country_translations' }
            & Pick<TCountryTranslations, 'id' | 'name'>
            & { languages_code: Maybe<(
              { __typename?: 'languages' }
              & Pick<TLanguages, 'abbreviation'>
            )> }
          )>>> }
        )> }
      )> }
    )>>>, elements: Maybe<Array<Maybe<(
      { __typename?: 'secret_blog_elements' }
      & Pick<TSecretBlogElements, 'collection'>
      & { item: Maybe<{ __typename?: 'blog_image' } | { __typename?: 'blog_map' } | { __typename?: 'blog_quote' } | (
        { __typename?: 'blog_text' }
        & Pick<TBlogText, 'word_count' | 'id'>
      ) | { __typename?: 'blog_title' } | { __typename?: 'blog_video' }> }
    )>>> }
  )> }
);

export type TQTravelPrevNextArticlesVariables = Exact<{
  date: Scalars['String']['input'];
}>;


export type TQTravelPrevNextArticles = (
  { __typename?: 'Query' }
  & { previous: Array<(
    { __typename?: 'secret_blog' }
    & Pick<TSecretBlog, 'id' | 'title' | 'slug'>
    & { image: Maybe<(
      { __typename?: 'directus_files' }
      & Pick<TDirectusFiles, 'id' | 'filename_disk'>
    )> }
  )>, next: Array<(
    { __typename?: 'secret_blog' }
    & Pick<TSecretBlog, 'id' | 'title' | 'slug'>
    & { image: Maybe<(
      { __typename?: 'directus_files' }
      & Pick<TDirectusFiles, 'id' | 'filename_disk'>
    )> }
  )> }
);

export const FTechnology = gql`
    fragment FTechnology on technology {
  label
  translations {
    id
    description
    languages_code {
      abbreviation
    }
  }
  category {
    id
    translations {
      id
      title
      languages_code {
        abbreviation
      }
    }
  }
}
    `;
export const FProject = gql`
    fragment FProject on project {
  id
  url
  color
  title
  translations {
    id
    description
    languages_code {
      abbreviation
    }
  }
  technologies {
    id
    secondary
    technology_id {
      ...FTechnology
    }
  }
  gallery {
    id
    directus_files_id {
      filename_disk
      description
    }
  }
}
    `;
export const QDevArticleDocument = gql`
    query QDevArticle($slug: String!) {
  blog(filter: {slug: {_eq: $slug}}) {
    id
    status
    title
    date_created
    slug
    elements {
      item {
        ... on blog_image {
          id
          caption
          invert
          image {
            id
            filename_disk
            width
            height
            type
          }
        }
        ... on blog_text {
          word_count
          text
          id
        }
        ... on blog_title {
          title
          level
          tag
          id
        }
        ... on blog_quote {
          id
          text
          author
          url
        }
        ... on blog_map {
          id
        }
        ... on blog_video {
          id
          url
        }
      }
      collection
    }
  }
}
    `;
export const QDevArticlesDocument = gql`
    query QDevArticles {
  blog(sort: "-date_created", filter: {status: {_eq: "published"}}) {
    id
    status
    title
    teaser_text
    date_created
    slug
    technology {
      id
      technology_id {
        ...FTechnology
      }
    }
    elements(filter: {collection: {_eq: "blog_text"}}) {
      item {
        ... on blog_text {
          word_count
          id
        }
      }
      collection
    }
  }
}
    ${FTechnology}`;
export const QDevPrevNextArticlesDocument = gql`
    query QDevPrevNextArticles($date: String!) {
  previous: blog(
    filter: {_and: [{date_created: {_lt: $date}}, {status: {_eq: "published"}}]}
    sort: ["-date_created"]
    limit: 1
  ) {
    id
    title
    slug
  }
  next: blog(
    filter: {_and: [{date_created: {_gt: $date}}, {status: {_eq: "published"}}]}
    sort: ["date_created"]
    limit: 1
  ) {
    id
    title
    slug
  }
}
    `;
export const QMapDocument = gql`
    query QMap {
  place(limit: -1) {
    id
    location
    translations {
      id
      name
      languages_code {
        abbreviation
      }
    }
    country {
      id
      currency_code
      alpha3
      translations {
        id
        name
        currency
        languages_code {
          abbreviation
        }
      }
    }
  }
  transportation(limit: -1) {
    id
    type
    company
    number
    vessel
    departure_airport_code
    arrival_airport_code
    departure
    arrival
    crosspacific
    show_time
    from {
      id
      location
      translations {
        id
        name
      }
    }
    to {
      id
      location
      translations {
        id
        name
      }
    }
  }
}
    `;
export const QNavigationDocument = gql`
    query QNavigation {
  navigation {
    id
    main_navigation_items(sort: "sort", filter: {active: {_eq: true}}) {
      id
      url
      icon
      line
      translations {
        id
        label
        title
        languages_code {
          abbreviation
        }
      }
    }
    misc_navigation_items(sort: "sort", filter: {active: {_eq: true}}) {
      id
      url
      icon
      line
      translations {
        id
        label
        title
        languages_code {
          abbreviation
        }
      }
    }
  }
}
    `;
export const QProjectsDocument = gql`
    query QProjects {
  work {
    id
    projects {
      id
      project_id {
        ...FProject
      }
    }
  }
}
    ${FProject}
${FTechnology}`;
export const QRootDocument = gql`
    query QRoot {
  website {
    travel_blog_image {
      id
      filename_disk
      filename_download
    }
    dev_blog_image {
      id
      filename_disk
      filename_download
    }
    home_image {
      id
      filename_disk
      filename_download
    }
    translations {
      id
      home_title
      home_text
      languages_code {
        abbreviation
      }
    }
  }
  secret_blog_aggregated(filter: {status: {_eq: "published"}}) {
    count {
      id
    }
  }
  blog_aggregated(filter: {status: {_eq: "published"}}) {
    count {
      id
    }
  }
}
    `;
export const QSkillsDocument = gql`
    query QSkills {
  technology_category {
    id
    label
    translations {
      id
      title
      languages_code {
        abbreviation
      }
    }
    technologies {
      id
      list
      translations {
        id
        description
        languages_code {
          abbreviation
        }
      }
      label
      preferred
      children {
        id
        list
        translations {
          id
          description
          languages_code {
            abbreviation
          }
        }
        label
        preferred
      }
    }
  }
}
    `;
export const QStatisticsDocument = gql`
    query QStatistics {
  perCountry: country {
    translations {
      name
    }
    places: place_func {
      count
    }
  }
  perPlace: place {
    translations {
      name
    }
    accommodations: accommodation_func {
      count
    }
  }
  timesToPlace: transportation_aggregated(groupBy: "to") {
    group
    count {
      id
    }
  }
  furthestLat: place {
    location
  }
}
    `;
export const QAccommodationTypeDocument = gql`
    query QAccommodationType {
  accommodationType: booking_aggregated(groupBy: "type", sort: "-count.id") {
    group
    count {
      id
    }
  }
}
    `;
export const QBookingMethodDocument = gql`
    query QBookingMethod {
  bookingMethod: booking_aggregated(
    groupBy: "booking"
    sort: "-count.id"
    filter: {booking: {_neq: null}}
  ) {
    group
    count {
      id
    }
  }
}
    `;
export const QTimePerPlaceDocument = gql`
    query QTimePerPlace {
  timePerCountryAndPlace: transportation(limit: -1) {
    arrival
    departure
    from {
      id
      country {
        id
      }
    }
    to {
      id
      country {
        id
      }
    }
  }
  country {
    id
    translations {
      id
      name
      languages_code {
        abbreviation
      }
    }
  }
  place(limit: -1) {
    id
    country {
      id
    }
    translations {
      id
      name
      languages_code {
        abbreviation
      }
    }
  }
}
    `;
export const QTotalsDocument = gql`
    query QTotals {
  totalCountries: country_aggregated {
    count {
      id
    }
  }
  totalPlaces: place_aggregated {
    count {
      id
    }
  }
  totalAccommodations: accommodation_aggregated {
    count {
      id
    }
  }
  totalBookings: booking_aggregated {
    count {
      id
    }
  }
}
    `;
export const QTransportationTypesDocument = gql`
    query QTransportationTypes {
  transportationTypes: transportation_aggregated(
    groupBy: "type"
    sort: "-count.id"
  ) {
    group
    count {
      id
    }
  }
}
    `;
export const QTravelArticleDocument = gql`
    query QTravelArticle($slug: String!) {
  secret_blog(filter: {slug: {_eq: $slug}}) {
    id
    title
    date_created
    slug
    image {
      id
      filename_disk
    }
    place {
      id
      place_id {
        id
        translations {
          id
          name
          languages_code {
            abbreviation
          }
        }
        country {
          id
          translations {
            id
            name
            languages_code {
              abbreviation
            }
          }
        }
      }
    }
    elements {
      item {
        ... on blog_image {
          id
          caption
          invert
          image {
            id
            filename_disk
            width
            height
            type
          }
        }
        ... on blog_text {
          word_count
          text
          id
        }
        ... on blog_title {
          title
          level
          tag
          id
        }
        ... on blog_quote {
          id
          text
          author
          url
        }
        ... on blog_map {
          id
        }
        ... on blog_video {
          id
          url
        }
      }
      collection
    }
  }
}
    `;
export const QTravelArticlesDocument = gql`
    query QTravelArticles {
  secret_blog(sort: "-date_created", filter: {status: {_eq: "published"}}) {
    id
    status
    title
    date_created
    slug
    image {
      id
      filename_disk
      filename_download
    }
    place {
      id
      place_id {
        id
        country {
          id
          translations {
            id
            name
            languages_code {
              abbreviation
            }
          }
        }
      }
    }
    elements(filter: {collection: {_eq: "blog_text"}}) {
      item {
        ... on blog_text {
          word_count
          id
        }
      }
      collection
    }
  }
}
    `;
export const QTravelPrevNextArticlesDocument = gql`
    query QTravelPrevNextArticles($date: String!) {
  previous: secret_blog(
    filter: {_and: [{date_created: {_lt: $date}}, {status: {_eq: "published"}}]}
    sort: ["-date_created"]
    limit: 1
  ) {
    id
    title
    slug
    image {
      id
      filename_disk
    }
  }
  next: secret_blog(
    filter: {_and: [{date_created: {_gt: $date}}, {status: {_eq: "published"}}]}
    sort: ["date_created"]
    limit: 1
  ) {
    id
    title
    slug
    image {
      id
      filename_disk
    }
  }
}
    `;