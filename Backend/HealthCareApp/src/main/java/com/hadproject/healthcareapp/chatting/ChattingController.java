package com.hadproject.healthcareapp.chatting;

import com.hadproject.healthcareapp.chatting.ChattingRequest;
import com.hadproject.healthcareapp.chatting.ChattingResponse;
import com.hadproject.healthcareapp.chatting.ChattingService;
import com.hadproject.healthcareapp.token.Token;
import com.hadproject.healthcareapp.token.TokenRepository;
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
    private final TokenRepository tokenRepository;
    @PostMapping("/sendChat")
    public ResponseEntity<String> SendChat(@RequestBody ChattingRequest request){
        String result =  service.SendChat(request);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/getChat/{receiveremail}")
    public ResponseEntity<Optional<List<ChattingResponse>>> GetChat(@RequestHeader("Authorization") String token , @PathVariable String receiveremail) {
        Optional<Token> token1 = tokenRepository.findByToken(token.split(" ")[1]);
        String senderemail = "";
        System.out.println("********************* "+token.split(" ")[1]);
        if(token1.isPresent()) {
            System.out.println("********************* Sender is Present");
            senderemail = token1.get().getUser().getUsername();
        }
        System.out.println("******************** I got the sender as "+senderemail);
        Optional<List<ChattingResponse>> response = service.GetChat(senderemail, receiveremail);

        if (response.isPresent() && !response.get().isEmpty()) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Optional.empty());
        }
    }
}
