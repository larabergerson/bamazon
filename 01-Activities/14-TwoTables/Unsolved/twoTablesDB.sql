 DROP DATABASE IF EXISTS top_songsDB;
CREATE database top_songsDB;

USE top_songsDB;


CREATE TABLE top5000(
    position INT NOT NULL,
    artist VARCHAR (100) NULL, 
    song VARCHAR (100) NULL,
    year INT NULL, 
    raw_total DECIMAL (10,4) NULL,
    raw_usa DECIMAL (10,4) NULL,
    raw_uk DECIMAL (10,4) NULL,
    raw_eur DECIMAL (10,4) NULL,
    raw_row DECIMAL (10,4) NULL,
    PRIMARY KEY (position)

);

CREATE TABLE topAlbum(
    position INT NOT NULL,
    artist VARCHAR (100) NULL, 
    album VARCHAR (100) NULL,
    year INT NULL, 
    raw_total DECIMAL (10,4) NULL,
    raw_usa DECIMAL (10,4) NULL,
    raw_uk DECIMAL (10,4) NULL,
    raw_eur DECIMAL (10,4) NULL,
    raw_row DECIMAL (10,4) NULL,
    PRIMARY KEY (position)

);
SELECT artist FROM top5000, topAlbum CROSS JOIN year;

USE top_songsDB;

SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist  
FROM top_albums 
INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year  = top5000.year) 
WHERE (top_albums.artist = ?AND top5000.artist = ?) ORDER BY top_albums.year, top_albums.position