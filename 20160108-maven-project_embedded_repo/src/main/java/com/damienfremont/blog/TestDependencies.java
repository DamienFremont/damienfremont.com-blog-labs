package com.damienfremont.blog;

import org.apache.commons.csv.CSVFormat;
import org.hamcrest.BaseMatcher;

public class TestDependencies {
  
  // TEST METHOD 1: SYSTEM PATH
  BaseMatcher<?> test1;

  // TEST METHOD 2: LOCAL REPO
  CSVFormat test2;
}
