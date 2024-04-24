package com.example.backend.Service.Impl;

import com.example.backend.Model.Roles;
import com.example.backend.Repositary.RoleRepository;
import com.example.backend.Service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    @Autowired
    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public List<Roles> getAllRoles() {
        return roleRepository.findAll();
    }

    @Override
    public Roles findById(Long roleId) {
        return  roleRepository.findById(roleId).orElse(null);
    }


}
