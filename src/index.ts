import AdminJS, { NotFoundError } from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import * as AdminJSMongoose from '@adminjs/mongoose'
import mongoose from 'mongoose'
import { Components, componentLoader } from './Components.js'
import { UsersModel } from './User.model.js'
import { MarriedUsersModel } from './Married.model.js'
import MongoStore from 'connect-mongo'
import path from 'path'
import * as url from 'url'
import { InactiveUsersModel } from './Inactive.model.js'

const PORT = 3000

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database
})

const authenticate = async (email, password) => {
  try {
    const user = await UsersModel.findOne({ email });
    if (!user) {
      return null;
    }
    console.log(user);
    if (user.password == password) {
      if (user.role == "admin") {
        return Promise.resolve(user);
      } else {
        console.log("You are not admin");
      }
    } else {
      console.log("wrong password");
    }
  } catch (err) {
    console.error("Authentication error:", err);
  }
};


const start = async () => {
  await mongoose.connect("mongodb+srv://Ajay_3154:RhbKn9sL5CZSKDO4@ajay-kharat.tqbnzca.mongodb.net/admin-panel")

  const sessionStore = MongoStore.create({
    client: mongoose.connection.getClient(),
    collectionName: "session",
    stringify: false,
    autoRemove: "interval",
    autoRemoveInterval: 1,
  });


  const app = express()

  const admin = new AdminJS({
    resources: [
      {
        resource: UsersModel,
        options: {
          id: 'Users',
          parent: { name: "" },
          properties: {
            image: {
              id: "image",
              type: 'string',
              components: {
                list: Components.MyInput,
                show : Components.MyImage
              }
            },
            status : {
              id: "status",
              components : {
                list : Components.MyStatus
              }
            },
            role : {
              components : {
                list : Components.MyStatus,
                show : Components.MyStatus,
              }
            },
            gender : {
              components : {
                list : Components.MyStatus,
                show : Components.MyStatus,
              }
            }
          },
          actions :{
            delete: {
              // isAccessible :  ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin',
              actionType: 'record',
              component: false,
              handler: async (request, _response, context) => {
                const { record, resource, currentAdmin, h } = context;

                if (!request.params.recordId || !record) {
                  throw new NotFoundError(['You have to pass "recordId" to Delete Action'].join('\n'), 'Action#handler');
                }

                try {
                  await UsersModel.findByIdAndDelete(record.params._id);
                } catch (error) {
                  console.log(error)
                }

                return {
                  record: record.toJSON(currentAdmin),
                  redirectUrl: h.resourceUrl({
                    resourceId: resource._decorated?.id() || resource.id()
                  }),
                  notice: {
                    message: 'successfullyDeleted',
                    type: 'success'
                  }
                };
              },

              // parent : 'More',
            },
            married: {
              actionType: 'record',
              component: false,
              handler: async(request, response, context) => {
                const { record, resource, currentAdmin, h } = context
                console.log("the context", context)
                if (!request.params.recordId || !record) {
                  throw new NotFoundError(['You have to pass "recordId" to Delete Action'].join('\n'), 'Action#handler');
                }
                try {
                  console.log("the record", record)
                  await MarriedUsersModel.create({...record.params})
                  await UsersModel.findByIdAndDelete(record.params._id);
                } catch (error) {
                  console.log(error)
                }

                return {
                  record: record.toJSON(currentAdmin),
                  redirectUrl: h.resourceUrl({
                    resourceId: resource._decorated?.id() || resource.id()
                  }),
                  notice: {
                    message: 'User Status Changed',
                    type: 'success'
                  }
                }
              }
              },
             new : {
              name : 'new',
              layout : [
                ['@Header', {children : 'Enter user details'}],
                [
                  {flexDirection: 'row', flex:true},
                  [
                    ['firstName', {flexGrow: 1, marginRight: '10px'}],
                    ['middleName', {flexGrow: 1, marginRight: '10px'}],
                    ['lastName', {flexGrow: 1}],
                  ]
                ],
                [
                  {flexDirection: 'row', flex:true},
                  [
                    ['fullName', {flexGrow: 1, marginRight: '10px'}],
                    ['age', {flexGrow: 1, marginRight: '10px'}],
                    ['image', {flexGrow: 1}],
                  ]
                ],
                [
                  {flexDirection: 'row', flex:true},
                  [
                    ['email', {flexGrow: 1, marginRight: '10px'}],
                    ['height', {flexGrow: 1, marginRight: '10px'}],
                    ['phone', {flexGrow: 1}],
                  ]
                ],
                [
                  {flexDirection: 'row', flex:true},
                  [
                    ['gender', {flexGrow: 1, marginRight: '10px'}],
                    ['status', {flexGrow: 1, marginRight: '10px'}],
                    ['role', {flexGrow: 1}],
                  ]
                ]
              ]
            },
              edit : {
                name : 'edit',
                layout :[
                  ['@Header', {children : 'Enter user details'}],
                  [
                    {flexDirection: 'row', flex:true},
                    [
                      ['firstName', {flexGrow: 1, marginRight: '10px'}],
                      ['middleName', {flexGrow: 1, marginRight: '10px'}],
                      ['lastName', {flexGrow: 1}],
                    ]
                  ],
                  [
                    {flexDirection: 'row', flex:true},
                    [
                      ['fullName', {flexGrow: 1, marginRight: '10px'}],
                      ['age', {flexGrow: 1, marginRight: '10px'}],
                      ['image', {flexGrow: 1}],
                    ]
                  ],
                  [
                    {flexDirection: 'row', flex:true},
                    [
                      ['email', {flexGrow: 1, marginRight: '10px'}],
                      ['height', {flexGrow: 1, marginRight: '10px'}],
                      ['phone', {flexGrow: 1}],
                    ]
                  ],
                  [
                    {flexDirection: 'row', flex:true},
                    [
                      ['gender', {flexGrow: 1, marginRight: '10px'}],
                      ['status', {flexGrow: 1, marginRight: '10px'}],
                      ['role', {flexGrow: 1}],
                    ]
                  ]
                ]
              }
          },

          listProperties: [
            "image",
            "fullName",
            "age",
            "gender",
            "email",
            "phone",
            "role",
            "status",
          ],
          showProperties : [
            "image",
            "fullName",
            "age",
            "gender",
            "email",
            "phone",
            "role",
            "status",
          ]
          // hooks: {
          //   after: async (request, response, context) => {
          //     // context.record contains the fetched record
          //     const { record } = context;
          //     localStorage.setItem("its working", "true")
          //     // Add a custom property to the record
          //     record.params.customProperty = "Custom Value";
          //   },
          // },
          // actions: {
          // myCustomAction: {
          // actionType: 'record',
          // component: {
          //   edit : Components.MyInput
          // },
          // handler: (request, response, context) => {
          //   const { record, currentAdmin } = context
          //   console.log("the context", context)
          //   return {
          //     record: record.toJSON(currentAdmin),
          //     msg: "Hello World !!"
          //   }
          // }
          // }
          // }
          // href: ({ h, resource }) => {
          //   return h.resourceActionUrl({
          //     resourceId: resource.decorate().id(),
          //     actionName: 'list',
          //     params: {
          //       'filters.status': 'active',
          //     },
          //   })
          // },
          // listProperties: ['title'],
          // filterProperties: ['title'],
          // editProperties: ['title'],
          // showProperties: ['title'],
          // properties: {
          // title: {
          //   isVisible: {
          //     list: true, edit: false, filter: true, show: true
          //   }
          // }
          // }
        }
      },
      {
        resource: MarriedUsersModel,
        options: {
          // id: 'Users',
          parent: { name: '' },
          actions: {
            delete: {
              // isAccessible :  ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin',
              actionType: 'record',
              component: false,
              handler: async (request, _response, context) => {
                const { record, resource, currentAdmin, h } = context;

                if (!request.params.recordId || !record) {
                  throw new NotFoundError(['You have to pass "recordId" to Delete Action'].join('\n'), 'Action#handler');
                }

                try {
                  await MarriedUsersModel.findByIdAndDelete(record.params._id);
                } catch (error) {
                  console.log(error)
                }

                return {
                  record: record.toJSON(currentAdmin),
                  redirectUrl: h.resourceUrl({
                    resourceId: resource._decorated?.id() || resource.id()
                  }),
                  notice: {
                    message: 'successfullyDeleted',
                    type: 'success'
                  }
                };
              },

              // parent : 'More',
            },
            bulkDelete: {
              actionType: 'bulk',
              component: false,
              handler: async (request, response, context) => {
                const { records, resource, h } = context;

                if (!records || !records.length) {
                  throw new NotFoundError('no records were selected.', 'Action#handler');
                }

                console.log("the resource of ", resource._decorated?.id(), resource.id(), resource.options?.id())

                await Promise.all(records.map(record => MarriedUsersModel.findByIdAndDelete(record.params._id)));
                return {
                  records: records.map(record => record.toJSON(context.currentAdmin)),
                  redirectUrl: h.resourceUrl({
                    resourceId: resource._decorated?.id() || resource.options?.id() || resource.id()
                  }),
                  notice: {
                    message: records.length > 1 ? 'successfullyBulkDeleted_plural' : 'successfullyBulkDeleted',
                    options: {
                      count: records.length
                    },
                    resourceId: resource.id(),
                    type: 'success'
                  },
                };

              }
            }
          },
          showProperties: [
            "image",
            "fullName",
            "age",
            "gender",
            "email",
            "phone",
            "role",
            "status"
          ],
          properties: {
            image: {
              components: {
                list: Components.MyInput,
                show: Components.MyImage
              }
            },
            status : {
              components : {
                list : Components.MyStatus,
                show : Components.MyStatus,
              }
            },
            role : {
              components : {
                list : Components.MyStatus,
                show : Components.MyStatus,
              }
            },
            gender : {
              components : {
                list : Components.MyStatus,
                show : Components.MyStatus,
              }
            }
          },
          listProperties: [
            "image",
            "fullName",
            "age",
            "gender",
            "email",
            "phone",
            "role",
            "status"
          ],
        }
      },
      // {
      //   resource : InactiveUsersModel,
      //   options : {
      //     parent : {name : ''}
      //   }
      // }
    ],
    branding: {
      companyName: "धर्मादाय संस्था",
      logo: 'http://localhost:5001/100x100.png',
      // logo: false,
      favicon: 'http://localhost:5001/vaishya vani.png'
    },
    assets: {
      styles: ['./styles.css']
    },
    dashboard : {
      component : Components.MyDashboard
    },
    componentLoader,
    rootPath: "/admin"
  });

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: "adminjs",
      cookiePassword: "sessionsecret",
    },
    null,
    {
      store: sessionStore,
      resave: true,
      saveUninitialized: true,
      secret: "sessionsecret",
      cookie: {
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      },
      name: "adminjs",
    }
  )

  // const __dirname = path.resolve();
  // app.use(express.static(__dirname + '/uploads'))

  const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
  app.use(express.static(path.join(__dirname, "./styles.css")));

  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })

}

start()