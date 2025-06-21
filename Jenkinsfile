pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "simplebackend"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Sivaneshmani/simple-docker-ci-cd-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('backend') {
                    script {
                        sh "docker build -t $DOCKER_IMAGE:$DOCKER_TAG ."
                    }
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker run -d -p 5000:5000 --env-file backend/.env $DOCKER_IMAGE:$DOCKER_TAG"
                }
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Build or Deployment failed!'
        }
    }
}
