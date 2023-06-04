2023-05-20
프로젝트 시작

2023-05-27
프리즈마설치중
yarn add prisma --save-dev
npx prisma init --datasource-provider sqlite
yarn add @prisma/client
npx prisma migrate dev --name init
npx prisma generate
npx prisma studio

2023-06-04 (https://puterism.com/deploy-next-js-with-ec2/)
ec2 instance 연결
ssh -i practicaltrivia-keypair.pem ec2-user@ec2-54-242-114-179.compute-1.amazonaws.com

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source .bashrc
command -v nvm
nvm install 18.13.0
nvm use 18.13.0
npm i -g yarn
yarn --version
npm i -g pm2

sudo yum install git -y
git version
[ssh 키 등록 후 ssh 로 clone]
ssh-keygen -t ed25519 -C "inyourcareallen@gmail.com"
cat ~/.ssh/id_ed25519.pub

git clone git@github.com:inyourcare/practical-trivia.git
cd practical-trivia
yarn
vi .env
export NODE_OPTIONS="--max-old-space-size=8192"
echo $NODE_OPTIONS
yarn build
pm2 start yarn -w -i 0 --name "next" -- start
[변화가 있으면 빌드하고 reload 하는 형식으로 보임]

빌드에서 막혀서 이전 기록 가져옴 
```
## 도커 순서
```
Docker file example(official document) (output: 'standalone',)
docker build -t [image name] .    (Image name)
docker run -p 3000:3000 [image name] (외부포트:도커내부포트)

-> 맥북 m1 칩에서 할경우 amd 서버에서 에러발생함...
docker buildx build --platform=linux/amd64 -t [image name]:[version] . 
(default: docker buildx build --platform=linux/arm64 -t [image name]:[version] .)

-> 이미지 저장
docker save -o [save file name].tar [image name]
```
```

