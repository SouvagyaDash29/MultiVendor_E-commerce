package com.example.backend.Controller;

import com.example.backend.Model.Roles;
import com.example.backend.Service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roles")
@CrossOrigin(origins = "http://localhost:3000")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping
    public List<Roles> getAllRoles() {
        return roleService.getAllRoles();
    }
    @GetMapping("/{roleId}")
    public ResponseEntity<Roles> findById(@PathVariable Long roleId) {
        Roles role = roleService.findById(roleId);
        if (role != null) {
            return ResponseEntity.ok(role);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
