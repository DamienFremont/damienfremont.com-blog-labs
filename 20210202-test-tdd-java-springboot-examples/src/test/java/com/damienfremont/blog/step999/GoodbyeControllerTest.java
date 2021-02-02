package com.damienfremont.blog.step999;

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
public class GoodbyeControllerTest {

    @Autowired
    private MockMvc mvc;
    @MockBean
    private GoodbyeTransform transformMock;
    @MockBean
    private GoodbyeValidator validatorMock;

    @Test
    public void getGoodbye_success() throws Exception {
        Mockito.when(validatorMock.isValid(Mockito.anyString())).thenReturn(true);
        Mockito.when(transformMock.transform(Mockito.anyString())).thenReturn("Goodbye from DAMIEN!");
        String expected = "Goodbye from DAMIEN!";
        mvc.perform(MockMvcRequestBuilders.get("/goodbye/damien")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(equalTo(expected)));
    }

    @Test
    public void getGoodbye_not_valid() throws Exception {
        Mockito.when(validatorMock.isValid(Mockito.anyString())).thenReturn(false);
        mvc.perform(MockMvcRequestBuilders.get("/goodbye/xx")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }
}
