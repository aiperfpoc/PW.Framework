pipeline {
    agent any

    tools {
        git 'Default-Git'
    }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/aiperfpoc/PW.Framework.git/'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Allure Report') {
            steps {
                bat 'allure generate ./allure-results --clean -o ./allure-report'
            }
        }
    }
}
