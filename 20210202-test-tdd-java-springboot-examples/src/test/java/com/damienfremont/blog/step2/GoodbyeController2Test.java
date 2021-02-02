package com.damienfremont.blog.step2;

import com.damienfremont.blog.step3.GoodbyeTransform3;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class GoodbyeController2Test {

    @Autowired
    private MockMvc mvc;
    @MockBean
    private GoodbyeTransform3 transformMock;

    @Test
    public void getGoodbye_success() throws Exception {
        String expected = "Goodbye from SPRING!";
        mvc.perform(MockMvcRequestBuilders.get("/goodbye9/")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(equalTo(expected)));
    }

}
