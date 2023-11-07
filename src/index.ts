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
      // {
      //   resource: UsersModel,
      //   options: {
      //     id: 'Users',
      //     parent: { name: "" },
      //     properties: {
      //       imagePath: {
      //         id: "image",
      //         type: 'string',
      //         components: {
      //           list: Components.MyInput
      //         }
      //       }
      //     },
      //     listProperties: [
      //       "imagePath",
      //       "email",
      //       "fullName",
      //       "dateOfBirth",
      //       "height",
      //       "education",
      //       "specsOrContactLenses",
      //       "physique",
      //       "skinTone",
      //       "phone",
      //       "status",
      //     ],
      //     // hooks: {
      //     //   after: async (request, response, context) => {
      //     //     // context.record contains the fetched record
      //     //     const { record } = context;
      //     //     localStorage.setItem("its working", "true")
      //     //     // Add a custom property to the record
      //     //     record.params.customProperty = "Custom Value";
      //     //   },
      //     // },
      //     // actions: {
      //     // myCustomAction: {
      //     // actionType: 'record',
      //     // component: {
      //     //   edit : Components.MyInput
      //     // },
      //     // handler: (request, response, context) => {
      //     //   const { record, currentAdmin } = context
      //     //   console.log("the context", context)
      //     //   return {
      //     //     record: record.toJSON(currentAdmin),
      //     //     msg: "Hello World !!"
      //     //   }
      //     // }
      //     // }
      //     // }
      //     // href: ({ h, resource }) => {
      //     //   return h.resourceActionUrl({
      //     //     resourceId: resource.decorate().id(),
      //     //     actionName: 'list',
      //     //     params: {
      //     //       'filters.status': 'active',
      //     //     },
      //     //   })
      //     // },
      //     // listProperties: ['title'],
      //     // filterProperties: ['title'],
      //     // editProperties: ['title'],
      //     // showProperties: ['title'],
      //     // properties: {
      //     // title: {
      //     //   isVisible: {
      //     //     list: true, edit: false, filter: true, show: true
      //     //   }
      //     // }
      //     // }
      //   }
      // },
      {
        resource: MarriedUsersModel,
        options: {
          id: 'Users',
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

                console.log("resources", resource)

                  await Promise.all(records.map(record => MarriedUsersModel.findByIdAndDelete(record.params._id)));
                  return {
                    records: records.map(record => record.toJSON(context.currentAdmin)),
                    redirectUrl: h.resourceUrl({
                      resourceId: resource.options?.id() || resource.id()
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
            "firstName",
            "middleName",
            "lastName",
            "email",
            "phone"
          ],
          properties: {
            image: {
              components: {
                list: Components.MyInput,
                show: Components.MyImage
              }
            },
          },
          listProperties: [
            "image",
            "fullName",
            "firstName",
            "middleName",
            "lastName",
            "email",
            "phone",
          ],
        }
      }
    ],
    branding: {
      companyName: "धर्मादाय संस्था",
      // logo: 'http://localhost:5001/vaisha-vani-logo.png',
      logo: false,
      favicon: 'http://localhost:5001/vaishya vani.png'
    },
    assets: {
      styles: ['./styles.css']
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