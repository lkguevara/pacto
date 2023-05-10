const admin = require("firebase-admin");
const express = require('express');
const checkUserExists = require("../database/helper/DBcheckUserExists");
const createUser = require("../database/controllers/users/userPost/DBUserCreate");
const router = express.Router();
require("dotenv").config()
//const credentials = require("C:/Users/gaby_/Desktop/pacto/backend/firebase/firebase-admin-key.json")
const serviceAccount = {
    type: process.env.FIREBASE_ADMIN_TYPE,
    project_id: process.env.FIREBASE_ADMIN_PROJECT_ID,
    private_key_id: process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_ADMIN_CLIENT_ID,
    auth_uri: process.env.FIREBASE_ADMIN_AUTH_URI,
    token_uri: process.env.FIREBASE_ADMIN_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_ADMIN_CLIENT_X509_CERT_URL
};

const firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
const firebaseAdminAuth = admin.auth()
const aux = async () => {
    const nombre = (await firebaseAdminAuth.getUser("ZqxDan1LsVQRupYxSXFRPwEDtWE3")).displayName
    const partes = nombre.split(" ")
    console.log(partes)
    const firstname = partes.shift()
    const lastname = partes.pop()
    console.log(firstname, " + ", lastname)
}
aux()

router.get("/authgoogle", async (req, res) => {
    try {
        const { uid } = req.query
        const user = await firebaseAdminAuth.getUser(uid)
        const userdb = checkUserExists(null, user.email)
        if (userdb === false) {
            const aux = user.displayName.split(" ")
            const phonenumber = user.phoneNumber ? null : user.phoneNumber
            const newUser = {
                firstname: aux.shift(),
                lastname: aux.pop(),
                calification: 0,
                email: user.email,
                state: true,
                verified: true,
                phone: phonenumber,
                password: null,
                address: "None"
            }
            const response = await createUser(newUser, true)

            // ACA SE DEBERIA TRABAJAR CON EL TOKEN
            res.status(200).json(response)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})
module.exports = firebaseAdmin


