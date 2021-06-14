package com.g11.recolecoop.controller;

import com.g11.recolecoop.entity.Material;
import com.g11.recolecoop.service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class MaterialController {

    @Autowired
    private MaterialService materialService;

    @PostMapping("api/saveMaterial")
    public void saveMaterial(@Valid @RequestBody Material material) {
        materialService.saveMaterial(material);
    }

    @GetMapping("api/getMaterials")
    public List<Material> getMaterials() {
        return materialService.getAllMaterials();
    }

    @GetMapping("api/getMaterialById")
    public Optional<Material> getMaterialById(@Valid @RequestParam Long id_material) {
        return materialService.getMaterialById(id_material);
    }

    @PostMapping("api/deleteMaterial")
    public void deleteMaterial(@Valid @RequestParam Long id_material) {
        materialService.deleteMaterial(id_material);
    }
}
