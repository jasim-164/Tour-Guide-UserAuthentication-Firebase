import React from 'react';
import "./Blog.css"
const Blog = () => {
    return (
        <div>
            <div>
            <div>
            <h1>Difference between authorization and authentication?</h1>
            <p className='bg-info'>	In authentication process, the identity of users are checked for providing the access to the system. While in authorization process, person’s or user’s authorities are checked for accessing the resources. In authentication process, users or persons are verified. While in this process, users or persons are validated. Authentication determines whether the person is user or not. While authorization  determines What permission do user have?</p>
            </div>

            <div>
            <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p className='bg-info'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. However, Firebase has some drawbacks that cause companies to look for other BaaS alternatives. Here are a few reasons why users might switch:

            You're frequently doing complex querying.
            You need your data secured from third parties. (Remember, it's operated by Google.)
            You require a lot of BI tools.
            You want an open source alternative that enables more flexibility and customization.
            You'll be performing data migration. Firebase alternative are - Parse is an open source alternative that many people use instead of Firebase because it offers many of the same features and additional benefits. Supabase is another open source alternative to Firebase, and the main difference is that it is a SQL database rather than NoSQL. Like Supabase and Parse, Kuzzle is also an open source Firebase alternative that offers a real-time database. Back4App calls itself the "Low-code backend to build modern apps".</p>
            <div>
            <h1>What other services does firebase provide other than authentication?</h1>
            <p className='bg-info'>Build Services
            The Firebase build services are designed for developers building and improving their apps. Many Firebase users love the build services because they make it easy to scale by offering a host of different services, including:
            
            Authentication
            Emulator Suite
            Realtime Database
            Cloud Firestore
            Storage
            Machine Learning
            Hosting
            Cloud Functions
            Security Rules
            Extensions</p>
            </div>
            </div>

            </div>
        </div>
    );
};

export default Blog;