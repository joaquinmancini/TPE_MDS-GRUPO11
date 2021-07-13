package com.g11.recolecoop.controller;

import com.g11.recolecoop.entity.Material;
import com.g11.recolecoop.service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/material")
public class MaterialController {

    @Autowired
    private MaterialService materialService;

    @PostMapping("/saveMaterial")
    public void saveMaterial(@Valid @RequestBody Material material) {
        materialService.saveMaterial(material);
    }

    @GetMapping("/getMaterials")
    public List<Material> getMaterials() {
        return materialService.getAllMaterials();
    }

    @GetMapping("/getMaterialById")
    public Material getMaterialById(@Valid @RequestParam Long id_material) {
        return materialService.getMaterialById(id_material);
    }

    @PostMapping("/deleteMaterial")
    public void deleteMaterial(@Valid @RequestParam Long id_material) {
        materialService.deleteMaterial(id_material);
    }

    @PostMapping("/updateMaterial")
    public void updateMaterial(@Valid @RequestBody Material material) { materialService.updateMaterial(material); }

}
