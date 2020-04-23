/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
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
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
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
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
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
export const createInvoice = /* GraphQL */ `
  mutation CreateInvoice(
    $input: CreateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    createInvoice(input: $input, condition: $condition) {
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
export const updateInvoice = /* GraphQL */ `
  mutation UpdateInvoice(
    $input: UpdateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    updateInvoice(input: $input, condition: $condition) {
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
export const deleteInvoice = /* GraphQL */ `
  mutation DeleteInvoice(
    $input: DeleteInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    deleteInvoice(input: $input, condition: $condition) {
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
