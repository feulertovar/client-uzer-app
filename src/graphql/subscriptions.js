/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
          contactName
          total
          dueDate
          status
        }
        nextToken
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
          contactName
          total
          dueDate
          status
        }
        nextToken
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
          contactName
          total
          dueDate
          status
        }
        nextToken
      }
    }
  }
`;
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
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
          contactName
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
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
          contactName
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
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
          contactName
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
export const onCreateInvoice = /* GraphQL */ `
  subscription OnCreateInvoice {
    onCreateInvoice {
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
      contactName
      total
      dueDate
      status
    }
  }
`;
export const onUpdateInvoice = /* GraphQL */ `
  subscription OnUpdateInvoice {
    onUpdateInvoice {
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
      contactName
      total
      dueDate
      status
    }
  }
`;
export const onDeleteInvoice = /* GraphQL */ `
  subscription OnDeleteInvoice {
    onDeleteInvoice {
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
      contactName
      total
      dueDate
      status
    }
  }
`;
