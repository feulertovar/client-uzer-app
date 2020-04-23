/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          blogID
        }
        nextToken
      }
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
      }
      comments {
        items {
          id
          postID
          content
        }
        nextToken
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blogID
        blog {
          id
          name
        }
        comments {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      post {
        id
        title
        blogID
        blog {
          id
          name
        }
        comments {
          nextToken
        }
      }
      content
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        post {
          id
          title
          blogID
        }
        content
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userPoolID
      username
      email
      contacts {
        items {
          id
          firstName
          lastName
          userID
          email
          phoneNumber
          note
          company
        }
        nextToken
      }
      invoices {
        items {
          id
          contactID
          userID
          total
          dueDate
          status
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userPoolID
        username
        email
        contacts {
          nextToken
        }
        invoices {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      firstName
      lastName
      userID
      user {
        id
        userPoolID
        username
        email
        contacts {
          nextToken
        }
        invoices {
          nextToken
        }
      }
      email
      phoneNumber
      invoices {
        items {
          id
          contactID
          userID
          total
          dueDate
          status
        }
        nextToken
      }
      note
      company
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        userID
        user {
          id
          userPoolID
          username
          email
        }
        email
        phoneNumber
        invoices {
          nextToken
        }
        note
        company
      }
      nextToken
    }
  }
`;
export const getInvoice = /* GraphQL */ `
  query GetInvoice($id: ID!) {
    getInvoice(id: $id) {
      id
      contactID
      userID
      user {
        id
        userPoolID
        username
        email
        contacts {
          nextToken
        }
        invoices {
          nextToken
        }
      }
      contact {
        id
        firstName
        lastName
        userID
        user {
          id
          userPoolID
          username
          email
        }
        email
        phoneNumber
        invoices {
          nextToken
        }
        note
        company
      }
      total
      dueDate
      status
    }
  }
`;
export const listInvoices = /* GraphQL */ `
  query ListInvoices(
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contactID
        userID
        user {
          id
          userPoolID
          username
          email
        }
        contact {
          id
          firstName
          lastName
          userID
          email
          phoneNumber
          note
          company
        }
        total
        dueDate
        status
      }
      nextToken
    }
  }
`;
