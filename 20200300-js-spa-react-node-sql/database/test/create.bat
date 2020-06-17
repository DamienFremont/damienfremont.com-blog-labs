SET PGVERSION=12
SET PGDATABASE=postgres
SET PGUSER=postgres
SET PGPASSWORD=postgres

SET SCRIPT=drop.sql
"C:\Program Files\PostgreSQL\%PGVERSION%\bin\psql.exe" -U %PGUSER% -f %~dp0%SCRIPT% %PGDATABASE%

SET SCRIPT=create.sql
"C:\Program Files\PostgreSQL\%PGVERSION%\bin\psql.exe" -U %PGUSER% -f %~dp0%SCRIPT% %PGDATABASE%
