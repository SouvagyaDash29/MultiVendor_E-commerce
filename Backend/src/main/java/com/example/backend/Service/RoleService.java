package com.example.backend.Service;

import com.example.backend.Model.Roles;

import java.util.List;

public interface RoleService {
    List<Roles> getAllRoles();
    Roles findById(Long roleId);
}
