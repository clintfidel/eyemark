import {
  EditProfile,
  Kyc,
  ChangePassword,
  DeactivateAccount,
  EmailNotificationIcon,
  PushNotificationIcon
} from "assets/icons(svg)";

const Settings = [
  {
    name: "Account",
    route: "account",
    component: "Account",
    sub_settings: [
      {
        name: "Edit profile",
        route: "edit-profile",
        component: "EditProfile",
        icon: EditProfile,
        description: "Make changes to your profile."
      },
      {
        name: "KYC (NIN Verification)",
        route: "kyc",
        icon: Kyc,
        component: "Kyc",
        description: "Verify your identity using your NIN."
      },
      {
        name: "Change Password",
        route: "change-password",
        icon: ChangePassword,
        component: "ChangePassword",
        description: "Update or change your password."
      },
      {
        name: "Deactivate Account",
        route: null,
        icon: DeactivateAccount,
        component: null,
        description: "Close your account on the platform.",
        toggle: true
      }
    ]
  },
  {
    name: "Notifications",
    route: "notifications",
    component: "Notification",
    sub_settings: [
      {
        name: "Push Notifications",
        route: "push-notification",
        component: "PushNotication",
        icon: PushNotificationIcon,
        description: "A push notification is a message that pops up on a mobile device.",
        toggle: true
      },
      {
        name: "Email Notifications",
        route: "email-notifications",
        component: "EmailNotication",
        icon: EmailNotificationIcon,
        description: "A push notification is a message that pops up on a mobile device.",
        toggle: true
      }
    ]
  },
  {
    name: "Privacy & safety",
    route: "privacy",
    component: "Privacy"
  },
  {
    name: "Accessibility",
    route: "accessibility",
    component: "Accessibility"
  },
  {
    name: "Additional Resources",
    route: "additional",
    component: "Additional"
  }
];

export default Settings;
