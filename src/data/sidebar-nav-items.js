export default function() {
  return [
    {
      title: "Dashboard",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">dashboard</i>',
      htmlAfter: ""
    },
    {
      title: "My Patients",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/mypatients",
    },
    {
      title: "Messages",
      htmlBefore: '<i class="material-icons">chat</i>',
      to: "/messages",
    },
    {
      title: "Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile",
    }
  ];
}
