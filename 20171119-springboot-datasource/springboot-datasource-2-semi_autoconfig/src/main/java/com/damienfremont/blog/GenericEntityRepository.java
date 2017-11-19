package com.damienfremont.blog;

import org.springframework.data.jpa.repository.*;

public interface GenericEntityRepository //
  extends JpaRepository<GenericEntity, Long> {
}