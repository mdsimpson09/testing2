-- CreateTable
CREATE TABLE "Player" (
    "player_id" SERIAL NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "Date_of_birth" DATE NOT NULL,
    "preferred_pronouns" VARCHAR(50) NOT NULL,
    "zip_code" VARCHAR(5) NOT NULL,
    "photo" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("player_id")
);

-- CreateTable
CREATE TABLE "PlayerProfile" (
    "profile_id" SERIAL NOT NULL,
    "player_id" INTEGER NOT NULL,
    "top_games" VARCHAR(255),
    "favorite_gaming_device" VARCHAR(100),
    "biggest_gaming_pet_peeve" VARCHAR(255),
    "looking_for" VARCHAR(255),

    CONSTRAINT "PlayerProfile_pkey" PRIMARY KEY ("profile_id")
);

-- CreateTable
CREATE TABLE "DislikedProfile" (
    "player_id" INTEGER NOT NULL,
    "disliked_player_id" INTEGER NOT NULL,
    "disliked_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DislikedProfile_pkey" PRIMARY KEY ("player_id","disliked_player_id")
);

-- CreateTable
CREATE TABLE "LikedProfile" (
    "player_id" INTEGER NOT NULL,
    "liked_player_id" INTEGER NOT NULL,

    CONSTRAINT "LikedProfile_pkey" PRIMARY KEY ("player_id","liked_player_id")
);

-- CreateTable
CREATE TABLE "MatchedProfile" (
    "player_id_1" INTEGER NOT NULL,
    "player_id_2" INTEGER NOT NULL,

    CONSTRAINT "MatchedProfile_pkey" PRIMARY KEY ("player_id_1","player_id_2")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_username_key" ON "Player"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Player_email_key" ON "Player"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerProfile_player_id_key" ON "PlayerProfile"("player_id");

-- AddForeignKey
ALTER TABLE "PlayerProfile" ADD CONSTRAINT "PlayerProfile_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Player"("player_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DislikedProfile" ADD CONSTRAINT "DislikedProfile_disliked_player_id_fkey" FOREIGN KEY ("disliked_player_id") REFERENCES "Player"("player_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "DislikedProfile" ADD CONSTRAINT "DislikedProfile_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Player"("player_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LikedProfile" ADD CONSTRAINT "LikedProfile_liked_player_id_fkey" FOREIGN KEY ("liked_player_id") REFERENCES "Player"("player_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LikedProfile" ADD CONSTRAINT "LikedProfile_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Player"("player_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MatchedProfile" ADD CONSTRAINT "MatchedProfile_player_id_1_fkey" FOREIGN KEY ("player_id_1") REFERENCES "Player"("player_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MatchedProfile" ADD CONSTRAINT "MatchedProfile_player_id_2_fkey" FOREIGN KEY ("player_id_2") REFERENCES "Player"("player_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
