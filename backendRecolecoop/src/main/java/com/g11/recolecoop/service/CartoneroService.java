package com.g11.recolecoop.service;

import com.g11.recolecoop.entity.Cartonero;
import com.g11.recolecoop.entity.Material;
import com.g11.recolecoop.repository.CartoneroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartoneroService {

    @Autowired
    private CartoneroRepository cartoneroRepository;

    public void save(Cartonero cartonero) {
        cartoneroRepository.save(cartonero);
    }

    public List<Cartonero> getAll() {
        return cartoneroRepository.findAll();
    }

    public Cartonero getById(Long idCartonero) {
        return cartoneroRepository.getById(idCartonero);
    }

    public void update(Cartonero cartonero) {
        cartoneroRepository.save(cartonero);
    }

    public void delete(Cartonero cartonero) {
        cartoneroRepository.delete(cartonero);
    }
}
