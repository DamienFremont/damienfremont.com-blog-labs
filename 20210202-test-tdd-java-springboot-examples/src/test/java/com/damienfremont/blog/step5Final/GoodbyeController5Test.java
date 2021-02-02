package com.damienfremont.blog.step5Final;

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
public class GoodbyeController5Test {

    @Autowired
    private MockMvc mvc;
    @MockBean
    private GoodbyeTransform5 transformMock;
    @MockBean
    private GoodbyeValidator5 validatorMock;

    @Test
    public void getGoodbye_success() throws Exception {
        Mockito.when(validatorMock.isValid(Mockito.anyString())).thenReturn(true);
        Mockito.when(transformMock.transform(Mockito.anyString())).thenReturn("Goodbye from DAMIEN!");
        String expected = "Goodbye from DAMIEN!";
        mvc.perform(MockMvcRequestBuilders.get("/goodbye5/damien")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(equalTo(expected)));
    }

    @Test
    public void getGoodbye_not_valid() throws Exception {
        Mockito.when(validatorMock.isValid(Mockito.anyString())).thenReturn(false);
        String expected = "bad arg (ex: Damien)";
        mvc.perform(MockMvcRequestBuilders.get("/goodbye5/xx")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest())
                .andExpect(content().string(equalTo(expected)));
    }
}
