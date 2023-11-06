import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import express from 'express';
import * as AdminJSMongoose from '@adminjs/mongoose';
import mongoose from 'mongoose';
import { Category } from '../models/Category.model.js';
import { UsersModel } from '../models/User.model.js';
import { Components, componentLoader } from './Components.js';
const PORT = 3000;
AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database
});
const start = async () => {
    await mongoose.connect("mongodb+srv://Ajay_3154:RhbKn9sL5CZSKDO4@ajay-kharat.tqbnzca.mongodb.net/admin-panel");
    const app = express();
    const admin = new AdminJS({
        resources: [
            {
                resource: Category,
                options: {
                    id: 'Profile',
                    parent: { name: "" },
                    properties: {
                        title: {
                            type: 'string',
                            components: {
                                list: Components.MyInput
                            }
                        }
                    },
                    actions: {
                        myCustomAction: {
                            actionType: 'record',
                        }
                    }
                }
            },
            {
                resource: UsersModel,
                options: {
                    parent: { name: "" }
                }
            }
        ],
        branding: {
            companyName: "Matrimony Admin Panel",
            logo: false
        },
        componentLoader,
    });
    const adminRouter = AdminJSExpress.buildRouter(admin);
    app.use(admin.options.rootPath, adminRouter);
    app.listen(PORT, () => {
        console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`);
    });
};
start();
