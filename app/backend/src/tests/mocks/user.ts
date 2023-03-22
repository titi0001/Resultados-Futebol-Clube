import Users from "../../database/models/UserModel";

const usersMock = {
    admin: {
      validAdmin: {
        id: 1,
        username: 'Admin',
        role: 'admin',
        email: 'admin@admin.com',
        password: 'secret_admin',
      },
      invalidAdmin: {
        id: 1,
        username: 'Admin',
        role: 'undefined',
        email: 'admin@xablau.com',
        password: 'senha_invalida',
      },
    },
    user: {
      validUser: {
        id: 2,
        username: 'User',
        role: 'user',
        email: 'user@user.com',
        password: 'secret_user',
      },
      invalidUser: {
        id: 2,
        username: 'User',
        role: 'undefined',
        email: 'user@xablau.com',
        password: 'senha_invalida',
      },
      invalidEmailUsers: [
        {
          id: 3,
          username: 'User',
          role: 'user',
          email: '@user.com',
          password: 'secret_user',
        },
        {
          id: 2,
          username: 'User',
          role: 'user',
          email: 'user@.com',
          password: 'secret_user',
        },
        {
          id: 2,
          username: 'User',
          role: 'user',
          email: 'user@user',
          password: 'secret_user',
        },
      ],
      invalidPasswordUsers: [
         {
          id: 4,
          username: 'User',
          role: 'user',
          email: 'invalid.user@user.com',
          password: '12345',
        }
      ]
    },
    usersToLogin: [
      {
        id: 1,
        username: 'Admin',
        role: 'admin',
        email: 'admin@admin.com',
        password: 'secret_admin',
      }, {
        id: 2,
        username: 'User',
        role: 'user',
        email: 'user@user.com',
        password: 'secret_user',
      },
    ]
  };

  const userModelMock = [
    new Users({
      id: 2,
      username: "User",
      role: "user",
      email: "user@user.com",
      password: "secret_user",
    }),
  ];

  const tokenValidMock = 
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkeGkuSHhrMWN6QU8wblpSLi5CMzkzdTEwYUVEMFJRMU4zUEFFWFE3SHh0TGpLUEVaQnUuUFciLCJpYXQiOjE2Nzk1MDkzNzQsImV4cCI6MTY4MDM3MzM3NH0.jjDjCN78O4SWlaXBPifUceIJUKkpCa2TGW9LZSsfHGo"

     const invalidTokenValidMock = 
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkeGkuSHhrMWN6QU8wblpSLi5CMzkzdTEwYUVEMFJRMU4zUEFFWFE3SHh0TGpLUEVaQnUuUFciLCJpYXQiOjE2Nzk1MDkzNzQsImV4cCI6MTY4MDM3MzM3NH0.jjDjCN78O4SWlaXBPifUceIJUKkpCa2TGW9LZSsfHG"



  export { usersMock, userModelMock, tokenValidMock, invalidTokenValidMock };