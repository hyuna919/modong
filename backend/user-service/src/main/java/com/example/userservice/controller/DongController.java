package com.example.userservice.controller;


import com.example.userservice.db.repository.UserRepository;
import com.example.userservice.dto.UserDto;
import com.example.userservice.service.DongService;
import com.example.userservice.service.UserService;
import com.example.userservice.vo.*;
import io.micrometer.core.annotation.Timed;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Slf4j
@Validated
@Api(tags = "Dong 관리")
@RestController
@RequestMapping("/user-service")
@RequiredArgsConstructor
public class DongController {


    private final DongService dongService;



    @GetMapping("/sigu")
    public ResponseEntity<List<ResponseCity>> getSigu() {


        List<ResponseCity> ResponseCitys = dongService.getCitys();

        return ResponseEntity.status(HttpStatus.OK).body(ResponseCitys);
    }
    @GetMapping("/gugun/{city}")
    public ResponseEntity<List<ResponseCity>> getGugun(@NotBlank @PathVariable String city) {


        List<ResponseCity> ResponseCitys = dongService.getGugun(city);

        return ResponseEntity.status(HttpStatus.OK).body(ResponseCitys);
    }
    @GetMapping("/dong/{gugun}/{city}")
    public ResponseEntity<List<ResponseCity>> getDong(@NotBlank @PathVariable String gugun ,@NotBlank @PathVariable String city) {


        List<ResponseCity> ResponseCitys = dongService.getDong(gugun , city);

        return ResponseEntity.status(HttpStatus.OK).body(ResponseCitys);
    }
}
