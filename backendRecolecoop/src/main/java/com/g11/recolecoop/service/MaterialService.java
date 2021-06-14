package com.g11.recolecoop.service;

import com.g11.recolecoop.entity.Material;
import com.g11.recolecoop.repository.MeterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaterialService {

    @Autowired
    private MeterialRepository materialRepository;

    public void saveMaterial(Material material) {
        materialRepository.save(material);
    }

    public List<Material> getAllMaterials() {
        return materialRepository.findAll();
    }

    public Material getMaterialById(Long id_material) {
        return materialRepository.findById(id_material).get();
    }

    public void deleteMaterial(Long id_material) {
        materialRepository.deleteById(id_material);
    }

}
