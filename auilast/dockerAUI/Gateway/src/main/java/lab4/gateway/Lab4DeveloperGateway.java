package lab4.gateway;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Lab4DeveloperGateway {
	public static void main(String[] args) {
		SpringApplication.run(Lab4DeveloperGateway.class, args);
	}

	@Bean
	public RouteLocator routeLocator(RouteLocatorBuilder builder, @Value("${lab4.gunClass.url}") String gunClassUrl,
			@Value("${lab4.gun.url}") String gunUrl, @Value("${lab4.gateway.host}") String host) {
		return builder.routes()
				.route("guns", route -> route.host(host)
						.and()
						.path("/api/guns/{uuid}", "/api/guns")
						.uri(gunUrl))
				.route("gunClasses", route -> route.host(host)
						.and()
						.path("/api/gunClasses", "/api/gunClasses/**", "/api/guns/{uuid}/gunClasses",
								"/api/guns/{uuid}/gunClasses/**")
						.uri(gunClassUrl))
				.build();
	}

}
