// navigation.d.ts


export type RootStackParamList = {
    Home: undefined;
    NotificationScreen: undefined;
    ProfileScreen: undefined;
    MapScreen: undefined;
};

// Optional: Add global declaration to use navigation types globally
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
