FROM eclipse-temurin:17.0.6_10-jre

ENV VERSION="0.0.1-SNAPSHOT"

ENV SERVER_PORT=8080

ENV LAB4_GATEWAY_URL=localhost:8080
ENV LAB4_MAN_URL=http://localhost:8081
ENV LAB4_JOB_URL=http://localhost:8082

EXPOSE 8080

COPY target/lab4.gateway-${VERSION}.jar /opt/lab4.gateway/lab4.gateway.jar

CMD ["java", "-jar", "/opt/lab4.gateway/lab4.gateway.jar"]