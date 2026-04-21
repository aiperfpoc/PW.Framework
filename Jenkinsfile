pipeline {
  agent any

  tools {
    nodejs 'NodeJS'
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/aiperfpoc/PW.Framework/.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Install Browsers') {
      steps {
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npx playwright test'
      }
    }

    stage('Generate Allure Report') {
      steps {
        sh 'npx allure generate allure-results --clean -o allure-report'
      }
    }
  }

  post {
    always {
      junit 'results.xml'
      archiveArtifacts artifacts: 'playwright-report/**'
      archiveArtifacts artifacts: 'allure-report/**'
    }
  }
}