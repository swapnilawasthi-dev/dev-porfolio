import React from "react";

function Clipboard() {
  {
    /* Add Role */
  }
  navigate("/admin/roles");
  return (
    <>
      {/* Add Role */}
      <Typography
        variant="body2SemiBold"
        color="#374151"
        sx={{ my: 0.5 }}
        component={"div"}
        children={
          <>
            <span style={{ color: "red" }}>* </span>
            <span>Role Name</span>
          </>
        }
      />
      <Typography
        variant="body2SemiBold"
        color="#374151"
        sx={{ my: 0.5 }}
        component={"div"}
        children={
          <>
            <span style={{ color: "red" }}>* </span>
            <span>Role Description</span>
          </>
        }
      />

      <Typography
        variant="body2SemiBold"
        color="#374151"
        sx={{ my: 0.5 }}
        component={"div"}
        children={
          <>
            <span style={{ color: "red" }}>* </span>
            <span>Product</span>
          </>
        }
      />

      {/* Add User */}

      <Typography
        variant="body2"
        color={"#374151"}
        component={"div"}
        sx={{ my: 0.5 }}
        children={
          <>
            <span style={{ color: "red" }}>* </span>
            <span>{!editEmail ? "Email addresses" : "Email address"}</span>
          </>
        }
      />

      <Typography
        variant="body2"
        color={"#374151"}
        component={"div"}
        sx={{ my: 0.5 }}
        children={
          <>
            <span style={{ color: "red" }}>* </span>
            <span>Permission Options</span>
          </>
        }
      />

      {/* Add User Group  */}
      <Typography
        variant="body2SemiBold"
        color="#374151"
        sx={{ my: 0.5 }}
        component={"div"}
        children={
          <>
            <span style={{ color: "red" }}>* </span>
            <span>Group Name</span>
          </>
        }
      />

      {/* Roles  */}
      {isAUMAdmin() && (
        <IrisButton
          sx={{ ...submitButtonStyle, width: "96px", margin: "unset" }}
          onClick={() => navigateTo("/admin/addrole")}
        >
          New Role
        </IrisButton>
      )}

      {/* User Group  */}
      {isAUMAdmin() && (
        <IrisButton
          sx={{ ...submitButtonStyle, width: "144px", margin: "unset" }}
          onClick={() => navigateTo("/admin/addusergroup")}
        >
          New User Group
        </IrisButton>
      )}

      {/* Users  */}
      {isAUMAdmin() && (
        <IrisButton
          sx={{ ...submitButtonStyle, width: "100px", margin: "unset" }}
          onClick={() => navigateTo("/admin/adduser")}
        >
          New User
        </IrisButton>
      )}
    </>
  );
}

export default Clipboard;
