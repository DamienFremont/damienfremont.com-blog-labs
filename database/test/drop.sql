-- First, find the activities that are taken place against the target database, you can query the pg_stat_activityview as the following query:

SELECT
   *
FROM
   pg_stat_activity
WHERE
   datname = 'projetmago';

-- Second, terminate the active connections by issuing the following query:

SELECT
   pg_terminate_backend (pg_stat_activity.pid)
FROM
   pg_stat_activity
WHERE
   pg_stat_activity.datname = 'projetmago';

-- Third, execute the DROP DATABASE statement:

DROP DATABASE IF EXISTS projetmago;
DROP USER projetmago;