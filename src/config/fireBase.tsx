import auth from '@react-native-firebase/auth';
import { WEB_CLIENT_ID } from '@env';
import {GoogleSignin,GoogleSigninButton,statusCodes,} from '@react-native-google-signin/google-signin';

export async function onGoogleButtonPress() {
    try {
        GoogleSignin.configure({
            webClientId: '456209557497-2tel283mn3u6bbm2foj1nmsicpc91e2p.apps.googleusercontent.com',
        });
        // Check for Play Services
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        console.log('code running');
        // Sign in with Google
        const response = await GoogleSignin.signIn();
        console.log('response-->', response);
        // Validate response
        if (!response?.data?.idToken) {
            throw new Error('Google Sign-In failed: idToken is missing.');
        }
        // Get Google credential
        const googleCredential = auth.GoogleAuthProvider.credential(response?.data?.idToken);
        // Sign in with Firebase
        return await auth().signInWithCredential(googleCredential);
    } catch (error) {
        // Handle errors
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User cancelled the Google Sign-In process.');
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Google Sign-In is already in progress.');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('Play Services not available or outdated.');
        } else {
            console.error('An unexpected error occurred:', error.message);
        }
        throw error; // Re-throw the error for further handling
    }
}