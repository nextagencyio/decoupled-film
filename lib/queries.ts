import { gql } from '@apollo/client'

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        __typename
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Projects
export const GET_PROJECTS = gql`
  query GetProjects($first: Int = 20) {
    nodeProjects(first: $first, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeProject {
          body {
            processed
            summary
          }
          projectType {
            ... on TermInterface {
              id
              name
            }
          }
          director
          releaseYear
          runtime
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
          trailerUrl
        }
      }
    }
  }
`

export const GET_PROJECT_BY_PATH = gql`
  query GetProjectByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeProject {
            __typename
            id
            title
            path
            body {
              processed
            }
            projectType {
              ... on TermInterface {
                id
                name
              }
            }
            director
            releaseYear
            runtime
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            trailerUrl
          }
        }
      }
    }
  }
`

// Services
export const GET_SERVICES = gql`
  query GetServices($first: Int = 20) {
    nodeServices(first: $first, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeService {
          body {
            processed
            summary
          }
          serviceArea {
            ... on TermInterface {
              id
              name
            }
          }
          iconName
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_SERVICE_BY_PATH = gql`
  query GetServiceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeService {
            __typename
            id
            title
            path
            body {
              processed
            }
            serviceArea {
              ... on TermInterface {
                id
                name
              }
            }
            iconName
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Team Members
export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers($first: Int = 50) {
    nodeTeamMembers(first: $first, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeTeamMember {
          body {
            processed
          }
          position
          notableCredits
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_TEAM_MEMBER_BY_PATH = gql`
  query GetTeamMemberByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeTeamMember {
            __typename
            id
            title
            path
            body {
              processed
            }
            position
            notableCredits
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// News
export const GET_NEWS = gql`
  query GetNews($first: Int = 20) {
    nodeNewses(first: $first, sortKey: CREATED_AT) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeNews {
          body {
            processed
            summary
          }
          newsCategory {
            ... on TermInterface {
              id
              name
            }
          }
          publishDate {
            timestamp
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_NEWS_BY_PATH = gql`
  query GetNewsByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeNews {
            __typename
            id
            title
            path
            body {
              processed
            }
            newsCategory {
              ... on TermInterface {
                id
                name
              }
            }
            publishDate {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename
            id
            title
            path
            body {
              processed
            }
          }
          ... on NodeProject {
            __typename
            id
            title
            path
            body {
              processed
            }
            projectType {
              ... on TermInterface {
                id
                name
              }
            }
            director
            releaseYear
            runtime
            image {
              url
              alt
              width
              height
            }
            trailerUrl
          }
          ... on NodeService {
            __typename
            id
            title
            path
            body {
              processed
            }
            serviceArea {
              ... on TermInterface {
                id
                name
              }
            }
            iconName
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeTeamMember {
            __typename
            id
            title
            path
            body {
              processed
            }
            position
            notableCredits
            photo {
              url
              alt
              width
              height
            }
          }
          ... on NodeNews {
            __typename
            id
            title
            path
            body {
              processed
            }
            newsCategory {
              ... on TermInterface {
                id
                name
              }
            }
            publishDate {
              timestamp
            }
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeHomepage {
            __typename
            id
            title
            path
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured projects for homepage (limit to 3)
export const GET_FEATURED_ITEMS = gql`
  query GetFeaturedItems {
    nodeProjects(first: 3, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeProject {
          director
          releaseYear
          projectType {
            ... on TermInterface {
              id
              name
            }
          }
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`
