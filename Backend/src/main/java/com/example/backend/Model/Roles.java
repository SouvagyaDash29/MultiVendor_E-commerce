package com.example.backend.Model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.HashSet;
import java.util.Set;

@Entity

public class Roles {
    @Id
    @Column(name = "Role_ID", nullable = false)
    private Long roleId;

    @Column(name = "Role_Name", nullable = false)
    private String roleName;

    @ManyToMany(mappedBy = "role")
    Set<User> users = new HashSet<>();

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }
}
