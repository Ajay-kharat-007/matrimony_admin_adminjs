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

  const layout = [
    ['@Header', { children: 'Enter User Details' }],
    // Row 1
    [
      { flexDirection: 'row', flex: true },
      [
        ['firstName', { flexGrow: 1, marginRight: '10px' }],
        ['middleName', { flexGrow: 1, marginRight: '10px' }],
        ['lastName', { flexGrow: 1, marginRight: '10px' }],
        ['fullName', { flexGrow: 1 }],
      ],
    ],
    // Row 2
    [
      { flexDirection: 'row', flex: true },
      [
        ['email', { flexGrow: 1, marginRight: '10px' }],
        ['phone', { flexGrow: 1, marginRight: '10px' }],
        ['image', { flexGrow: 1, marginRight: '10px' }],
        ['password', { flexGrow: 1 }],
      ],
    ],
    // Row 3
    [
      { flexDirection: 'row', flex: true },
      [
        ['status', { flexGrow: 1, marginRight: '10px' }],
        ['gender', { flexGrow: 1, marginRight: '10px' }],
        ['maritalStatus', { flexGrow: 1, marginRight: '10px' }],
        ['dateOfBirth', { flexGrow: 1 }],
      ],
    ],
    // Row 4
    [
      { flexDirection: 'row', flex: true },
      [
        ['height', { flexGrow: 1, marginRight: '10px' }],
        ['age', { flexGrow: 1, marginRight: '10px' }],
        ['weight', { flexGrow: 1, marginRight: '10px' }],
        ['bloodGroup', { flexGrow: 1 }],
      ],
    ],
    // Row 5
    [
      { flexDirection: 'row', flex: true },
      [
        ['whatsappNumber', { flexGrow: 1, marginRight: '10px' }],
        ['parentName', { flexGrow: 1, marginRight: '10px' }],
        ['relationWithParent', { flexGrow: 1, marginRight: '10px' }],
        ['parentOccupation', { flexGrow: 1 }],
      ],
    ],
    // Row 6
    [
      { flexDirection: 'row', flex: true },
      [
        ['motherStatus', { flexGrow: 1, marginRight: '10px' }],
        ['fatherStatus', { flexGrow: 1, marginRight: '10px' }],
        ['brothersMarried', { flexGrow: 1, marginRight: '10px' }],
        ['brothersUnmarried', { flexGrow: 1 }],
      ],
    ],
    // Row 7
    [
      { flexDirection: 'row', flex: true },
      [
        ['sistersMarried', { flexGrow: 1, marginRight: '10px' }],
        ['sistersUnmarried', { flexGrow: 1, marginRight: '10px' }],
        ['totalSiblings', { flexGrow: 1, marginRight: '10px' }],
        ['mothersMaternalSurname', { flexGrow: 1 }],
      ],
    ],
    // Row 8
    [
      { flexDirection: 'row', flex: true },
      [
        ['mothersMaternalNativePlace', { flexGrow: 1, marginRight: '10px' }],
        ['mothersMaternalPlaceDistrict', { flexGrow: 1, marginRight: '10px' }],
        ['education', { flexGrow: 1, marginRight: '10px' }],
        ['otherEducationalDetails', { flexGrow: 1 }],
      ],
    ],
    // Row 9
    [
      { flexDirection: 'row', flex: true },
      [
        ['jobOrOccupation', { flexGrow: 1, marginRight: '10px' }],
        ['jobOccupationDetails', { flexGrow: 1, marginRight: '10px' }],
        ['jobOccupationAddress', { flexGrow: 1, marginRight: '10px' }],
        ['incomePerAnnum', { flexGrow: 1 }],
      ],
    ],
    // Row 10
    [
      { flexDirection: 'row', flex: true },
      [
        ['isPhysicallyChallenged', { flexGrow: 1, marginRight: '10px' }],
        ['physicallyChallengedDetails', { flexGrow: 1, marginRight: '10px' }],
        ['physique', { flexGrow: 1, marginRight: '10px' }],
        ['specsOrContactLenses', { flexGrow: 1 }],
      ],
    ],
    // Row 11
    [
      { flexDirection: 'row', flex: true },
      [
        ['skinTone', { flexGrow: 1, marginRight: '10px' }],
        ['horoscopeMatching', { flexGrow: 1, marginRight: '10px' }],
        ['manglikAsPerHoroscope', { flexGrow: 1, marginRight: '10px' }],
        ['gotra', { flexGrow: 1 }],
      ],
    ],
    // Row 12
    [
      { flexDirection: 'row', flex: true },
      [
        ['kuladaivat', { flexGrow: 1, marginRight: '10px' }],
        ['otherImportantDetails', { flexGrow: 1, marginRight: '10px' }],
        ['country', { flexGrow: 1, marginRight: '10px' }],
        ['countryNameIfOutsideIndia', { flexGrow: 1 }],
      ],
    ],
    // Row 13
    [
      { flexDirection: 'row', flex: true },
      [
        ['address', { flexGrow: 1, marginRight: '10px' }],
        ['locationCity', { flexGrow: 1, marginRight: '10px' }],
        ['state', { flexGrow: 1, marginRight: '10px' }],
        ['pincode', { flexGrow: 1 }],
      ],
    ],
    // Row 14
    [
      { flexDirection: 'row', flex: true },
      [
        ['nativePlace', { flexGrow: 1, marginRight: '10px' }],
        ['nativePlaceTaluka', { flexGrow: 1, marginRight: '10px' }],
        ['nativePlaceDistrict', { flexGrow: 1, marginRight: '10px' }],
        ['hasOtherOwnershipResidence', { flexGrow: 1 }],
      ],
    ],
    // Row 15
    [
      { flexDirection: 'row', flex: true },
      [
        ['addressOfOtherOwnershipResidence', { flexGrow: 1, marginRight: '10px' }],
        ['closeRelativeName', { flexGrow: 1, marginRight: '10px' }],
        ['closeRelativeAddress', { flexGrow: 1, marginRight: '10px' }],
        ['closeRelativeContactDetails', { flexGrow: 1 }],
      ],
    ],
    // Row 16
    [
      { flexDirection: 'row', flex: true },
      [
        ['isSubCastePreferred', { flexGrow: 1, marginRight: '10px' }],
        ['isPartnerOutsideMumbaiPreferred', { flexGrow: 1, marginRight: '10px' }],
        ['otherExpectationsFromPartner', { flexGrow: 1, marginRight: '10px' }],
        ['paymentStatus', { flexGrow: 1 }],
      ],
    ],
    // Row 17
    [
      { flexDirection: 'row', flex: true },
      [
        ['subscriptionStartDate', { flexGrow: 1, marginRight: '10px' }],
        ['subscriptionEndDate', { flexGrow: 1 }],
      ],
    ],
  ]

  const properties = [
    "image",
    "fullName",
    "age",
    "gender",
    "email",
    "phone",
    "status",
  ]

  const app = express()

  const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
  app.use(express.static(__dirname + '/public'))

  const admin = new AdminJS({
    assets: {
      styles: ["/custom.css"]
    },

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
                show: Components.MyImage
              }
            },
            status: {
              id: "status",
              components: {
                list: Components.MyStatus
              }
            },
            role: {
              components: {
                list: Components.MyStatus,
                show: Components.MyStatus,
              }
            },
            gender: {
              components: {
                list: Components.MyStatus,
                show: Components.MyStatus,
              }
            }
          },
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
              handler: async (request, response, context) => {
                const { record, resource, currentAdmin, h } = context
                console.log("the context", context)
                if (!request.params.recordId || !record) {
                  throw new NotFoundError(['You have to pass "recordId" to Delete Action'].join('\n'), 'Action#handler');
                }
                try {
                  console.log("the record", record)
                  await MarriedUsersModel.create({ ...record.params })
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
            new: {
              name: 'new',
              layout: layout
            },
            edit: {
              name: 'edit',
              layout: layout
            },
            show : {
              component : Components.MyShow
            },
            bulkUpload : {
              actionType: 'resource',
              component: Components.MyBulk,
              handler: (request, response, context) => {
                const { record, currentAdmin } = context
                return {
                  record: record.toJSON(currentAdmin),
                  msg: 'Hello world',
                }
              },
            }
          },
          listProperties: properties,
          showProperties: properties,
          filterProperties : properties
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
            },
            new: {
              name: 'new',
              layout: layout
            },
            edit: {
              name: 'edit',
              layout: layout
            },
            show : {
              component : Components.MyShow
            }
          },
          properties: {
            image: {
              components: {
                list: Components.MyInput,
                show: Components.MyImage
              }
            },
            status: {
              components: {
                list: Components.MyStatus,
                show: Components.MyStatus,
              }
            },
            role: {
              components: {
                list: Components.MyStatus,
                show: Components.MyStatus,
              }
            },
            gender: {
              components: {
                list: Components.MyStatus,
                show: Components.MyStatus,
              }
            }
          },
          listProperties: properties,
          showProperties: properties,
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
      // logo: 'http://localhost:5001/100x100.png',
      logo:false,
      favicon: 'http://localhost:5001/vaishya vani.png',
    },

    dashboard: {
      component: Components.MyDashboard
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

  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })

}

start()