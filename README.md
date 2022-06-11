## Android Setup
To allow the Android app to securely connect to your Firebase project, a configuration file must be downloaded and added to your project.

### Generating Android credentials
On the Firebase console, add a new Android application and enter your projects details. The "Android package name" must match your local projects package name which can be found inside of the manifest tag within the /android/app/src/main/AndroidManifest.xml file within your project.

The debug signing certificate is optional to use Firebase with your app, but is required for Dynamic Links, Invites and Phone Authentication. To generate a certificate run cd android && ./gradlew signingReport. This generates two variant keys. You have to copy both 'SHA1' and 'SHA-256' keys that belong to the 'debugAndroidTest' variant key option. Then, you can add those keys to the 'SHA certificate fingerprints' on your app in Firebase console.

Download the google-services.json file and place it inside of your project at the following location: /android/app/google-services.json.

### Configure Firebase with Android credentials
To allow Firebase on Android to use the credentials, the google-services plugin must be enabled on the project. This requires modification to two files in the Android directory.

First, add the google-services plugin as a dependency inside of your /android/build.gradle file:

```
buildscript {
  dependencies {
    // ... other dependencies
    classpath 'com.google.gms:google-services:4.3.10'
    // Add me --- /\
  }
}
```

Lastly, execute the plugin by adding the following to your /android/app/build.gradle file:
```
apply plugin: 'com.android.application'
apply plugin: 'com.google.gms.google-services' // <- Add this line
```