pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "simplebackend"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                echo '🔧 Building Docker image...'
                sh 'docker build -t $DOCKER_IMAGE ./backend'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo '🚀 Running Docker container...'
                sh 'docker run -d -p 5000:5000 $DOCKER_IMAGE'
            }
        }
    }

    post {
        failure {
            echo "❌ Build or Deployment failed!"
        }
        success {
            echo "✅ CI/CD pipeline completed successfully!"
        }
    }
}
