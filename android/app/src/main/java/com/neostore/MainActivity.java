package com.neostore;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
// import com.eguma.vibration.Vibration;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  
        super.onCreate(savedInstanceState);
    //     mReactRootView = new ReactRootView(this);
 
    // mReactInstanceManager = ReactInstanceManager.builder()
    //   .setApplication(getApplication())
    //   .setBundleAssetName("index.android.bundle")
    //   .setJSMainModuleName("index.android")
    //   .addPackage(new MainReactPackage())
    //   .addPackage(new Vibration())              // <------ add here 
    //   .setUseDeveloperSupport(BuildConfig.DEBUG)
    //   .setInitialLifecycleState(LifecycleState.RESUMED)
    //   .build();
 
    // mReactRootView.startReactApplication(mReactInstanceManager, "example", null);
 
    // setContentView(mReactRootView);
    }

    @Override
    protected String getMainComponentName() {
        return "NeoStore";
    }
}
