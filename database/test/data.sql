INSERT INTO user_entity (id, username, enabled)
  VALUES 
    ('TEST1', 'remy', false)
  , ('TEST2', 'dada', true)
  , ('TEST3', 'toto', true)
;

INSERT INTO credential (user_id, credential_data, algorithm)
  VALUES 
    ('TEST2', 'dada', null),
    ('TEST3', '10e06b990d44de0091a2113fd95c92fc905166af147aa7632639c41aa7f26b1620c47443813c605b924c05591c161ecc35944fc69c4433a49d10fc6b04a33611', 'sha512')
;