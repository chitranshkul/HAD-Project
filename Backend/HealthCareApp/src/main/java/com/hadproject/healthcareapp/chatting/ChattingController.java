package com.hadproject.healthcareapp.chatting;

import com.hadproject.healthcareapp.chatting.ChattingRequest;
import com.hadproject.healthcareapp.chatting.ChattingResponse;
import com.hadproject.healthcareapp.chatting.ChattingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("api/v1/chatting")
@RestController
@RequiredArgsConstructor
public class ChattingController {
    private final ChattingService service;

    @PostMapping("/sendChat")
    public ResponseEntity<String> SendChat(@RequestBody ChattingRequest request){
        String result =  service.SendChat(request);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/getChat/{senderemail}/{receiveremail}")
    public ResponseEntity<Optional<List<ChattingResponse>>> GetChat(@PathVariable String senderemail, @PathVariable String receiveremail) {
        Optional<List<ChattingResponse>> response = service.GetChat(senderemail, receiveremail);

        if (response.isPresent() && !response.get().isEmpty()) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Optional.empty());
        }
    }
}
